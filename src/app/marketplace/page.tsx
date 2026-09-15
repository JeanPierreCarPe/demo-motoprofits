"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  marketplaceHero,
  marketplaceSaleTypes,
  marketplaceSavedSearchExample,
  marketplaceSoldArchiveNote,
  collectionCategories,
  trendingCategories,
} from "@/data/siteContent";
import { getAllVehicles } from "@/lib/vehicles";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { PremiumBadge } from "@/components/ui/Badge";
import { GoldButton, OutlineButton } from "@/components/ui/Button";

export default function MarketplacePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [saleType, setSaleType] = useState("All");
  const [view, setView] = useState<"grid" | "table">("grid");

  const all = useMemo(() => getAllVehicles(), []);

  const results = all.filter((v) => {
    const matchesQuery = v.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || v.category === category;
    const matchesType =
      saleType === "All" || (saleType === "Live Auction" ? v.isLive : !v.isLive);
    return matchesQuery && matchesCategory && matchesType;
  });

  return (
    <>
      <PageHero {...marketplaceHero}>
        <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search make, model, or category..."
            className="h-14 flex-1 rounded-lg border-2 border-gold bg-surface-dark/80 px-5 font-body text-lg text-foreground placeholder:text-foreground/50 backdrop-blur-sm focus:outline-none"
          />
          <GoldButton
            className="h-14"
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
          >
            Search
          </GoldButton>
        </div>
      </PageHero>

      <section className="flex flex-col items-center gap-6 px-5 py-10 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap items-center gap-3 rounded-[16px] border border-foreground/20 bg-surface-alt p-5">
          <span className="font-body text-sm text-foreground/60">Saved search:</span>
          <span className="font-body font-semibold text-foreground">
            &ldquo;{marketplaceSavedSearchExample.query}&rdquo;
          </span>
          <span className="ml-auto font-body text-sm font-semibold text-gold">
            {marketplaceSavedSearchExample.status}
          </span>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 px-5 pb-6 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap items-center gap-3">
          {["All", ...collectionCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border border-gold px-4 py-2 font-body text-sm font-semibold ${
                category === cat ? "bg-gold/50 text-foreground" : "bg-surface-alt text-foreground/70"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="mx-2 h-6 w-px bg-foreground/20" />
          {["All", ...marketplaceSaleTypes].map((type) => (
            <button
              key={type}
              onClick={() => setSaleType(type)}
              className={`rounded-full border border-accent-violet px-4 py-2 font-body text-sm font-semibold ${
                saleType === type ? "bg-accent-violet/40 text-foreground" : "bg-surface-alt text-foreground/70"
              }`}
            >
              {type}
            </button>
          ))}
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`rounded-lg px-3 py-2 font-body text-sm ${view === "grid" ? "bg-gold text-surface-alt" : "bg-surface-alt text-foreground/70"}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("table")}
              className={`rounded-lg px-3 py-2 font-body text-sm ${view === "table" ? "bg-gold text-surface-alt" : "bg-surface-alt text-foreground/70"}`}
            >
              Table
            </button>
          </div>
        </Container>
      </section>

      <section id="results" className="flex flex-col items-center gap-6 px-5 pb-16 sm:px-10 lg:px-20">
        <Container>
          <p className="mb-6 font-body text-sm text-foreground/50">{results.length} vehicles found</p>
          {view === "grid" ? (
            <div className="flex flex-wrap gap-6">
              {results.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vehicle/${v.slug}`}
                  className="flex w-full flex-col overflow-hidden rounded-[16px] border-2 border-accent-violet bg-surface sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="relative h-48 w-full">
                    <Image src={v.image} alt={v.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading font-extrabold text-foreground">{v.name}</span>
                      <PremiumBadge text={v.isLive ? "Live" : "Listed"} />
                    </div>
                    <span className="font-heading text-lg font-extrabold text-gold">{v.priceValue}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-foreground/20 text-sm uppercase text-foreground/50">
                    <th className="py-3">Name</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">{"Price"}</th>
                    <th className="py-3">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((v) => (
                    <tr key={v.slug} className="border-b border-foreground/10">
                      <td className="py-3">
                        <Link href={`/vehicle/${v.slug}`} className="font-body font-semibold text-foreground hover:text-gold">
                          {v.name}
                        </Link>
                      </td>
                      <td className="py-3 font-body text-foreground/70">{v.category}</td>
                      <td className="py-3 font-heading font-extrabold text-gold">{v.priceValue}</td>
                      <td className="py-3 font-body text-foreground/70">{v.isLive ? "Live Auction" : "Upcoming"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">Trending Now</h2>
          <div className="flex flex-wrap gap-4">
            {trendingCategories.map((cat) => (
              <div key={cat.title} className="flex-1 min-w-56 rounded-xl border border-foreground/20 bg-background p-5">
                <p className="font-body text-foreground/80">{cat.title}</p>
                <p className="font-heading text-xl font-extrabold text-gold">{cat.growth}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-4 rounded-[20px] border-2 border-foreground/25 bg-surface-alt p-8 text-center sm:p-12">
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            {marketplaceSoldArchiveNote.title}
          </h2>
          <p className="max-w-xl font-body text-foreground/80">{marketplaceSoldArchiveNote.paragraph}</p>
          <OutlineButton href="/blog">Read Market Insights</OutlineButton>
        </Container>
      </section>
    </>
  );
}
