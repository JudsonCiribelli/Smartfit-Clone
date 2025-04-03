import { BatteryCharging, Clock, Target } from "lucide-react";
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
      <section className="m-10 w-[full]">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="m-8 flex gap-10">
            <div className="flex flex-col items-center justify-center">
              <Clock size={30} className="text-black" />
              <h2 className="text-lg text-black">Duração</h2>
              <p className="text-xs text-black">{workout.duration} min</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Target size={30} className="text-black" />
              <h2 className="text-lg text-black">Objetivo</h2>
              <p className="text-xs text-black">{workout.objective}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BatteryCharging size={30} className="text-black" />
              <h2 className="text-lg text-black">Intensidade</h2>
              <p className="text-xs text-black">{workout.intensity}</p>
            </div>
          </div>
          <div className="m-8 flex w-[50%] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl text-black">
              Como é a aula de {workout.name} ?
            </h1>
            <p className="text-black">{workout.overview}</p>
          </div>

          <div className="flex items-center justify-center gap-8 border-t-2 border-foreground p-8">
            <Image
              src={workout.coverImgUrl}
              alt="cover image"
              width={400}
              height={400}
              className="rounded-xl"
            />
            <div className="m-8 flex w-[40%] max-w-[800px] flex-col items-start justify-between gap-4">
              <h1 className="text-2xl text-black">
                Por que fazer aula de {workout.name} ?{" "}
              </h1>
              <p className="text-xs text-black">{workout.benefits}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkoutPageDetails;
