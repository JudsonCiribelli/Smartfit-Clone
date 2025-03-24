import Image from "next/image";

import { Button } from "@/components/ui/button";

const TrainingModalities = () => {
  return (
    <main className="block w-[100%] overflow-hidden">
      <section className="flex w-full items-center justify-evenly bg-slate-100 p-10">
        {/* texto */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-black">
            É pra dançar, é pra <br />
            funcional, é pra tudo. <br />É Smart Fit
          </h1>
          <p className="text-lg text-black">
            Um montão de aulas e treinos exclusivos,
            <br /> pra você encontrar qual o seu jeito de ser
            <br /> Fit.
          </p>
          <Button variant="destructive" className="w-full rounded-full">
            Escolha sua academia
          </Button>
        </div>
        {/* card */}
        <div className="">
          <Image
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/banner1.png"
            alt="Modalidades de treino"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
      </section>
    </main>
  );
};

export default TrainingModalities;
