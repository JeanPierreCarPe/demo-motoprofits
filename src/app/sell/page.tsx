"use client";

import { useState } from "react";
import Image from "next/image";
import {
  sellHero,
  valueEstimatorSection,
  sellComparison,
  sellCategoryGuidance,
  howItWorksSteps,
  earningsExample,
  testimonials,
  sellDocumentChecklist,
} from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/Button";
import { StepCard } from "@/components/ui/StepCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [salePrice, setSalePrice] = useState(earningsExample.salePrice);
  const fee = Math.round(salePrice * earningsExample.feeRate);
  const net = salePrice - fee;

  return (
    <>
      <section className="relative flex min-h-[560px] flex-col items-center justify-center gap-10 overflow-hidden px-5 pb-24 pt-[140px] sm:px-10 lg:px-20">
        <Image src="/images/handoff-02.webp" alt="" fill className="-z-20 object-cover" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-black/75" aria-hidden />
        <Container className="flex flex-col items-center gap-8 text-center">
          <h1 className="max-w-3xl break-words font-heading text-4xl font-extrabold uppercase leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
            {sellHero.headline}
          </h1>
          <p className="max-w-xl font-body text-lg text-foreground/90 sm:text-xl">{sellHero.paragraph}</p>
        </Container>

        <Container className="max-w-[842px]">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-[20px] bg-surface-alt p-8 text-center">
              <span className="font-body text-sm uppercase text-foreground/60">Estimated Range</span>
              <span className="font-heading text-4xl font-extrabold text-gold sm:text-5xl">$68,000 – $76,500</span>
              <p className="max-w-md font-body text-foreground/80">
                Based on recent comparable sales. List now to confirm your price with real bidders.
              </p>
              <GoldButton href="/account" className="w-full max-w-xs">
                List This Vehicle
              </GoldButton>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex w-full flex-wrap items-start gap-6 rounded-[20px] bg-surface-alt p-5 sm:gap-8"
            >
              {valueEstimatorSection.fields.map((field) => (
                <label key={field.label} className="flex min-w-72 flex-1 flex-col items-start gap-2.5">
                  <span className="font-heading text-lg font-medium text-white sm:text-xl">{field.label}</span>
                  <input
                    required
                    type="text"
                    placeholder={field.placeholder}
                    className="h-12 w-full rounded-lg border-2 border-foreground/50 bg-[#131313] px-5 font-body text-lg text-foreground placeholder:text-foreground/50 focus:border-gold focus:outline-none sm:text-xl"
                  />
                </label>
              ))}
              <GoldButton type="submit" className="h-12 min-w-[280px] flex-1">
                {valueEstimatorSection.cta}
              </GoldButton>
            </form>
          )}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Why Sell Here vs. Everywhere Else
          </h2>
          <div className="overflow-x-auto rounded-[16px] border border-foreground/20">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-foreground/20 bg-surface-alt text-sm uppercase text-foreground/50">
                  <th className="px-5 py-4"> </th>
                  <th className="px-5 py-4 text-gold">Motoprofits</th>
                  <th className="px-5 py-4">Elsewhere</th>
                </tr>
              </thead>
              <tbody>
                {sellComparison.map((row) => (
                  <tr key={row.label} className="border-b border-foreground/10">
                    <td className="px-5 py-4 font-body font-semibold text-foreground">{row.label}</td>
                    <td className="px-5 py-4 font-body text-gold">{row.motoprofits}</td>
                    <td className="px-5 py-4 font-body text-foreground/50">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Guidance by Category
          </h2>
          <div className="flex flex-col gap-4">
            {sellCategoryGuidance.map((item) => (
              <div key={item.category} className="flex flex-col gap-2 rounded-xl border border-foreground/20 bg-background p-5 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-48 shrink-0 font-heading font-extrabold text-gold">{item.category}</span>
                <span className="font-body text-foreground/80">{item.tip}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            The Listing Steps
          </h2>
          <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
            {howItWorksSteps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex max-w-xl flex-col items-center gap-6 rounded-[20px] border-2 border-gold bg-surface-alt p-8 text-center sm:p-10">
          <h2 className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">Earnings Calculator</h2>
          <label className="flex w-full flex-col gap-2">
            <span className="font-body text-sm text-foreground/70">Estimated sale price</span>
            <input
              type="range"
              min={5000}
              max={300000}
              step={5000}
              value={salePrice}
              onChange={(e) => setSalePrice(Number(e.target.value))}
              className="w-full accent-[#e6a84e]"
            />
            <span className="font-heading text-2xl font-extrabold text-foreground">
              ${salePrice.toLocaleString("en-US")}
            </span>
          </label>
          <div className="flex w-full items-center justify-between rounded-xl border border-foreground/25 bg-background px-6 py-4">
            <div>
              <p className="font-body text-xs uppercase text-foreground/50">Success Fee (6%)</p>
              <p className="font-heading font-extrabold text-foreground/70">-${fee.toLocaleString("en-US")}</p>
            </div>
            <div className="text-right">
              <p className="font-body text-xs uppercase text-foreground/50">You Net</p>
              <p className="font-heading text-2xl font-extrabold text-gold">${net.toLocaleString("en-US")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap gap-8">
          {[testimonials[0], testimonials[2]].map((t) => (
            <div key={t.author} className="flex-1 min-w-72">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="max-w-xl">
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Before You Start, Have Ready
          </h2>
          <ul className="flex flex-col gap-3">
            {sellDocumentChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-lg border border-foreground/20 bg-background px-5 py-3 font-body text-foreground/85">
                <span className="h-2 w-2 shrink-0 rotate-45 bg-gold" /> {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="sticky bottom-0 z-40 flex items-center justify-center border-t border-gold/40 bg-surface-alt/95 px-5 py-4 backdrop-blur-md sm:hidden">
        <GoldButton className="w-full" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Get Your Estimate
        </GoldButton>
      </section>
    </>
  );
}
