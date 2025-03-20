import { Button } from "@/components/ui/button";
import { getPlans } from "@/data/get-plans";

import BannersComponent from "./Components/Banners-Component/bannersComponent";
import PlansCard from "./Components/Card-Plans-Component/cardPlans";
import ExperienceCard from "./Components/Experience-Card-Component/experienceCard";

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
          <ExperienceCard />
        </div>
        <Button className="m-2 w-[13%] rounded-full p-6 text-xl">
          Buscar Academias
        </Button>
      </section>
    </main>
  );
};
export default Home;
