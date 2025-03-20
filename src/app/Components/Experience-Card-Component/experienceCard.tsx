import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const ExperienceCard = () => {
  return (
    <>
      <Card className="rounded-b-lg border-none bg-white text-center shadow-xl">
        <CardContent>
          <Image
            src="https://assets.smartfit.com.br/images/new_home_br/equipamentos_alto_padrao.jpeg"
            alt="image"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <p className="mt-2 text-black">Equipamentos de alto padrão</p>
        </CardContent>
      </Card>
      <Card className="rounded-b-lg border-none bg-white text-center shadow-xl">
        <CardContent>
          <Image
            src="https://assets.smartfit.com.br/images/new_home_br/salas-exclusivas.jpeg"
            alt="image"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <p className="mt-2 text-black">Salas exclusivas de aulas coletivas</p>
        </CardContent>
      </Card>
      <Card className="rounded-b-lg border-none bg-white text-center shadow-xl">
        <CardContent>
          <Image
            src="https://assets.smartfit.com.br/images/new_home_br/areas-musculacao.jpeg"
            alt="image"
            width={300}
            height={300}
            className="rounded-t-lg"
          />
          <p className="mt-2 text-black">Áreas de musculação e cárdio</p>
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
