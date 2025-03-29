import { Clock10, Globe, MapPinned } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/app/Components/ui/button";
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
        <div className="flex flex-col gap-4">
          {/* Primeiro Card */}
          <div className="flex h-[200px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <Clock10 size={36} />
            </div>
            {/* Horarios */}
            <div className="flex flex-col gap-1">
              <h1 className="text-lg text-black">Horário de funcionamento</h1>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-black">Seg a Sex</p>
                <p className="text-sm text-black">5h - 23h</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Sáb</p>
                <p className="text-sm text-black">8h - 17h</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Dom/Feriados</p>
                <p className="text-sm text-black">8h - 14h</p>
              </div>
              <Button
                variant="outline"
                className="mt-2 border-none text-black underline hover:bg-white"
              >
                Ver ocupação da unidade
              </Button>
            </div>
          </div>
          {/* Segundo Card */}
          <div className="flex h-[150px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <MapPinned size={36} />
            </div>
            {/* Texto */}
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-black">Endereço</h1>
                <p className="text-xs text-black">{gym.address}</p>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-[250px] border-none text-black underline hover:bg-white"
              >
                Ver rota
              </Button>
            </div>
          </div>
          {/* Terceito Card */}
          <div className="flex h-[180px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <Globe size={36} />
            </div>
            {/* Texto */}
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-black">
                  Faça um tour virtual na academia!
                </h1>
                <p className="text-xs text-black">
                  Com o tour virtual você consegue conhecer a academia antes de
                  contratar o plano!
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-[250px] border-none text-black underline hover:bg-white"
              >
                Ver rota
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GymDetails;
