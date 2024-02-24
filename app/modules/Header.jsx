"use client";

import { DesktopNavigationMenu } from "@/components/NavigationMenu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  return (
    <header className="hidden md:block h-14 sticky top-0 z-20 bg-grey p-2 md:px-6 text-white">
      <nav className="max-w-screen-xl flex w-full justify-between items-center mx-auto">
        <Link href="/">
          <Image src="/logo.webp" width="1600" height="302" alt="logo" className="h-10 w-auto" />
        </Link>
        <DesktopNavigationMenu />
      </nav>
    </header>
  );
}

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="md:hidden h-14 sticky top-0 z-30 bg-grey py-2 px-4 md:px-6 text-white">
        <nav className="max-w-screen-xl flex w-full justify-between items-center mx-auto">
          <Link href="/">
            <Image src="/logo.webp" width="1600" height="302" alt="logo" className="h-10 w-auto" />
          </Link>
          <button className="text-2xl" aria-label="Mobile navigation menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>
      {isOpen && <MobileNavigationMenu setIsOpen={setIsOpen} />}
    </>
  );
}

function MobileNavigationMenu({ setIsOpen }) {
  return (
    <nav className="md:hidden bg-grey p-2 px-4 md:px-6 text-white fixed inset-0 z-20 flex flex-col gap-8 text-3xl items-center justify-center">
      <Link onClick={() => setIsOpen(false)} href="/#priser">
        Priser
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/galleri">
        Galleri
      </Link>
      <Button variant="text" asChild className="text-3xl after:bottom-[6px] py-0">
        <Link href="https://salon-maria.planway.com/">Book tid</Link>
      </Button>
    </nav>
  );
}
