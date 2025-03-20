import { getPlans } from "@/data/get-plans";

import BannersComponent from "./Components/Banners-Component/bannersComponent";
import PlansCard from "./Components/Card-Plans-Component/cardPlans";

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
    </main>
  );
};
export default Home;
