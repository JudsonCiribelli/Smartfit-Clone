import { db } from "@/lib/prisma";

export const getWorkout = async () => {
  const workout = db.workout.findMany({});
  return workout;
};
