"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Logg inn</CardTitle>
        <CardDescription>
          Skriv inn e-posten din nedenfor for å logge inn på kontoen din
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Passord</Label>
              <Link href="/passord" className="ml-auto inline-block text-sm underline">
                Glemt passordet ditt?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Logg inn
          </Button>
          <Button variant="outline" className="w-full">
            Logg inn med Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Har du ikke en konto?{" "}
          <Link href="/registrer" className="underline">
            Registrer deg
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
