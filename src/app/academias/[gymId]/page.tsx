import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

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
    <div>
      <p>{gym.name}</p>
      <p>{gym.id}</p>
    </div>
  );
};

export default GymDetails;
