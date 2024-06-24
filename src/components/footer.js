"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
  <p className="text-xs text-muted-foreground">
    &copy; 2024 Developia AS. Alle rettigheter reservert.
  </p>
  <nav className="sm:ml-auto flex gap-4 sm:gap-6">
    <Link
      href="/brukervilkar"
      className="text-xs hover:underline underline-offset-4"
      prefetch={false}
    >
      Brukervilkår
    </Link>
    <Link
      href="/personvern"
      className="text-xs hover:underline underline-offset-4"
      prefetch={false}
    >
      Personvern
    </Link>
  </nav>
</footer>

  );
}

