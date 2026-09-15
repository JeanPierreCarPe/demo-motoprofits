"use client";

import { useState } from "react";
import { collectionCategories, premiumCollection, premiumCollectionSection } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { OutlineButton } from "@/components/ui/Button";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

export function PremiumCollection() {
  const [active, setActive] = useState(collectionCategories[0]);
  const visibleVehicles = premiumCollection.filter((vehicle) => vehicle.category === active).slice(0, 4);

  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="flex max-w-3xl flex-col items-center gap-6 sm:gap-10">
        <SectionHeading
          eyebrowLeft={premiumCollectionSection.eyebrowLeft}
          eyebrowRight={premiumCollectionSection.eyebrowRight}
          leftGold
        />
        <p className="text-center font-body text-lg text-foreground sm:text-xl">
          {premiumCollectionSection.paragraph}
        </p>
      </div>

      <CategoryTabs categories={collectionCategories} active={active} onChange={setActive} />

      <div className="flex w-full max-w-[1440px] flex-wrap items-start gap-8">
        {visibleVehicles.map((vehicle) => (
          <CollectionCard key={vehicle.name} vehicle={vehicle} />
        ))}
      </div>

      <OutlineButton href={premiumCollectionSection.viewCatalogHref} className="w-full max-w-sm">
        {premiumCollectionSection.viewCatalogCta}
      </OutlineButton>
    </section>
  );
}
