"use client";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/app/Components/ui/button";
import { Sheet, SheetTrigger } from "@/app/Components/ui/sheet";

import ButtonComponent from "../Header-Button-Component/buttonComponent";
import SheetsContent from "../Sheets-Content-Component/sheetsContentComponent";

const HeaderComponent = () => {
  const pathname = usePathname();
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
          {pathname === "/" ? <ButtonComponent /> : <div></div>}
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" asChild>
                <AlignJustify size={80} className="text-black" />
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
