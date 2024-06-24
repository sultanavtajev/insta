"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CameraIcon className="h-6 w-6" />
        <span className="sr-only">Bildeanalyse</span>
      </Link>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full sm:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <Link
                href="/"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Hovedside
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/priser"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Priser
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/guide"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Guide
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/kontakt"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Kontakt
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/logg-inn"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Logg inn
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="hidden sm:flex gap-4 sm:gap-6 items-center">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <span className="flex items-center">Hovedside</span>
          </Link>
          <Link
            href="/priser"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <span className="flex items-center">Priser</span>
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <span className="flex items-center">Guide</span>
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <span className="flex items-center">Kontakt</span>
          </Link>
          <Link href="/logg-inn">
            <Button
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Logg inn
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
