import Link from "next/link";

import { Button } from "@/app/Components/ui/button";

const SidebarContent = () => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Home
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Academias
        </Link>
      </Button>

      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Espaço do Cliente
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Seja um Franqueador
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Smart Fit News
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Planos
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Smart Fit Supps
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Sustentabilidade
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link className="text-lg text-black" href="/">
          Nossa História
        </Link>
      </Button>
    </div>
  );
};

export default SidebarContent;
