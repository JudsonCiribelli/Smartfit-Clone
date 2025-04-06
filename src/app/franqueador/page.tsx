import Image from "next/image";

import { Label } from "../../../@app/Components/ui/label";
import ExperienceCard from "../Components/Experience-Card-Component/experienceCard";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";

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
      <section className="my-14 w-full">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          {/* titulo */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-black">
              Empreenda com{" "}
              <span className="text-foreground">
                a força da marca Smart Fit
              </span>
            </h1>
            <p className="text-lg font-normal text-black">
              Visando o nosso maior propósito de democratizar o fitness de alto
              padrão nossas academias contam com o melhor que há no mercado com
              <br />
              um preço acessível.
            </p>
          </div>
          {/* banners */}
          <div className="flex gap-4">
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
          <Button className="w-[300px] rounded-full p-6">
            Quero ser um franqueador
          </Button>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-6 text-4xl font-semibold text-black">
            Conheça <span className="text-foreground">o nosso mercado!</span>
          </h1>
          <div className="flex gap-10">
            <Image
              src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/d5c79a4c-frame-3264_10ja0c8000000000000028.png"
              alt="grapchis image"
              width={700}
              height={450}
            />
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/bc107461-frame-3298_1000000000000000000028.png"
                  alt="Image icon"
                  width={52}
                  height={38}
                />
                <p className="text-lg text-black">
                  O mercado fitness cresce média de 8,7% anualmente no mundo
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/bc107461-frame-3298_1000000000000000000028.png"
                  alt="Image icon"
                  width={52}
                  height={38}
                />
                <p className="text-lg text-black">
                  Brasil é o 2º segundo maior país no ranking mundial
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/bc107461-frame-3298_1000000000000000000028.png"
                  alt="Image icon"
                  width={52}
                  height={38}
                />
                <p className="text-lg text-black">
                  O setor movimentou + de U$2 bilhões de dólares no país <br />e
                  ocupa 3º posição no ranking de faturamento do mundo
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="https://d9hhrg4mnvzow.cloudfront.net/promocao.smartfit.com.br/quero-ser-um-franqueado/bc107461-frame-3298_1000000000000000000028.png"
                  alt="Image icon"
                  width={52}
                  height={38}
                />
                <p className="text-lg text-black">
                  As academias representam 60% do faturamento total do <br />
                  setor no país
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 w-full">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="m-10">
            <h1 className="text-4xl font-semibold text-black">
              Quero ser <span className="text-foreground">um franqueado!</span>
            </h1>
            <p className="text-lg font-normal text-black">
              Preencha o formulário abaixo para que a gente possa avaliar o seu
              perfil! Aproveite e inclua <br />
              até três sócios pra embarcar nessa com você!
            </p>
          </div>
          <div className="flex w-[100%] max-w-[850px] flex-wrap items-center justify-center gap-4">
            <div className="flex flex-col items-start gap-1">
              <Label className="text-lg font-normal text-black">Nome*</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                className="w-[400px] text-black"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <Label className="text-lg font-normal text-black">
                Telefone*
              </Label>
              <Input
                type="text"
                placeholder="DDD + 9 9999-9999"
                className="w-[400px] text-black"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <Label className="text-lg font-normal text-black">Email*</Label>
              <Input
                type="email"
                placeholder="Seu nome"
                className="w-[400px] text-black"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <Label className="text-lg font-normal text-black">Nome*</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                className="w-[400px] text-black"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FranchisorPage;
