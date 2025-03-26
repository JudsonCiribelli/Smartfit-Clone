import { Gym } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/Components/ui/card";

interface GymCardProps {
  gym: Gym;
}
const GymCard = ({ gym }: GymCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{gym.name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default GymCard;
