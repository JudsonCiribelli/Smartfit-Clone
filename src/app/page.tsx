import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden block">
      <section className="w-full ">
        <div className="m-4">
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

      <section className="flex flex-col items-center justify-center">
        <div className="flex">
          <h1 className="text-xl font-bold text-black">
            Encontre a academia{" "}
            <span className="text-foreground"> mais próxima!</span>
          </h1>
        </div>

        <div></div>
      </section>
    </main>
  );
}
