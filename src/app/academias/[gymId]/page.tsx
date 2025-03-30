import { Plan } from "@prisma/client";
import {
  AirVent,
  Armchair,
  BicepsFlexed,
  Blinds,
  Car,
  Clock10,
  Dumbbell,
  Globe,
  HeartPulse,
  MapPinned,
  ShowerHead,
  Weight,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import PlansCard from "@/app/Components/Card-Plans-Component/cardPlans";
import { Button } from "@/app/Components/ui/button";
import { CardContent } from "@/app/Components/ui/card";
import { getPlans } from "@/data/get-plans";
import { db } from "@/lib/prisma";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";

interface GymDetailsProps {
  params: Promise<{ gymId: string }>;
  plans: Plan;
}

const GymDetails = async ({ params }: GymDetailsProps) => {
  const { gymId } = await params;
  const plans = await getPlans();
  const gym = await db.gym.findUnique({
    where: {
      id: gymId,
    },
  });

  if (!gym) {
    return notFound();
  }
  return (
    <main>
      <section className="mx-auto my-6 flex w-[100%] items-center justify-center gap-20">
        <div>
          <div className="-mb-10 ml-8 flex flex-col">
            <h3 className="text-lg text-black">Academia</h3>
            <h1 className="text-2xl font-bold text-black">{gym.name}</h1>
          </div>
          <Carousel className="w-full max-w-[720px]">
            <CarouselContent>
              {gym.images.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={imageUrl}
                        alt={`Image ${index + 1} of ${gym.name}`}
                        width={580}
                        height={500}
                        className="w-full rounded-lg object-cover"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col gap-4">
          {/* Primeiro Card */}
          <div className="flex h-[200px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <Clock10 size={36} />
            </div>
            {/* Horarios */}
            <div className="flex flex-col gap-1">
              <h1 className="text-lg text-black">Horário de funcionamento</h1>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-black">Seg a Sex</p>
                <p className="text-sm text-black">5h - 23h</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Sáb</p>
                <p className="text-sm text-black">8h - 17h</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Dom/Feriados</p>
                <p className="text-sm text-black">8h - 14h</p>
              </div>
              <Button
                variant="outline"
                className="mt-2 border-none text-black underline hover:bg-white"
              >
                Ver ocupação da unidade
              </Button>
            </div>
          </div>
          {/* Segundo Card */}
          <div className="flex h-[150px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <MapPinned size={36} />
            </div>
            {/* Texto */}
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-black">Endereço</h1>
                <p className="text-xs text-black">{gym.address}</p>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-[250px] border-none text-black underline hover:bg-white"
              >
                Ver rota
              </Button>
            </div>
          </div>
          {/* Terceito Card */}
          <div className="flex h-[180px] w-[400px] gap-4 rounded-xl border p-6">
            {/* Icon */}
            <div>
              <Globe size={36} />
            </div>
            {/* Texto */}
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg text-black">
                  Faça um tour virtual na academia!
                </h1>
                <p className="text-xs text-black">
                  Com o tour virtual você consegue conhecer a academia antes de
                  contratar o plano!
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-2 w-[250px] border-none text-black underline hover:bg-white"
              >
                Ver rota
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16 flex w-[100%] items-center justify-center">
        <div>
          <Image
            src="https://assets.smartfit.com.br/attachments/52c8fbbe070557ed7b1f25822e570f68139fbf63/store/123ddf4ee554e5dcddf450210fde38265a3273d8d35fa15eaec30bff1860/banner_location_desktop"
            width={1180}
            height={265}
            alt="banner gym details"
            className="rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="my-20 flex w-full flex-col items-center gap-2">
        <div className="p-2 text-center">
          <h1 className="text-3xl font-semibold text-black">
            Conheça{" "}
            <span className="text-foreground">os planos desta academia!</span>
          </h1>
          <p className="text-sm text-black">
            Os valores apresentados abaixo são promocionais. Aproveite!
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 p-8">
          {plans.map((plan) => (
            <PlansCard plans={plan} key={plan.id} />
          ))}
        </div>
        <p className="text-sm text-black">
          Você será encaminhado(a) para o processo de escolha e contratação do
          seu plano Smart Fit.
        </p>
      </section>
      <section className="my-20 flex w-full flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          {/* Areas */}
          <h1 className="text-2xl font-bold text-black">Áreas</h1>
          <div className="flex w-full items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
              <HeartPulse size={60} />
              <h1 className="text-sm text-black">Cardio</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Armchair size={60} />
              <h1 className="text-sm text-black">Cadeira de Massagem</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Dumbbell size={60} />
              <h1 className="text-sm text-black">Peso Livre</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BicepsFlexed size={60} />
              <h1 className="text-sm text-black">Musculação</h1>
            </div>
          </div>
          {/* Estruturas */}

          <div className="my-8 flex flex-col">
            <h1 className="text-2xl font-bold text-black">Estrutura</h1>
            <div className="my-4 flex w-full items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center">
                <Blinds size={60} />
                <h1 className="text-sm text-black">Armário rotativo</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ShowerHead size={60} />
                <h1 className="text-sm text-black">Ducha aquecida</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Dumbbell size={60} />
                <h1 className="text-sm text-black">Professores formados</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Car size={60} />
                <h1 className="text-sm text-black">Estacionamento</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <AirVent size={60} />
                <h1 className="text-sm text-black">Ar condicionado</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Weight size={60} />
                <h1 className="text-sm text-black">Balança de Bioimpedância</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 flex h-[140px] w-full flex-col items-center gap-2 bg-amber-100">
        <div className="flex flex-col justify-center text-start">
          <div className="mt-8">
            {" "}
            <h1 className="my-2 text-4xl text-black">
              Se ficar com dúvida, a gente te ajuda!︎
            </h1>
            <p className="text-sm text-black">
              Todos os nossos equipamentos possuem o botão Smart Help, que
              solicita ajuda de um professor quando acionado.
            </p>
          </div>
        </div>
      </section>

      <section className="m-8 flex w-full flex-col items-center gap-2">
        {/* Title */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold text-black">
            Conheça
            <span className="text-4xl font-semibold text-foreground">
              {" "}
              a equipe
            </span>
          </h1>
          <p className="text-sm text-black">
            É bom contar com essa galera para tirar dúvidas, treinar pra valer,
            bater um papinho... <br />
            Identifique o pessoal pela cor da camiseta!
          </p>
        </div>
        {/* Camisas */}
        <div className="my-4 flex items-center justify-center gap-20">
          <div className="flex flex-col">
            <Image
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/recepcionista.png"
              alt="recepcionista"
              width={240}
              height={241}
            />
            <div className="my-4 flex flex-col gap-2 text-center">
              <h1 className="text-lg text-black">Recepcionista</h1>
              <p className="text-sm text-black">
                Dúvidas sobre a operação da
                <br /> academia? Traga pro balcão!
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/professores.png"
              alt="recepcionista"
              width={240}
              height={241}
            />
            <div className="my-4 flex flex-col gap-2 text-center">
              <h1 className="text-lg text-black">Professores</h1>
              <p className="text-sm text-black">
                Ele sabe tudo sobre exercício, monta
                <br /> treino, dá aula coletiva e te ajuda a <br /> conquistar
                seus objetivos.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/lider.png"
              alt="recepcionista"
              width={240}
              height={241}
            />
            <div className="my-4 flex flex-col gap-2 text-center">
              <h1 className="text-lg text-black">Líder de Unidade</h1>
              <p className="text-sm text-black">
                É a pessoa responsável pelo bom <br /> funcionamento da unidade
                está
                <br />
                sempre disponível para ajudar!
              </p>
            </div>
          </div>
        </div>
        {/* Botao */}
        <div>
          <Button className="w-[400px] rounded-full p-6">
            Quero treinar aqui!
          </Button>
        </div>
      </section>
    </main>
  );
};

export default GymDetails;
