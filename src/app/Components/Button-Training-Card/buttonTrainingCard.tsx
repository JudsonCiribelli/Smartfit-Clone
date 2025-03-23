"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const ButtonTrainingCard = () => {
  const router = useRouter();
  const handleClickRedirect = () => {
    router.push("/modalidades-treino/");
  };
  return (
    <Button
      className="my-6 w-[30%] rounded-full p-8"
      onClick={handleClickRedirect}
    >
      Ver todas as aulas e treinos
    </Button>
  );
};

export default ButtonTrainingCard;
