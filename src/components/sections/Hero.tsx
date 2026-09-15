import Image from "next/image";
import { hero } from "@/data/siteContent";
import { GoldButton, OutlineButton } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[560px] flex-col items-center justify-end overflow-hidden px-5 pb-10 pt-28 sm:min-h-[680px] sm:px-10 sm:pt-32 lg:min-h-[780px] lg:px-20 lg:pb-14 lg:pt-36"
    >
      <Image
        src={hero.backgroundImage}
        alt=""
        fill
        priority
        className="-z-10 object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden />

      <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
        <h1 className="relative font-heading text-6xl font-extrabold uppercase leading-[0.95] sm:text-8xl lg:text-[11rem]">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 text-transparent"
            style={{ WebkitTextStroke: "2px #e6a84e" }}
          >
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span className="relative text-gold">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </h1>

        <div className="flex w-full max-w-[328px] flex-col items-start gap-7 overflow-hidden rounded-[20px] bg-background/90 p-5 shadow-[0_0_20px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
          <p className="font-body text-lg text-foreground sm:text-xl">{hero.paragraph}</p>
          <div className="flex w-full flex-col items-start gap-5">
            <GoldButton href={hero.primaryCtaHref} className="w-full">
              {hero.primaryCta}
            </GoldButton>
            <OutlineButton href={hero.secondaryCtaHref} className="w-full">
              {hero.secondaryCta}
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
