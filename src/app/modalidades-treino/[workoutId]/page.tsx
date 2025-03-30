import { notFound } from "next/navigation";

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
    <div>
      <h1>{workout.name}</h1>
    </div>
  );
};

export default WorkoutPageDetails;
