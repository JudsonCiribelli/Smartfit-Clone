import { BatteryCharging, Clock } from "lucide-react";
import Image from "next/image";

import { Button } from "@/app/Components/ui/button";
import { FormatCurrency } from "@/helpers/format-currency";

import TrainingCard from "../Components/Training-Card/trainingCard";

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
      <section className="my-10 flex w-full items-center justify-center bg-foreground px-4 py-10">
        <h2 className="text-2xl font-semibold text-black">
          Conheça nossos treinos exclusivos🔥!
        </h2>
      </section>
      <section className="mx-auto mb-10 w-full max-w-[1150px] bg-transparent bg-[url('https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/ellipse-1.svg')] bg-contain bg-center bg-no-repeat px-4">
        <div className="mx-auto my-0 flex w-[100%] max-w-[650px] flex-wrap justify-center gap-14">
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-shape/cover.png"
            alt="SMART SHAPE"
            title="SMART SHAPE"
            duration="30"
            intensity="Alta"
            description="Nosso exclusivo circuito de emagrecimento, intenso e com duração de 30 minutos é uma combinação de vários exercícios"
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/smart-cross-cover.webp"
            alt="SMART CROSS"
            title="SMART CROSS"
            duration="30"
            intensity="Alta"
            description="Emagrecimento com ganho de condicionamento físico em apenas 30 minutos. Esse é o Smart Cross, nosso treino funcional coletivo de alta intensidade."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-hit/cover.png"
            alt="SMART HIIT"
            title="SMART HIIT"
            duration="30"
            intensity="Alta"
            description="Um treino intervalado de alta intensidade que usa o peso do próprio corpo. Ideal pra quem busca resultados rápidos."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-strong/cover.png"
            alt="SMART STRONG"
            title="SMART STRONG"
            duration="45"
            intensity="Moderada-Alta"
            description="O Smart Strong é um treino coletivo de hipertrofia, com foco em fortalecimento muscular, trabalho de força e resistência"
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <Button variant="destructive" className="w-[300px] rounded-full p-6">
            Escolha sua academia
          </Button>
        </div>
      </section>
      <section className="my-10 flex w-full items-center justify-center bg-black px-4 py-10">
        <h2 className="text-2xl font-semibold text-white">
          Confira todas as nossas aulas coletivas🔥!
        </h2>
      </section>
      <section className="mx-auto mb-10 w-full max-w-[1150px] bg-transparent bg-[url('https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/ellipse-2.svg')] bg-contain bg-center bg-no-repeat px-4">
        <div className="mx-auto my-0 flex w-[100%] max-w-[1000px] flex-wrap justify-center gap-14">
          <TrainingCard
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/fitdance-cover.webp"
            alt="FITDANCE"
            title="FITDANCE"
            duration="45/60"
            intensity="Alta"
            description="Para você manjar de todos os passinhos, as aulas de dança da Smart Fit são ministradas por professores licenciados pelo FitDance."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/zumba/cover.png"
            alt="ZUMBA"
            title="ZUMBA"
            duration="30/45/60"
            intensity="Alta"
            description="Adora remexer os quadris? Na Smart Fit, você tem aulas de Zumba com professores licenciados."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/body-combat-cover.webp"
            alt="BODY COMBAT"
            title="BODY COMBAT"
            duration="30/45"
            intensity="Alta"
            description="Karatê, Jiu-Jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino trabalha todo o corpo."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/body-balance/cover.png"
            alt="BODY BALANCE"
            title="SMART HIIT"
            duration="30/45"
            intensity="Moderado"
            description="Inspirado na Yoga, com elementos do Tai Chi e do Pilates, é um treino com a função de melhorar não só o corpo, mas também a mente."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/abdominal/cover.png"
            alt="SMART CORE"
            title="SMART CORE"
            duration="30"
            intensity="Moderado"
            description="Um treino intenso e eficiente, focado no condicionamento e força dos músculos abdominais, lombar e paravertebrais, ajudando na definição."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/alongamento/cover.png"
            alt="ALONGAMENTO"
            title="ALONGAMENTO"
            duration="30"
            intensity="Baixa"
            description="Uma aula focada em exercícios de alongamento, flexibilidade e mobilidade articular, que alivia o stress e as dores do corpo."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-fight/cover.png"
            alt="SMART FIGHT"
            title="SMART FIGHT"
            duration="45"
            intensity="Alta"
            description="O Smart Fight é um treino superlegal e diferente, ele mistura artes marciais com funcional e é ideal pra dar aquela variada no treino"
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-bike/cover.png"
            alt="SMART BIKE"
            title="SMART BIKE"
            duration="45"
            intensity="Alta"
            description="Perfeita para quem busca uma explosão de energia e diversão durante o treino, a Smart Bike oferece a combinação perfeita de intensidade e entretenimento."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <TrainingCard
            src="https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/workout-by-fitdance/cover.png"
            alt="WORKOUT BY FITDANCE"
            title="WORKOUT BY FITDANCE"
            duration="30"
            intensity="Alta"
            description="Em busca de um treino que une movimento, diversão e queima calórica? O Workout foi desenvolvido pela FitDance exclusivamente para a Smart Fit, e é a opção ideal para quem busca uma experiência única, onde dança e condicionamento se encontram."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
          <Button variant="destructive" className="w-[300px] rounded-full p-6">
            Escolha sua academia
          </Button>
        </div>
      </section>
      <section className="my-10 flex w-full flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold text-black">
          Curtiu? vem treinar com a gente!
        </h2>
        <div className="relative my-5 flex w-full flex-col items-center overflow-hidden bg-[radial-gradient(211.72%_211.72%_at_50%_100%,_#231f20_14.03%,_rgba(35,_31,_32,_0)_100%)] p-9 backdrop-blur-[4px]">
          <h4 className="text-1xl font-semibold text-white">
            PLANOS A PARTIR DE
          </h4>
          <h3 className="text text-2xl font-bold">
            {FormatCurrency(99.9)}/mes
          </h3>
          <p className="text-lg text-white">
            Encontre o seu jeito de ser Fit com a gente, busque pela unidade
            mais próxima agora.
          </p>
        </div>
        <Button
          variant="destructive"
          className="mt-10 w-[300px] rounded-full p-6"
        >
          Eu quero!
        </Button>
      </section>
    </main>
  );
};

export default TrainingModalities;
