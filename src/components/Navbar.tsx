"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/siteContent";
import { PillButton } from "./ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-5 backdrop-blur-[6px] transition-colors duration-300 sm:px-10 lg:grid lg:h-[100px] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-2 lg:px-10 xl:px-20 ${
        scrolled ? "fixed bg-surface-alt/95 shadow-[0_4px_20px_0_rgba(0,0,0,0.4)]" : "absolute bg-surface-alt/20"
      }`}
    >
      <div className="hidden items-center gap-3 lg:flex lg:justify-self-start xl:gap-5">
        {navLinks.left.map((link) => (
          <PillButton key={link.label} href={link.href}>
            {link.label}
          </PillButton>
        ))}
      </div>

      <a href="/" className="relative h-14 w-20 shrink-0 lg:h-20 lg:w-28 lg:justify-self-center">
        <Image src="/images/logo.webp" alt="Motoprofits" fill className="object-contain" priority />
      </a>

      <div className="hidden items-center gap-3 lg:flex lg:justify-self-end xl:gap-5">
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
