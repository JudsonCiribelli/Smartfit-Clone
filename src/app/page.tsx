import { BatteryCharging, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getPlans } from "@/data/get-plans";

import BannersComponent from "./Components/Banners-Component/bannersComponent";
import PlansCard from "./Components/Card-Plans-Component/cardPlans";
import ExperienceCard from "./Components/Experience-Card-Component/experienceCard";
import TrainingCard from "./Components/Training-Card/trainingCard";

const Home = async () => {
  const plans = await getPlans();

  return (
    <main className="block overflow-hidden">
      <BannersComponent />
      <section className="m-8 flex w-full flex-col items-center gap-2">
        {/* Title */}
        <div className="p-2 text-center">
          <h1 className="text-3xl font-semibold text-black">
            Venha treinar na maior rede de academias da América Latina
          </h1>
          <p className="text-lg font-semibold">
            Os melhores equipamentos e infraestrutura com mensalidades
            acessíveis.
          </p>
        </div>
        {/* Planos (Componetizados) */}
        <div className="flex items-center justify-center gap-4 p-8">
          {plans.map((plan) => (
            <PlansCard plans={plan} key={plan.id} />
          ))}
        </div>
        <h1 className="text-sm text-black">
          Os preços, taxas e condições promocionais podem variar de acordo com a
          academia escolhida.
        </h1>
      </section>
      {/* Informações & experiencia  */}
      <section className="m-10 flex w-full flex-col items-center">
        {/* Titulo */}
        <div className="m-8 flex">
          <h1 className="text-2xl font-bold text-black">
            Experiência{" "}
            <span className="text-2xl font-bold text-foreground">
              Smart Fit
            </span>
          </h1>
        </div>
        {/* Card com imagens */}
        <div className="m-4 flex gap-2">
          <ExperienceCard
            src="https://assets.smartfit.com.br/images/new_home_br/equipamentos_alto_padrao.jpeg"
            content="Equipamentos de alto padrão"
          />
          <ExperienceCard
            src="https://assets.smartfit.com.br/images/new_home_br/salas-exclusivas.jpeg"
            content="Salas exclusivas de aulas coletivas"
          />
          <ExperienceCard
            src="https://assets.smartfit.com.br/images/new_home_br/areas-musculacao.jpeg"
            content="Áreas de musculação e cárdio"
          />
        </div>
        <Button className="m-2 w-[13%] rounded-full p-6 text-xl">
          Buscar Academias
        </Button>
      </section>
      <section className="m-10 flex w-full flex-col items-center">
        {/* Titulo */}
        <div className="m-8 flex">
          <h1 className="text-2xl font-bold text-black">
            Aulas e treinos{" "}
            <span className="text-2xl font-bold text-foreground">
              exclusivos!
            </span>
          </h1>
        </div>
        {/* Cards com imagens */}
        <div className="m-2 flex gap-4">
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
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/body-combat-cover.webp"
            alt="BODY COMBAT"
            title="BODY COMBAT"
            duration="30/45"
            intensity="Alta"
            description="Karatê, Jiu-Jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino trabalha todo o corpo."
            IconDuration={<Clock size={20} />}
            IconIntensity={<BatteryCharging size={20} />}
          />
        </div>
        <Button className="my-6 w-[30%] rounded-full p-8">
          Ver todas as aulas e treinos
        </Button>
      </section>
    </main>
  );
};
export default Home;
