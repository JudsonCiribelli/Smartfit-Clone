"use client";
import Image from "next/image";
import Link from "next/link";

import { Card, CardTitle } from "@/app/Components/ui/card";

import { Button } from "../ui/button";

interface TrainingCardProps {
  src: string;
  alt: string;
  title: string;
  duration: string;
  intensity: string;
  description: string;
  IconDuration: React.ReactNode;
  IconIntensity: React.ReactNode;
}

const TrainingCard = ({
  src,
  alt,
  title,
  duration,
  intensity,
  IconDuration,
  IconIntensity,
  description,
}: TrainingCardProps) => {
  return (
    <Card className="flex h-[500px] w-[283px] flex-col border-none bg-white shadow-xl">
      {/* Ajuste de largura e altura da imagem */}
      <div className="h-[166px] w-full">
        <Image
          src={src}
          alt={alt}
          width={283}
          height={166}
          className="h-full w-full rounded-t-sm object-cover" // Garantir que a imagem ocupe o mesmo tamanho e preencha o espaço
        />
      </div>

      {/* Ajustando o título para garantir alinhamento */}
      <CardTitle className="w-full bg-foreground p-2 text-center text-sm text-black">
        {title}
      </CardTitle>

      <div className="my-4 flex items-center justify-center">
        <div className="flex w-[50%] flex-col items-center gap-1">
          {IconDuration}
          <p className="text-sm font-semibold text-black">Duração</p>
          <p className="text-sm text-black">{duration}min</p>
        </div>
        <div className="flex w-[50%] flex-col items-center gap-1">
          {IconIntensity}
          <p className="text-sm font-semibold text-black">Intensidade</p>
          <p className="text-sm text-black">{intensity}</p>
        </div>
      </div>

      <div className="flex w-[283px] flex-grow flex-col items-center text-center">
        <p className="text-xs text-black">{description}</p>

        {/* Botões no final do card */}
        <div className="mt-auto flex w-full justify-center gap-2">
          <Button variant="ghost" className="mb-8 w-[48%] text-black" asChild>
            <Link href={`/modalidades-treino/${alt}`}>Saiba mais</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TrainingCard;
