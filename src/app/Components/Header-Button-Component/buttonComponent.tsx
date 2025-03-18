"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ButtonComponentProps {
  children: React.ReactNode;
  href: string;
}
const ButtonComponent = ({ href, children }: ButtonComponentProps) => {
  return (
    <Button className="gap-2 rounded-full" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ButtonComponent;
