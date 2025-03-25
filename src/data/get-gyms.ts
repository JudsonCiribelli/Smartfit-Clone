import { db } from "@/lib/prisma";

export const getGyms = async () => {
  const gyms = db.gym.findMany({});
  return gyms;
};
