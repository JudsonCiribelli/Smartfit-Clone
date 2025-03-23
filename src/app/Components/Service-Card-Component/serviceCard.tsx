import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormatCurrency } from "@/helpers/format-currency";
interface ServiceCardProps {
  alt: string;
  src: string;
  title: string;
  about: string;
  description: string;
  price: number;
  permanence?: number;
}
const ServicesCard = ({
  alt,
  src,
  title,
  about,
  price,
  permanence,
  description,
}: ServiceCardProps) => {
  return (
    <Card className="flex h-[480px] w-[320px] flex-col border-none bg-white shadow-xl">
      <div className="h-[166px] w-full">
        <Image
          src={src}
          alt={alt}
          width={283}
          height={166}
          className="h-full w-full rounded-t-sm object-cover"
        />
      </div>
      <div className="m-2 flex flex-col gap-2">
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <p className="text-lg font-semibold text-black">{about}</p>
        <p className="text-sm font-semibold text-slate-500">{description}</p>
        <div className="mt-2">
          <h1 className="text-2xl font-semibold text-black">
            {FormatCurrency(price)}/mês
          </h1>
          <p className="text-sm font-semibold text-slate-500">
            {permanence}meses de permanência
          </p>
        </div>
        <Button className="mt-4">Saiba mais</Button>
      </div>
    </Card>
  );
};

export default ServicesCard;
