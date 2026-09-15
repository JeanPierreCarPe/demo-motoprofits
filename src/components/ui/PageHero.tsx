import Image from "next/image";
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  paragraph: string;
  backgroundImage: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, paragraph, backgroundImage, children }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[420px] flex-col items-center justify-end overflow-hidden px-5 pb-12 pt-[140px] sm:min-h-[480px] sm:px-10 lg:min-h-[560px] lg:px-20 lg:pb-16">
      <Image src={backgroundImage} alt="" fill priority className="-z-20 object-cover" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden />

      <div className="flex w-full max-w-[1440px] flex-col items-center gap-6 text-center sm:gap-8">
        <span className="rounded-full border border-gold bg-surface-dark/75 px-5 py-2 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-gold backdrop-blur-[6px] sm:text-sm">
          {eyebrow}
        </span>
        <h1 className="max-w-4xl break-words font-heading text-4xl font-extrabold uppercase leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-2xl font-body text-lg text-foreground/90 sm:text-xl">{paragraph}</p>
        {children}
      </div>
    </section>
  );
}
