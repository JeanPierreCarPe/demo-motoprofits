"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/siteContent";
import { PillButton } from "./ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between bg-surface-alt/20 px-5 backdrop-blur-[6px] sm:px-10 lg:h-[100px] lg:px-20">
      <div className="hidden items-center gap-5 lg:flex">
        {navLinks.left.map((link) => (
          <PillButton key={link.label} href={link.href}>
            {link.label}
          </PillButton>
        ))}
      </div>

      <a href="/" className="relative h-14 w-20 shrink-0 lg:absolute lg:left-1/2 lg:h-20 lg:w-28 lg:-translate-x-1/2">
        <Image src="/images/logo.webp" alt="Motoprofits" fill className="object-contain" priority />
      </a>

      <div className="hidden items-center gap-5 lg:flex">
        {navLinks.right.map((link) => (
          <PillButton key={link.label} href={link.href}>
            {link.label}
          </PillButton>
        ))}
        <PillButton href={navLinks.cta.href} className="border-none bg-gold-gradient text-surface-alt">
          {navLinks.cta.label}
        </PillButton>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
      >
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 flex flex-col items-stretch gap-3 bg-surface-alt/95 p-5 backdrop-blur-md lg:hidden">
          {[...navLinks.left, ...navLinks.right].map((link) => (
            <PillButton key={link.label} href={link.href} className="w-full">
              {link.label}
            </PillButton>
          ))}
          <PillButton href={navLinks.cta.href} className="w-full border-none bg-gold-gradient text-surface-alt">
            {navLinks.cta.label}
          </PillButton>
        </div>
      )}
    </header>
  );
}
