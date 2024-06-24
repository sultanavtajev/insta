"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Analyser et bilde
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Analyser et bilde for å finne ut hva som er i det. Du kan
                  skrive inn en URL til et bilde eller laste opp en fil fra
                  enheten din.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex w-full items-center space-x-2 justify-start">
                  <Link href="/lastbilder">
                    <Button type="submit">Trykk her for å starte</Button>
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src="/images/image1.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
