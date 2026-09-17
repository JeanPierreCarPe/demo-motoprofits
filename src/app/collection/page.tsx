"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { getVehicleBySlug } from "@/lib/vehicles";
import {
  collectionHero,
  collectionCategories,
  collectionCategoryInfo,
  premiumCollection,
  collectionVerification,
  recentSales,
  collectionNewsletter,
} from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { GoldButton } from "@/components/ui/Button";
import { FileCheck2, Gauge, ClipboardCheck, SearchCheck } from "lucide-react";

const verificationIcons = [FileCheck2, Gauge, ClipboardCheck, SearchCheck];

export default function CollectionPage() {
  const [active, setActive] = useState(collectionCategories[0]);
  const [subscribed, setSubscribed] = useState(false);
  const visible = premiumCollection.filter((v) => v.category === active);

  return (
    <>
      <PageHero {...collectionHero} />

      <section className="flex flex-col items-center gap-10 px-5 py-12 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap items-stretch gap-6">
          {collectionCategories.map((cat) => {
            const catInfo = collectionCategoryInfo[cat];
            const count = premiumCollection.filter((v) => v.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative flex h-40 min-w-[220px] flex-1 flex-col justify-end overflow-hidden rounded-[16px] border-2 p-5 text-left ${
                  active === cat ? "border-gold" : "border-foreground/20"
                }`}
              >
                <Image
                  src={catInfo.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="-z-10 object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden />
                <span className="font-heading text-lg font-extrabold text-foreground">{cat}</span>
                <span className="font-body text-xs text-foreground/70">{count} listed</span>
              </button>
            );
          })}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-8 sm:px-10 lg:px-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-wrap items-start gap-8">
            {visible.map((vehicle) => (
              <CollectionCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-8 rounded-[20px] border-2 border-gold bg-surface-alt p-8 sm:p-12">
          <h2 className="text-center font-heading text-3xl font-extrabold text-gold sm:text-4xl">
            {collectionVerification.title}
          </h2>
          <p className="max-w-2xl text-center font-body text-lg text-foreground/85">
            {collectionVerification.paragraph}
          </p>
          <div className="flex w-full flex-wrap gap-4">
            {collectionVerification.points.map((point, i) => {
              const Icon = verificationIcons[i] ?? FileCheck2;
              return (
                <div
                  key={point}
                  className="flex flex-1 min-w-64 flex-col items-center gap-3 rounded-lg bg-background px-6 py-7 text-center"
                >
                  <Icon className="h-9 w-9 text-gold" strokeWidth={1.75} />
                  <span className="font-body text-base font-medium text-foreground sm:text-lg">{point}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 px-5 py-16 sm:px-10 lg:px-20">
        <Container>
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Notable Past Sales
          </h2>
          <div className="flex flex-wrap gap-4">
            {recentSales.map((sale) => {
              const match = getVehicleBySlug(slugify(sale.name));
              return (
                <Link
                  key={sale.name}
                  href={match ? `/vehicle/${match.slug}` : "/collection"}
                  className="flex flex-1 min-w-64 items-center gap-4 rounded-xl border border-foreground/25 bg-surface-alt p-4 transition-colors hover:border-gold"
                >
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image src={sale.image} alt={sale.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{sale.name}</p>
                    <p className="font-heading font-extrabold text-gold">{sale.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-6 rounded-[20px] bg-violet-gradient p-8 text-center sm:p-12">
          <span className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-foreground/80">
            {collectionNewsletter.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-extrabold uppercase text-foreground sm:text-4xl">
            {collectionNewsletter.title}
          </h2>
          <p className="max-w-xl font-body text-foreground/90">{collectionNewsletter.paragraph}</p>
          {subscribed ? (
            <p className="font-heading text-lg font-extrabold text-foreground">You're on the list — watch your inbox.</p>
          ) : (
            <form
              className="flex w-full max-w-md gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="h-12 flex-1 rounded-lg border-2 border-foreground/50 bg-foreground px-4 font-body text-surface-alt placeholder:text-surface-alt/50 focus:border-gold focus:outline-none"
              />
              <GoldButton type="submit">{collectionNewsletter.cta}</GoldButton>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
