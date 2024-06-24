"use client";

export default function Komponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Vilkår og betingelser
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Ved å bruke vår bilde delings-app, samtykker du til følgende vilkår
            og betingelser.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold">Datasikkerhet</h2>
            <p className="mt-2 text-muted-foreground">
              Vi tar ditt personvern på alvor. All brukerdata, inkludert
              opplastede bilder, lagres trygt og vil ikke bli delt med
              tredjeparter uten ditt samtykke.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Innholdsretningslinjer</h2>
            <p className="mt-2 text-muted-foreground">
              Du samtykker til å kun laste opp innhold som er ditt eget, ikke
              krenker noen opphavsrettigheter eller varemerker, og er egnet for
              et generelt publikum. Vi forbeholder oss retten til å fjerne
              innhold som bryter med disse retningslinjene.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Åndsverk</h2>
            <p className="mt-2 text-muted-foreground">
              Alle immaterielle rettigheter i vår app, inkludert design, kode og
              merkevare, eies av oss. Du blir gitt en begrenset, ikke-eksklusiv
              lisens til å bruke appen til personlig, ikke-kommersiell bruk.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Ansvarsbegrensninger</h2>
            <p className="mt-2 text-muted-foreground">
              Vi er ikke ansvarlige for noen indirekte, spesielle eller
              følgeskader knyttet til din bruk av appen. Vårt maksimale ansvar
              vil være begrenset til beløpet du har betalt for appen, hvis noen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
