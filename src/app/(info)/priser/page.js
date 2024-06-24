"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Komponent() {
  return (
    <div className="grid gap-8 max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Prising og planer
        </h1>
        <p className="text-muted-foreground">
          Velg planen som passer dine behov.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>10 Bilder</CardTitle>
            <CardDescription>Gratis</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-4xl font-bold">0 kr</p>
              <p className="text-muted-foreground">per måned</p>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                10 bilder per måned
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Grunnleggende bildeanalyse
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                E-poststøtte
              </li>
            </ul>
            <div className="flex justify-center mt-auto">
              <Link href="/logg-inn">
                <Button className="w-full max-w-[200px]" prefetch={false}>
                  Kom i gang
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>100 Bilder</CardTitle>
            <CardDescription>79 kr per måned</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-4xl font-bold">79 kr</p>
              <p className="text-muted-foreground">per måned</p>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                100 bilder per måned
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Avansert bildeanalyse
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                E-post- og chatstøtte
              </li>
            </ul>
            <div className="flex justify-center mt-auto">
              <Link href="/logg-inn">
                <Button className="w-full max-w-[200px]" prefetch={false}>
                  Kom i gang
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>500 Bilder</CardTitle>
            <CardDescription>299 kr per måned</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-4xl font-bold">299 kr</p>
              <p className="text-muted-foreground">per måned</p>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                500 bilder per måned
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Avansert bildeanalyse
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                E-post-, chat- og telefonsupport
              </li>
            </ul>
            <div className="flex justify-center mt-auto">
              <Link href="/logg-inn">
                <Button className="w-full max-w-[200px]" prefetch={false}>
                  Kom i gang
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
