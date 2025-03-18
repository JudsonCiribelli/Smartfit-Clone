import Image from "next/image";

import { SheetContent, SheetHeader } from "@/components/ui/sheet";

import SidebarContent from "../Sidebar-Content/sidebarContent";

const SheetsContent = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <Image
          src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/logo-dark.svg"
          alt="logo"
          width={124}
          height={124}
        />
      </SheetHeader>
      <SidebarContent />
    </SheetContent>
  );
};

export default SheetsContent;
