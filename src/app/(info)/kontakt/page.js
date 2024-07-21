"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Komponent() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kontakt oss
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Ta kontakt med vårt team for eventuelle henvendelser.
          </p>
        </div>
        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Navn</Label>
              <Input id="name" placeholder="Skriv inn ditt navn" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                placeholder="Skriv inn din e-postadresse"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Melding</Label>
            <Textarea
              id="message"
              placeholder="Skriv inn din melding"
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Send inn
          </Button>
        </form>
      </div>
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hvem er vi?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Lær mer om vårt selskap og vår misjon.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-muted p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Vår misjon</h3>
            <p className="mt-2 text-muted-foreground">
              Vi er dedikert til å tilby den beste service og støtte til våre
              kunder.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Våre verdier</h3>
            <p className="mt-2 text-muted-foreground">
              Integritet, innovasjon og kundetilfredshet er hjertet av alt vi
              gjør.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Vårt team</h3>
            <p className="mt-2 text-muted-foreground">
              Vårt team av eksperter er dedikert til å levere de beste
              resultatene for våre kunder.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Møt vårt team
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Bli kjent med menneskene bak vårt selskap.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-muted p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/img3.jpg" />
                <AvatarFallback>Sultan Avtajev</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sultan Avtajev</h3>
                <p className="text-muted-foreground">CEO/Utvikler</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Sultan er grunnleggeren og administrerende direktør i vårt
              selskap. Han har over 15 års erfaring som selvstendig næringsdrivende og er
              lidenskapelig opptatt av å levere de beste resultatene for våre
              kunder.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/img3.jpg" />
                <AvatarFallback>Paolla Avtajeva</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Paolla Avtajeva</h3>
                <p className="text-muted-foreground">Markedsføring/SoMe</p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Paolla er vår SoMe-ansvarlig. Hun har en dyp forståelse av de
              nyeste teknologiene og er ansvarlig for å drive vår markedsavdeling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
