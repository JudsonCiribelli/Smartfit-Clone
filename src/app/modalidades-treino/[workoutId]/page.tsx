import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/app/Components/ui/button";
import { db } from "@/lib/prisma";

interface WorkoutPageDetailsProps {
  params: Promise<{ workoutId: string }>;
}

const WorkoutPageDetails = async ({ params }: WorkoutPageDetailsProps) => {
  const { workoutId } = await params;
  const workout = await db.workout.findUnique({
    where: {
      id: workoutId,
    },
  });
  if (!workout) {
    return notFound();
  }
  console.log({ workout });
  return (
    <>
      <section className="h-14 w-[100%] bg-black"></section>
      <section className="w-[full] bg-foreground">
        <div className="flex items-center justify-center gap-10 p-8">
          {/* Description */}
          <div className="flex w-[30%] flex-col gap-4">
            <h1 className="text-3xl font-semibold text-black">
              {workout.name}
            </h1>
            <p className="text-lg text-black">{workout.trainingMethod}</p>
            <Button className="w-[250px] p-4" variant="destructive">
              Escolha sua academia
            </Button>
          </div>
          {/* Image */}
          <div>
            <Image
              src={workout.imageUrl}
              alt="Image-training"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkoutPageDetails;
