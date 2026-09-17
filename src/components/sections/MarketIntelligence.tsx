import Image from "next/image";
import Link from "next/link";
import {
  marketIntelligenceSection,
  recentSales,
  trendingCategories,
} from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataPanel } from "@/components/ui/DataPanel";
import { Container } from "@/components/ui/Container";
import { slugify } from "@/lib/slugify";
import { getVehicleBySlug } from "@/lib/vehicles";

export function MarketIntelligence() {
  return (
    <section className="flex flex-col items-center gap-12 bg-background px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <SectionHeading
        eyebrowLeft={marketIntelligenceSection.eyebrowLeft}
        eyebrowRight={marketIntelligenceSection.eyebrowRight}
        paragraph={marketIntelligenceSection.paragraph}
        leftGold
      />
      <Container className="flex flex-wrap items-start gap-8">
        <DataPanel title="Recent Success Stories">
          {recentSales.map((sale) => {
            const match = getVehicleBySlug(slugify(sale.name));
            return (
              <Link
                key={sale.name}
                href={match ? `/vehicle/${match.slug}` : "/collection"}
                className="flex w-full items-center gap-5 overflow-hidden rounded-xl border border-foreground/50 bg-background pr-4 transition-colors hover:border-gold sm:gap-8 sm:pr-10"
              >
                <div className="relative w-20 shrink-0 self-stretch sm:w-28">
                  <Image src={sale.image} alt={sale.name} fill sizes="112px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-start gap-1 py-3">
                  <p className="font-heading text-lg font-extrabold text-foreground sm:text-xl">
                    {sale.name}
                  </p>
                  <p className="font-heading text-xl font-extrabold text-gold sm:text-2xl">
                    {sale.price}
                  </p>
                  <p className="font-body text-sm uppercase text-foreground/50 sm:text-xl">
                    Premium Sale
                  </p>
                </div>
              </Link>
            );
          })}
        </DataPanel>

        <DataPanel title="Trending Categories">
          {trendingCategories.map((category) => (
            <div
              key={category.title}
              className="flex w-full items-center justify-between gap-4 rounded-xl border border-foreground/50 bg-background px-5 py-6 sm:gap-8"
            >
              <span className="font-heading text-lg font-extrabold leading-tight text-foreground sm:text-2xl">
                {category.title.split(" ").map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </span>
              <span className="text-right font-heading text-lg font-extrabold text-gold sm:text-2xl">
                {category.growth}
              </span>
            </div>
          ))}
        </DataPanel>
      </Container>
    </section>
  );
}
