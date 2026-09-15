"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories, trendingCategories, recentSales } from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { DataPanel } from "@/components/ui/DataPanel";
import { DarkButton } from "@/components/ui/Button";

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const filtered = rest.filter((p) => category === "All" || p.category === category);

  return (
    <>
      <PageHero
        eyebrow="The Motoprofits Journal"
        title="Market Insight, Not Filler"
        paragraph="Buying guides, selling guides, and the pricing data behind every AI estimate."
        backgroundImage="/images/editorial-03.webp"
      />

      <section className="flex flex-col items-center gap-10 px-5 py-12 sm:px-10 lg:px-20">
        <Container>
          <Link
            href={`/blog/${featured.slug}`}
            className="flex flex-col overflow-hidden rounded-[20px] border-2 border-gold bg-surface lg:flex-row"
          >
            <div className="relative h-64 w-full lg:h-auto lg:w-1/2">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-10">
              <span className="w-fit rounded-full bg-gold/20 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-gold">
                {featured.category}
              </span>
              <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">{featured.title}</h2>
              <p className="font-body text-foreground/80">{featured.excerpt}</p>
              <span className="font-body text-sm text-foreground/50">
                {featured.author.name} · {featured.date} · {featured.readTime}
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 px-5 pb-8 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap items-center justify-center gap-3">
          {["All", ...blogCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border border-gold px-5 py-2 font-heading text-sm font-semibold ${
                category === cat ? "bg-gold/50 text-foreground" : "bg-surface-alt text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 px-5 pb-16 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex w-full flex-col overflow-hidden rounded-[16px] border-2 border-accent-violet bg-surface sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="w-fit rounded-full bg-gold/20 px-3 py-1 font-heading text-xs font-extrabold uppercase tracking-wider text-gold">
                  {post.category}
                </span>
                <h3 className="font-heading text-lg font-extrabold text-foreground">{post.title}</h3>
                <p className="line-clamp-2 font-body text-sm text-foreground/70">{post.excerpt}</p>
                <span className="mt-auto font-body text-xs text-foreground/50">
                  {post.date} · {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase text-gold sm:text-3xl">
            Market Intelligence Digest
          </h2>
          <div className="flex w-full flex-wrap gap-8">
            <DataPanel title="This Quarter's Sales">
              {recentSales.map((sale) => (
                <div key={sale.name} className="flex w-full items-center justify-between rounded-lg border border-foreground/20 bg-background px-4 py-3">
                  <span className="font-body text-sm text-foreground">{sale.name}</span>
                  <span className="font-heading font-extrabold text-gold">{sale.price}</span>
                </div>
              ))}
            </DataPanel>
            <DataPanel title="Trending Categories">
              {trendingCategories.map((cat) => (
                <div key={cat.title} className="flex w-full items-center justify-between rounded-lg border border-foreground/20 bg-background px-4 py-3">
                  <span className="font-body text-sm text-foreground">{cat.title}</span>
                  <span className="font-heading font-extrabold text-gold">{cat.growth}</span>
                </div>
              ))}
            </DataPanel>
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-6 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col items-center gap-6 rounded-[20px] bg-gold-gradient p-8 text-center sm:p-12">
          <h2 className="font-heading text-2xl font-extrabold uppercase text-surface-alt sm:text-3xl">
            Get Market Insights Weekly
          </h2>
          <p className="max-w-md font-body text-surface-alt/90">
            New listings, pricing trends, and guides — straight to your inbox.
          </p>
          {subscribed ? (
            <p className="font-heading text-lg font-extrabold text-surface-alt">You&apos;re subscribed — first digest lands next week.</p>
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
                className="h-12 flex-1 rounded-lg border-2 border-surface-alt/40 bg-foreground px-4 font-body text-surface-alt placeholder:text-surface-alt/60 focus:outline-none"
              />
              <DarkButton type="submit">Subscribe</DarkButton>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
