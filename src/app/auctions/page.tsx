"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { getVehicleBySlug } from "@/lib/vehicles";
import {
  auctionsHero,
  auctionsStatusBar,
  auctionsSortOptions,
  auctionsSellerCta,
  auctionsFaqs,
  liveAuctions,
  collectionCategories,
  howItWorksSteps,
  recentSales,
} from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { LiveAuctionCard } from "@/components/ui/LiveAuctionCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { StepCard } from "@/components/ui/StepCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { GoldButton, DarkButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const auctionCategoryMap: Record<string, string> = {
  "Ford Mustang Fastback": "Sports Cars",
  "Porsche 911 GT3 RS": "Sports Cars",
  "Harley-Davidson FLH Electra Glide": "Motorcycles",
  "Range Rover Sport": "Trucks & SUVs",
};

export default function AuctionsPage() {
  const [sort, setSort] = useState(auctionsSortOptions[0]);
  const [category, setCategory] = useState("All");

  const categories = ["All", ...collectionCategories];

  const filtered = useMemo(() => {
    let list = liveAuctions.filter(
      (a) => category === "All" || auctionCategoryMap[a.name] === category
    );
    if (sort === "Ending Soonest") list = [...list].sort((a, b) => a.endsInSeconds - b.endsInSeconds);
    if (sort === "Highest Bid")
      list = [...list].sort((a, b) => Number(b.currentBid.replace(/,/g, "")) - Number(a.currentBid.replace(/,/g, "")));
    if (sort === "Most Bidders")
      list = [...list].sort((a, b) => Number(b.activeBidders) - Number(a.activeBidders));
    return list;
  }, [sort, category]);

  const endingSoon = [...liveAuctions].sort((a, b) => a.endsInSeconds - b.endsInSeconds).slice(0, 2);

  return (
    <>
      <PageHero {...auctionsHero}>
        <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-4 sm:gap-8">
          {auctionsStatusBar.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-gold/50 bg-surface-dark/60 px-4 py-3 backdrop-blur-sm">
              <span className="font-heading text-2xl font-extrabold text-gold">{stat.value}</span>
              <span className="font-body text-xs uppercase text-foreground/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="flex flex-col items-center gap-8 px-5 py-12 sm:px-10 lg:px-20">
        <Container className="flex flex-col gap-6">
          <CategoryTabs categories={categories} active={category} onChange={setCategory} />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {auctionsSortOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSort(option)}
                className={`rounded-lg px-4 py-2 font-body text-sm font-semibold ${
                  sort === option ? "bg-gold text-surface-alt" : "bg-surface-alt text-foreground/70"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-12 px-5 py-8 sm:px-10 lg:px-20">
        {filtered.length > 0 ? (
          <Container className="flex flex-wrap items-start gap-8">
            {filtered.map((auction, i) => (
              <LiveAuctionCard key={auction.name} auction={auction} priority={i < 2} />
            ))}
          </Container>
        ) : (
          <Container className="flex flex-col items-center gap-4 rounded-[20px] border-2 border-dashed border-foreground/25 bg-surface-alt px-8 py-16 text-center">
            <p className="font-heading text-xl font-extrabold uppercase text-foreground sm:text-2xl">
              No Live Auctions in {category} Right Now
            </p>
            <p className="max-w-md font-body text-foreground/70">
              New auctions in this category open regularly — in the meantime, browse the full {category} lineup in the Premium Collection.
            </p>
            <GoldButton href="/collection">Browse {category} Collection</GoldButton>
          </Container>
        )}
      </section>

      <section className="flex flex-col items-center gap-6 px-5 py-12 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-6 font-heading text-2xl font-extrabold uppercase text-gold sm:text-3xl">
            Ending Within the Hour
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {endingSoon.map((a) => (
              <Link
                key={a.name}
                href={`/vehicle/${slugify(a.name)}`}
                className="w-72 shrink-0 rounded-xl border-2 border-gold bg-surface-alt p-4 transition-colors hover:bg-gold/10"
              >
                <p className="font-heading font-extrabold text-foreground">{a.name}</p>
                <p className="mt-2 font-heading text-xl font-extrabold text-gold">${a.currentBid}</p>
                <p className="font-body text-xs text-foreground/50">Current Bid · {a.activeBidders} bidders</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-center font-heading text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
            How Bidding <span className="text-gold">Works</span>
          </h2>
          <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
            {howItWorksSteps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
          <GoldButton href="/how-it-works">See the Full Process</GoldButton>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 bg-surface px-5 py-12 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">Recently Sold</h2>
          <div className="flex flex-col gap-3">
            {recentSales.map((sale) => {
              const match = getVehicleBySlug(slugify(sale.name));
              return (
                <Link
                  key={sale.name}
                  href={match ? `/vehicle/${match.slug}` : "/collection"}
                  className="flex items-center justify-between rounded-lg border border-foreground/20 bg-background px-5 py-3 transition-colors hover:border-gold"
                >
                  <span className="font-body font-medium text-foreground">{sale.name}</span>
                  <span className="font-heading font-extrabold text-gold">{sale.price}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand {...auctionsSellerCta}>
        <DarkButton href={auctionsSellerCta.ctaHref} className="w-full">
          {auctionsSellerCta.cta}
        </DarkButton>
      </CtaBand>

      <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
            Bidding FAQ
          </h2>
          <Accordion items={auctionsFaqs} />
        </Container>
      </section>
    </>
  );
}
