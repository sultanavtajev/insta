"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Komponent() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Glemt passord</h1>
        <p className="text-muted-foreground">
          Skriv inn e-posten din for å tilbakestille passordet ditt.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-post</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button type="submit" className="w-full">
          Tilbakestill passord
        </Button>
      </form>
    </div>
  );
}
