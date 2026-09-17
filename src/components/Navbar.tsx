"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, footer } from "@/data/siteContent";
import { PillButton } from "./ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-5 backdrop-blur-[6px] transition-colors duration-300 sm:px-10 lg:grid lg:h-[100px] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-2 lg:px-10 xl:px-20 ${
          scrolled ? "fixed bg-surface-alt shadow-[0_4px_20px_0_rgba(0,0,0,0.4)]" : "absolute bg-surface-alt/80"
        }`}
      >
        <div className="hidden items-center gap-4 lg:flex lg:justify-self-start xl:gap-5">
          {footer.socials.map((social) => (
            <span
              key={social.label}
              aria-label={`${social.label} (coming soon)`}
              className="opacity-70"
            >
              <Image src={social.icon} alt="" width={22} height={22} className="h-[22px] w-[22px]" />
            </span>
          ))}
        </div>

        <a href="/" className="relative h-14 w-20 shrink-0 lg:h-20 lg:w-28 lg:justify-self-center">
          <Image src="/images/logo.webp" alt="Motoprofits" fill sizes="112px" className="object-contain" priority />
        </a>

        <div className="hidden items-center gap-3 lg:flex lg:justify-self-end xl:gap-5">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-surface-alt transition-opacity hover:opacity-90"
          >
            <Menu size={20} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-gold-gradient lg:hidden"
        >
          <span className="h-0.5 w-6 bg-surface-alt" />
          <span className="h-0.5 w-6 bg-surface-alt" />
          <span className="h-0.5 w-6 bg-surface-alt" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-surface-alt">
          <div className="relative flex min-h-full flex-col">
            <Image
              src="/images/hero-background.webp"
              alt=""
              fill
              sizes="100vw"
              className="-z-10 object-cover opacity-15"
              aria-hidden
            />
            <div className="absolute inset-0 -z-10 bg-black/75" aria-hidden />
            <div className="flex items-center justify-between px-5 py-6 sm:px-10 lg:px-20">
              <a href="/" onClick={() => setMenuOpen(false)} className="relative h-14 w-20 shrink-0">
                <Image src="/images/logo.webp" alt="Motoprofits" fill sizes="80px" className="object-contain" />
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-10 px-5 py-10 sm:gap-12">
              <nav className="flex flex-col items-center gap-4 sm:gap-6">
                {footer.links.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 font-heading text-4xl font-extrabold uppercase tracking-wide text-foreground transition-colors hover:text-gold sm:text-6xl"
                  >
                    <span className="font-body text-base font-normal text-gold/60 sm:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <PillButton
                href={navLinks.cta.href}
                onClick={() => setMenuOpen(false)}
                className="border-none bg-gold-gradient px-10 text-surface-alt"
              >
                {navLinks.cta.label}
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
