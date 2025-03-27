import { Gym } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/Components/ui/card";
import { FormatCurrency } from "@/helpers/format-currency";

interface GymCardProps {
  gym: Gym;
}

const GymCard = ({ gym }: GymCardProps) => {
  return (
    <div className="flex w-full flex-wrap justify-center">
      <Card className="m-5 flex w-[300px] max-w-[720px] flex-col rounded-lg border-none bg-white shadow-xl">
        <div className="relative h-[142px] w-full">
          <Image
            src={gym.avatarImgUrl}
            alt={gym.name}
            layout="fill"
            objectFit="cover"
            className="w-full rounded-t-lg object-contain"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-black">
            {gym.name}
          </CardTitle>
          <p className="text-sm text-slate-500">{gym.address}</p>
          <Link
            href={`/academias/${gym.id}`}
            className="mt-4 flex text-start text-sm font-semibold text-blue-500 hover:underline"
          >
            Ver academia
          </Link>
        </CardHeader>
        <div className="my-4 ml-4 w-[90%] rounded-sm bg-green-100 p-2">
          <p className="text-xs font-bold text-green-600">
            1 mês por R$99,90 no plano Black e Plano Fit, só até dia 31.03
          </p>
        </div>
        <CardContent className="flex items-center justify-center gap-8 text-center">
          <div className="">
            <h4 className="text-xs font-semibold text-black">SMART</h4>
            <p className="text-xs font-semibold text-black">
              {FormatCurrency(139.9)}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-black">BLACK</h4>
            <p className="text-xs font-semibold text-black">
              {FormatCurrency(149.9)}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-black">FIT</h4>
            <p className="text-xs font-semibold text-black">
              {FormatCurrency(129.9)}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded-full">Ver planos</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GymCard;
