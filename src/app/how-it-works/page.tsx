"use client";

import { useState } from "react";
import {
  processHero,
  processTimeline,
  sellerWalkthrough,
  buyerWalkthrough,
  feeTable,
  buyerPremium,
  membershipTiers,
  processTimelineExample,
  processFaqs,
} from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { DarkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

export default function HowItWorksPage() {
  const [track, setTrack] = useState<"Sellers" | "Buyers">("Sellers");
  const steps = track === "Sellers" ? sellerWalkthrough : buyerWalkthrough;

  return (
    <>
      <PageHero {...processHero}>
        <div className="flex w-full max-w-3xl items-center justify-between">
          {processTimeline.map((stage, i) => (
            <div key={stage} className="flex flex-1 flex-col items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-background font-heading text-xl font-extrabold text-gold sm:h-16 sm:w-16 sm:text-2xl">
                {i + 1}
              </span>
              <span className="text-center font-body text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">{stage}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-10">
          <div className="flex gap-3 rounded-full border border-gold bg-surface-alt p-1.5">
            {(["Sellers", "Buyers"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t)}
                className={`rounded-full px-6 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider ${
                  track === t ? "bg-gold-gradient text-surface-alt" : "text-foreground"
                }`}
              >
                For {t}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-4 rounded-[20px] border-2 border-foreground/25 bg-surface-alt p-6 sm:flex-row sm:gap-8 sm:p-8">
                <span className="font-heading text-4xl font-black text-gold sm:text-5xl">{`0${i + 1}`}</span>
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-heading text-2xl font-extrabold text-foreground">{step.title}</h3>
                  <p className="font-body text-foreground/80">{step.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((d) => (
                      <span key={d} className="rounded-lg bg-gold/15 px-3 py-1.5 font-body text-xs font-semibold text-foreground">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Fees &amp; Pricing
          </h2>
          <div className="overflow-x-auto rounded-[16px] border border-foreground/20">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-foreground/20 bg-background text-sm uppercase text-foreground/50">
                  <th className="px-5 py-4">Final Sale Price</th>
                  <th className="px-5 py-4">Seller Success Fee</th>
                  <th className="px-5 py-4">Note</th>
                </tr>
              </thead>
              <tbody>
                {feeTable.map((row) => (
                  <tr key={row.tier} className="border-b border-foreground/10">
                    <td className="px-5 py-4 font-body text-foreground">{row.tier}</td>
                    <td className="px-5 py-4 font-heading font-extrabold text-gold">{row.sellerFee}</td>
                    <td className="px-5 py-4 font-body text-sm text-foreground/60">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-body text-sm text-foreground/60">Buyer&apos;s premium: {buyerPremium}</p>

          <div className="mt-10 flex flex-wrap gap-6">
            {membershipTiers.map((tier) => (
              <div key={tier.name} className="flex-1 min-w-64 rounded-[16px] border-2 border-gold bg-surface-alt p-6">
                <p className="font-heading text-xl font-extrabold text-foreground">{tier.name}</p>
                <p className="mb-4 font-heading text-2xl font-extrabold text-gold">{tier.price}</p>
                <ul className="flex flex-col gap-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="font-body text-sm text-foreground/80">
                      · {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            A Real Timeline
          </h2>
          <div className="flex flex-col gap-4">
            {processTimelineExample.map((item) => (
              <div key={item.day} className="flex items-center gap-6 rounded-xl border border-foreground/20 bg-surface-alt px-6 py-4">
                <span className="w-20 shrink-0 font-heading font-extrabold text-gold">{item.day}</span>
                <span className="font-body text-foreground/85">{item.event}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex max-w-3xl flex-col gap-10">
          {Object.entries(processFaqs).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-extrabold uppercase text-gold">{group}</h3>
              <Accordion items={items} />
            </div>
          ))}
        </Container>
      </section>

      <CtaBand eyebrow="Ready?" title="Still Have Questions?" paragraph="Our team answers in under two hours.">
        <DarkButton href="/contact" className="w-full">
          Contact Support
        </DarkButton>
      </CtaBand>
    </>
  );
}
