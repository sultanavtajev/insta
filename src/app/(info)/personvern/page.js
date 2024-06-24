"use client";

export default function Komponent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Personvernserklæring</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Hos Developia AS tar vi personvern og sikkerhet for dine data svært
          alvorlig. Plattformen vår lar deg laste opp og dele bilder med venner
          og familie, og vi er forpliktet til å beskytte din personlige
          informasjon.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Hvordan vi håndterer dine data
          </h2>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                Datakryptering
              </h3>
              <p className="text-muted-foreground">
                All brukerdata, inkludert opplastede bilder, er kryptert med
                bransjestandard AES-256 kryptering. Dette sikrer at
                informasjonen din er beskyttet mot uautorisert tilgang.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                Brukergodkjennelse
              </h3>
              <p className="text-muted-foreground">
                Vi vil aldri bruke eller dele din personlige informasjon uten
                ditt uttrykkelige samtykke. Du har full kontroll over dataene du
                velger å dele med oss.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                Dataoppbevaring
              </h3>
              <p className="text-muted-foreground">
                Vi vil beholde dine data så lenge det er nødvendig for å tilby
                deg våre tjenester. Du kan be om sletting av dataene dine når
                som helst, og vi vil etterkomme din forespørsel innen 30 dager.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Våre prinsipper for personvern
          </h2>
          <ul className="grid gap-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Gjennomsiktighet
                </h3>
                <p>
                  Vi forplikter oss til å være åpne om våre data praksiser og gi
                  deg tydelig informasjon om hvordan vi bruker og beskytter dine
                  data.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Brukerkontroll
                </h3>
                <p>
                  Du har rett til å få tilgang til, endre og slette dine
                  personlige data når som helst. Vi vil aldri bruke dine data
                  uten ditt samtykke.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Datasikkerhet
                </h3>
                <p>
                  Vi bruker bransjeledende sikkerhetstiltak for å beskytte dine
                  data mot uautorisert tilgang, inkludert kryptering,
                  tilgangskontroller og regelmessige sikkerhetsrevisjoner.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Overholdelse
                </h3>
                <p>
                  Vi overholder alle gjeldende lover og forskrifter om
                  databeskyttelse, inkludert General Data Protection Regulation
                  (GDPR) og California Consumer Privacy Act (CCPA).
                </p>
              </div>
            </li>
          </ul>
        </div>
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
