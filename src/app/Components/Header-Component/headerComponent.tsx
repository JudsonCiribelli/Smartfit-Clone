import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import ButtonComponent from "../Header-Button-Component/buttonComponent";
import SheetsContent from "../Sheets-Content-Component/sheetsContentComponent";

const HeaderComponent = () => {
  return (
    <div className="top-0 flex h-32 items-center justify-between bg-slate-100">
      <div className="ml-8">
        <Link href="/">
          <Image
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/logo-dark.svg"
            alt="logo"
            width={120}
            height={120}
          />
        </Link>
      </div>

      <div className="mx-8">
        <ul className="flex items-center justify-between gap-2">
          <ButtonComponent href="/">Academias</ButtonComponent>

          <ButtonComponent href="/">Espaço Cliente</ButtonComponent>

          <ButtonComponent href="/">Seja um franqueador</ButtonComponent>

          <Sheet>
            <SheetTrigger>
              <Button variant="ghost">
                <AlignJustify size={100} />
              </Button>
            </SheetTrigger>
            <SheetsContent />
          </Sheet>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
