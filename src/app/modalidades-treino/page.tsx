import Image from "next/image";

import { getWorkout } from "@/data/get-workout";

import TrainingCard from "../Components/Training-Card/trainingCard";
import { Button } from "../Components/ui/button";

const TrainingModalities = async () => {
  const workouts = await getWorkout();
  return (
    <main className="block overflow-hidden">
      <section className="m-10 flex w-full items-center justify-evenly">
        {/* Texto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-black">
            É pra dançar, é pra <br /> funcional, é pra tudo. É<br /> Smart Fit
          </h1>
          <p className="text-lg text-black">
            Um montão de aulas e treinos exclusivos,
            <br /> pra você encontrar qual o seu jeito de ser
            <br /> Fit.
          </p>
          <Button className="rounded-full bg-destructive p-6 text-white hover:bg-destructive">
            Escolha sua academia
          </Button>
        </div>
        {/* Image */}
        <div>
          <Image
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/banner1.png"
            width={500}
            height={300}
            alt="Modalities-training-banner-image"
            className="rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="mx-0 my-12 flex w-full items-center justify-center bg-foreground px-4 py-8">
        <h1 className="text-2xl font-semibold text-black">
          Conheça nossos treinos exclusivos🔥!
        </h1>
      </section>
      <section
        className="relative mx-auto my-10 w-[100%] max-w-[1140px] flex-col bg-contain bg-center bg-no-repeat px-4 py-0"
        style={{
          backgroundImage:
            "url('https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/ellipse-1.svg')",
        }}
      >
        <div className="mx-auto my-0 flex w-[100%] max-w-[650px] flex-wrap justify-center gap-9">
          {workouts.slice(0, 4).map((workout) => (
            <TrainingCard workout={workout} key={workout.id} />
          ))}
          <Button className="w-[300px] rounded-full p-6" variant="destructive">
            Escolha sua academia
          </Button>
        </div>
        <div></div>
      </section>
      <section className="mx-0 my-12 flex w-full items-center justify-center bg-slate-950 px-4 py-8">
        <h1 className="text-2xl font-semibold text-white">
          Confira todas as nossas aulas coletivas🔥!
        </h1>
      </section>
      <section
        className="relative mx-auto my-10 w-[100%] max-w-[1140px] bg-contain bg-center bg-no-repeat px-4 py-0"
        style={{
          backgroundImage:
            "url('https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/ellipse-2.svg')",
        }}
      >
        {" "}
        <div className="mx-auto my-0 flex w-[100%] max-w-[1150px] flex-wrap justify-center gap-9">
          {workouts.slice(0, 9).map((workout) => (
            <TrainingCard workout={workout} key={workout.id} />
          ))}
          <Button className="w-[300px] rounded-full p-6" variant="destructive">
            Escolha sua academia
          </Button>
        </div>
      </section>
      <section className="mx-0 my-12 flex w-full flex-col items-center justify-center bg-black px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-white">PLANOS A PARTIR DE</h1>
          <h1 className="text-4xl font-bold text-foreground">R$ 99,90/mês</h1>
          <p className="text-sm text-white">
            Encontre o seu jeito de ser Fit com a gente, busque pela unidade
            mais próxima agora.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TrainingModalities;
