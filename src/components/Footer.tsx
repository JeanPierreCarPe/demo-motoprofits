import Image from "next/image";
import Link from "next/link";
import { footer } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden bg-black/70 px-5 py-12 sm:px-10 lg:px-20">
      <Image
        src="/images/footer-background.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        aria-hidden
      />
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-8">
        <Image
          src="/images/logo.webp"
          alt="Motoprofits"
          width={187}
          height={140}
          className="h-24 w-auto lg:h-36"
        />
        <div className="hidden h-24 w-px bg-gold lg:block lg:h-36" aria-hidden />
        <p className="max-w-sm text-center font-heading text-3xl font-extrabold leading-tight text-gold sm:text-4xl lg:w-96 lg:text-left lg:text-5xl">
          {footer.tagline}
        </p>
        <div className="hidden h-24 w-px bg-gold lg:block lg:h-36" aria-hidden />
        <nav className="flex w-full max-w-xl flex-wrap items-center justify-center gap-6 lg:w-auto lg:justify-start lg:gap-8">
          {footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="min-w-24 font-body text-lg font-medium text-gold hover:underline hover:underline-offset-4 sm:text-2xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-10 flex items-center gap-6">
        {footer.socials.map((social) => (
          <span key={social.label} aria-label={`${social.label} (coming soon)`} className="opacity-60">
            <Image src={social.icon} alt="" width={24} height={24} className="h-6 w-6" />
          </span>
        ))}
      </div>
    </footer>
  );
}
