import Image from "next/image";
import { notFound } from "next/navigation";

import { CardContent } from "@/app/Components/ui/card";
import { db } from "@/lib/prisma";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";

interface GymDetailsProps {
  params: Promise<{ gymId: string }>;
}

const GymDetails = async ({ params }: GymDetailsProps) => {
  const { gymId } = await params;
  const gym = await db.gym.findUnique({
    where: {
      id: gymId,
    },
  });

  if (!gym) {
    return notFound();
  }
  return (
    <main>
      <section className="mx-auto my-16 flex w-[100%] items-center justify-center gap-20">
        <div>
          <div className="-mb-10 ml-8 flex flex-col">
            <h3 className="text-lg text-black">Academia</h3>
            <h1 className="text-2xl font-bold text-black">{gym.name}</h1>
          </div>
          <Carousel className="w-full max-w-[720px]">
            <CarouselContent>
              {gym.images.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={imageUrl}
                        alt={`Image ${index + 1} of ${gym.name}`}
                        width={580}
                        height={500}
                        className="w-full rounded-lg object-cover"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <h1>{gym.phone}</h1>
        </div>
      </section>
    </main>
  );
};

export default GymDetails;
