"use client";

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
                  Nexttemplate er en Next.js mal
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Dette er en startmal for Next.js med Tailwind CSS,
                  PostCSS og TypeScript.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="text" placeholder="nexttemplate" />
                  <Button type="submit">Test</Button>
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

