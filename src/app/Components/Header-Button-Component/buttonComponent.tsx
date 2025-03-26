"use client";

import Link from "next/link";

import { Button } from "@/app/Components/ui/button";

const ButtonComponent = () => {
  return (
    <>
      <Button className="gap-4 rounded-full" asChild>
        <Link href="/academias">Academias</Link>
      </Button>
      <Button className="gap-2 rounded-full" asChild>
        <Link href="">Espaço do cliente</Link>
      </Button>
      <Button className="gap-2 rounded-full" asChild>
        <Link href="">Seja um franqueador</Link>
      </Button>
    </>
  );
};

export default ButtonComponent;
