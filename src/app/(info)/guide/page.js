"use client";

import Link from "next/link";

export default function Komponent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Lås opp kraften til AI-bildeanalyse
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Oppdag hvordan vår app kan transformere bildene dine med avansert
            AI-teknologi.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <UploadIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 1: Last opp ditt bilde
                </h3>
                <p className="text-muted-foreground">
                  Begynn ved å klikke på "Last opp bilde"-knappen og velg bildet
                  du vil analysere.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ScanIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 2: Analyser bildet
                </h3>
                <p className="text-muted-foreground">
                  Når bildet ditt er lastet opp, vil vår avanserte AI analysere
                  det og gi detaljerte innsikter.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <DownloadIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 3: Last ned resultatene
                </h3>
                <p className="text-muted-foreground">
                  Etter at analysen er fullført, kan du laste ned en rapport med
                  alle innsiktene om bildet ditt.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FlagIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Lås opp fordelene</h3>
                <p className="text-muted-foreground">
                  Vår AI-bildeanalyse kan hjelpe deg med:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Identifisere objekter, personer og scener i bildene dine
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Oppdage og klassifisere visuelle elementer som farger,
                    teksturer og mønstre
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Få innsikter for å forbedre fotografering, markedsføring
                    eller produktutforming
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Uovertruffen nøyaktighet
                </h3>
                <p className="text-muted-foreground">
                  Våre AI-modeller er trent på millioner av bilder, noe som
                  sikrer nøyaktige og pålitelige resultater hver gang.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/logg-inn"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Kom i gang
          </Link>
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

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function ScanIcon(props) {
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
