import Image from "next/image";

import { Button } from "../Components/ui/button";

const FranchisorPage = () => {
  return (
    <>
      <section className="w-full bg-chart-5 p-10">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold text-white">
              Faça parte da maior rede <br /> de academias da
              <br /> América Latina
            </h1>
            <p className="text-lg text-white">
              e da maior rede de franquias do <br /> segmento fitness do Brasil.
            </p>
            <Button className="rounded-full p-6" variant="destructive">
              Quero ser um franqueador
            </Button>
          </div>
          <div>
            <Image
              src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/27aadcfd-img-0654-copy-1_10o00db0o00c900000j01o.jpg"
              alt="franqueador image"
              width={850}
              height={450}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="m-20">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-semibold text-black">
            Revolucionamos o{" "}
            <span className="text-foreground">fitness de alto padrão</span>
          </h1>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <Image
                src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/7d19751b-frame-3193_1000000000000000000028.png"
                alt="Icon"
                width={60}
                height={40}
              />
              <h1 className="text-2xl font-semibold text-black">
                3 milhões de clientes
                <br />{" "}
                <span className="text-lg font-normal text-black">
                  na América Latina
                </span>
              </h1>
            </div>
            <div className="flex gap-2">
              <Image
                src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/7d19751b-frame-3193_1000000000000000000028.png"
                alt="Icon"
                width={60}
                height={40}
              />
              <h1 className="text-2xl font-semibold text-black">
                3º grupo que mais cresce
                <br />{" "}
                <span className="text-lg font-normal text-black">
                  no mercado fitness <br /> mundialmente*
                </span>
              </h1>
            </div>
            <div className="flex gap-2">
              <Image
                src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/7d19751b-frame-3193_1000000000000000000028.png"
                alt="Icon"
                width={60}
                height={40}
              />
              <h1 className="text-2xl font-semibold text-black">
                1000 academias
                <br />{" "}
                <span className="text-lg font-normal text-black">
                  na América latina, sendo
                  <br /> 600 só no Brasil
                </span>
              </h1>
            </div>
            <div className="flex gap-2">
              <Image
                src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/7d19751b-frame-3193_1000000000000000000028.png"
                alt="Icon"
                width={60}
                height={40}
              />
              <h1 className="text-2xl font-semibold text-black">
                11º no ranking global
                <br />{" "}
                <span className="text-lg font-normal text-black">
                  das marcas que mais evoluíram
                  <br /> em faturamento**
                </span>
              </h1>
            </div>
          </div>
          <Button className="w-[400px] rounded-full p-8 text-xl text-black">
            Quero ser um franqueador
          </Button>
        </div>
      </section>
      <section className="w-full"></section>
    </>
  );
};

export default FranchisorPage;
