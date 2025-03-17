import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden block">
      <section className="w-full ">
        <div className="m-10">
          <Link href="/">
            <Image
              className="rounded-lg"
              src="https://www.smartfit.com.br/news/wp-content/uploads/2025/03/banner-KV1_1920x850_Desktop_SEM_LOGO.jpg"
              alt="Banner"
              width={1920}
              height={850}
              layout="responsive"
            />
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full">
        <div className="flex">
          <h1 className="text-xl font-bold text-black">
            Encontre a academia{" "}
            <span className="text-foreground"> mais próxima!</span>
          </h1>
        </div>

        <div
          className="h-64 w-[96%] rounded-lg bg-cover bg-center m-5 "
          style={{
            backgroundImage:
              "url('https://www.smartfit.com.br/news/wp-content/uploads/2021/05/agua-verde.jpg')",
          }}
        >
          <div className="flex items-center justify-center mt-24">
            <Input
              type="text"
              className="w-[20%] border-none"
              placeholder="Escolher Academia"
            />
            <Button className="m-2 p-4">
              <Search size={24} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
