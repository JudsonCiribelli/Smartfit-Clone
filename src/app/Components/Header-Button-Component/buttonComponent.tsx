"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonComponentProps {
  children: React.ReactNode;
  href: string;
}
const ButtonComponent = ({ href, children }: ButtonComponentProps) => {
  return (
    <Button className="m-2 rounded-full" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ButtonComponent;
