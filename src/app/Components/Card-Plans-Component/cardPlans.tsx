import { Plan } from "@prisma/client";
import { CircleCheck, CircleX } from "lucide-react";
import Link from "next/link";

import { Button } from "@/app/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/Components/ui/card";
import { FormatCurrency } from "@/helpers/format-currency";

interface PlansCardProps {
  plans: Plan;
}

const PlansCard = ({ plans }: PlansCardProps) => {
  const firstThreeBenefits = plans.additionalInfo.slice(0, 3);
  const lastThreeBenefits = plans.additionalInfo.slice(-3);
  const isBlackPlan = plans.name === "Plano Black";
  return (
    <Card className="h-[600px] w-[350px] gap-4 border-none">
      {/* Div com as informações */}
      <CardHeader>
        <CardTitle>{plans.name}</CardTitle>
        <CardDescription className="mt-5 text-white">
          {plans.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2>A PARTIR DE</h2>
        <h1 className="text-2xl font-semibold text-white">
          {FormatCurrency(plans.price)}
        </h1>
        <p>no primeiro mes, depois R$ 299,90</p>
        <p className="text-sm text-slate-400">
          {plans.duration} meses de fidelidade
        </p>
        <Button className="my-6 w-full" asChild>
          <Link href="/academias">Contratar agora</Link>
        </Button>
        <ul className="mt-4 space-y-2 text-white">
          {isBlackPlan ? (
            plans.additionalInfo.map((info, index) => (
              <li key={index} className="text-sm">
                <div className="flex gap-4">
                  <CircleCheck size={14} className="text-green-500" />
                  {info}
                </div>
              </li>
            ))
          ) : (
            <>
              {firstThreeBenefits.map((info, index) => (
                <li key={index} className="text-sm">
                  <div className="flex gap-4">
                    <CircleX size={14} className="text-red-500" />
                    {info}
                  </div>
                </li>
              ))}
              {lastThreeBenefits.map((info, index) => (
                <li key={index + 3} className="text-sm">
                  <div className="flex gap-4">
                    <CircleCheck size={14} className="text-green-500" />
                    {info}
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PlansCard;
