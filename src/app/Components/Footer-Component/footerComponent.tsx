import Image from "next/image";

import IconsComponent from "../Icons-Component/IconsComponent";

const FooterComponent = () => {
  return (
    <footer className="w-[100%] bg-black px-5 pb-20 pt-12">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto my-0 flex w-[90%] max-w-[1200px] items-center justify-center border-b border-solid border-white px-0 py-7">
          <Image
            src="https://smart-site-assets-prd-0.s3.amazonaws.com/assets/new-home-v4-assets/logo-white.svg"
            alt="Smart-Fit-Logo"
            width={200}
            height={100}
            className="mx-0 my-auto block"
          />
        </div>
        {/* Icons */}
        <div className="mx-auto mt-10 flex w-[90%] max-w-[1200px] flex-col items-center justify-center border-b border-solid border-white">
          <h1 className="text-xl text-white">Siga a Smart Fit</h1>
          <IconsComponent />
        </div>
        {/* lista  */}
        <div className="mx-auto my-0 flex w-[90%] max-w-[1200px] items-start justify-between border-b border-solid border-white py-6">
          {/* Institucional */}
          <div className="flex flex-grow flex-col items-start gap-2">
            <h1 className="text-xl text-white">Institucional</h1>
            <p className="cursor-pointer text-sm text-white">Sobre</p>
            <p className="cursor-pointer text-sm text-white">Conceito</p>
            <p className="cursor-pointer text-sm text-white">Investidores</p>
            <p className="cursor-pointer text-sm text-white">
              Central de Ajuda
            </p>
            <p className="cursor-pointer text-sm text-white">Fale Conosco</p>
            <p className="cursor-pointer text-sm text-white">
              Edital Smart Fit
            </p>
            <p className="cursor-pointer text-sm text-white">
              Aviso de Privacidade
            </p>
            <p className="cursor-pointer text-sm text-white">
              Portal de Privacidade
            </p>
          </div>

          {/* Planos */}
          <div className="flex flex-grow flex-col items-start gap-2">
            <h1 className="text-xl text-white">Planos</h1>
            <p className="cursor-pointer text-sm text-white">Planos</p>
            <p className="cursor-pointer text-sm text-white">Contratos</p>
            <p className="cursor-pointer text-sm text-white">
              Planos corporativos
            </p>
            <p className="cursor-pointer text-sm text-white">
              Smart Fit Coach - Consultor Online de Treino
            </p>
            <p className="cursor-pointer text-sm text-white">
              Smart Fit Energy
            </p>
            <p className="cursor-pointer text-sm text-white">Smart Fit Nutri</p>
            <p className="cursor-pointer text-sm text-white">Smart Fit Supps</p>
          </div>

          {/* Corporativo */}
          <div className="flex flex-grow flex-col items-start gap-2">
            <h1 className="text-xl text-white">Corporativo</h1>
            <p className="cursor-pointer text-sm text-white">Imprensa</p>
            <p className="cursor-pointer text-sm text-white">
              Quero ser um franqueador
            </p>
            <p className="cursor-pointer text-sm text-white">
              Divulgue sua marca
            </p>
            <p className="cursor-pointer text-sm text-white">
              Indique um ponto
            </p>
            <p className="cursor-pointer text-sm text-white">
              Trabalhe Conosco
            </p>
            <p className="cursor-pointer text-sm text-white">
              Transparência salarial e Critérios remuneratórios Smart Fit
            </p>
            <p className="cursor-pointer text-sm text-white">
              Transparência salarial e Critérios remuneratórios BIOMURUM
            </p>
            <p className="cursor-pointer text-sm text-white">
              Formulário prévio ao contrato Personal
            </p>
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-white">
            *Consulte as condições promocionais e regulamentos na página:
            smartfit.com.br/contratos
          </p>
          <p className="text-white">
            Avenida Paulista, nº.1294, 2º andar, Bela Vista, CEP 01310-100
          </p>
          <p className="text-white">faleconosco@smartfit.com</p>
          <p className="text-white">SMARTFIT ESCOLA DE GINÁSTICA E DANÇA S.A</p>
          <p className="text-white">CNPJ: 07.594.978/0001-78</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
