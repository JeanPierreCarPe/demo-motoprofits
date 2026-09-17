import Image from "next/image";
import {
  aboutHero,
  aboutMission,
  aboutStats,
  verificationStandards,
  aboutTeam,
  aboutPartnershipCta,
  whyUsCards,
} from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { IconFeatureCard } from "@/components/ui/IconFeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { DarkButton } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutHero} />

      <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="max-w-3xl">
          <p className="text-center font-body text-lg leading-8 text-foreground/85 sm:text-xl">{aboutMission}</p>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap gap-6">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="flex-1 min-w-40 rounded-xl border border-gold/40 bg-surface-alt p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-gold sm:text-4xl">{stat.value}</p>
              <p className="font-body text-sm uppercase text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="text-center font-heading text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
            Trust &amp; <span className="text-gold">Safety</span>
          </h2>
          <div className="flex w-full flex-wrap items-start gap-8">
            {whyUsCards.map((card) => (
              <IconFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Verification Standards by Category
          </h2>
          <div className="flex flex-col gap-4">
            {verificationStandards.map((item) => (
              <div key={item.category} className="flex flex-col gap-2 rounded-xl border border-foreground/20 bg-background p-5 sm:flex-row sm:gap-6">
                <span className="w-56 shrink-0 font-heading font-extrabold text-gold">{item.category}</span>
                <span className="font-body text-foreground/80">{item.detail}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Who Runs This
          </h2>
          <div className="flex w-full flex-wrap justify-center gap-8">
            {aboutTeam.map((person) => (
              <div key={person.name} className="flex w-56 flex-col items-center gap-3 text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gold">
                  <Image src={person.image} alt={person.name} fill sizes="128px" className="object-cover" />
                </div>
                <p className="font-heading font-extrabold text-foreground">{person.name}</p>
                <p className="font-body text-sm text-gold">{person.role}</p>
                <p className="font-body text-xs text-foreground/60">{person.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand eyebrow={aboutPartnershipCta.eyebrow} title={aboutPartnershipCta.title} paragraph={aboutPartnershipCta.paragraph}>
        <DarkButton href={aboutPartnershipCta.ctaHref} className="w-full">
          {aboutPartnershipCta.cta}
        </DarkButton>
      </CtaBand>
    </>
  );
}
