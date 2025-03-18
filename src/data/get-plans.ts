import "server-only";

import { db } from "@/lib/prisma";

export const getPlans = async () => {
  const plans = await db.plan.findMany({});
  return plans;
};
