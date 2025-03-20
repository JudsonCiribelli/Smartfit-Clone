import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
interface ExperiencieCardProps {
  src: string;
  content: string;
}
const ExperienceCard = ({ src, content }: ExperiencieCardProps) => {
  return (
    <Card className="rounded-b-lg border-none bg-white text-center shadow-xl">
      <CardContent>
        <Image
          src={src}
          alt="image"
          width={300}
          height={300}
          className="rounded-t-lg"
        />
        <p className="mt-2 text-black">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
