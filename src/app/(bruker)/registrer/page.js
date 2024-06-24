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
        <CardTitle className="text-xl">Registrer deg</CardTitle>
        <CardDescription>
          Skriv inn informasjonen din for å opprette en konto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Fornavn</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Etternavn</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
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
            <Label htmlFor="password">Passord</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Opprett en konto
          </Button>
          <Button variant="outline" className="w-full">
            Registrer deg med Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Har du allerede en konto?{" "}
          <Link href="#" className="underline">
            Logg inn
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
