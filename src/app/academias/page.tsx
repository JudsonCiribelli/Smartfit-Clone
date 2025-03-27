import { Search } from "lucide-react";
import Image from "next/image";

import { getGyms } from "@/data/get-gyms";

import { Input } from "../Components/ui/input";
import CheckboxComponent from "./_Components/Checkbox-Component/checkboxComponent";
import GymCard from "./_Components/Gym-Card-Component/gymCardComponent";

const GymPage = async () => {
  const gyms = await getGyms();

  return (
    <main className="mx-auto flex w-[100%] max-w-[1320px] flex-col px-3 py-5">
      <section className="mx-auto my-5 w-[95%] max-w-[1495px]">
        <Image
          src="https://www.smartfit.com.br/news/wp-content/uploads/2025/03/banner-KV1_1140x106-3.jpg"
          width={1140}
          height={150}
          alt="Banner gyms"
          quality={80}
          className="h-full w-full object-cover"
        />
      </section>
      <section className="relative mx-0 my-5 flex w-[100%] flex-col gap-8">
        <h1 className="text-2xl font-semibold text-black">
          E aí, onde você quer treinar?
        </h1>
        <div className="relative flex">
          <Input
            className="pr-10 outline-none"
            placeholder="Digite aqui o CEP, bairro ou cidade"
          />
          <Search
            className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer text-black"
            size={20}
          />
        </div>
        <p className="text-xs font-semibold text-black">
          833 unidades encontradas
        </p>
      </section>
      <section className="flex w-[100%] items-start justify-between gap-8">
        <aside className="flex w-[100%] max-w-[258px] flex-shrink-0 flex-col">
          {/* Title and subtitle */}
          <div>
            <h1 className="mb-12 text-2xl font-bold text-black">
              Aplicar Filtros
            </h1>
            <div className="mt-5 flex flex-col gap-10">
              <CheckboxComponent />
            </div>
          </div>
        </aside>
        <div className="flex-grow-1 flex w-[100%] items-start justify-start">
          {gyms.map((gym) => (
            <GymCard key={gym.id} gym={gym} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default GymPage;
