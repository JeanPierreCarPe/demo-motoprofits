import Image from "next/image";
import Link from "next/link";
import { CollectionVehicle } from "@/data/siteContent";
import { slugify } from "@/lib/slugify";
import { StatBox } from "./StatBox";
import { PremiumBadge } from "./Badge";

export function CollectionCard({ vehicle }: { vehicle: CollectionVehicle }) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[20px] border-2 border-accent-violet bg-surface shadow-[0_0_20px_0_rgba(0,0,0,0.5)] lg:w-[calc(50%-1rem)]">
      <Link href={`/vehicle/${slugify(vehicle.name)}`} className="relative block h-64 w-full sm:h-80 lg:h-96">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(min-width: 1024px) 624px, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-col items-start gap-5 px-5 pb-10 pt-5 sm:gap-6">
        <div className="flex w-full flex-wrap items-center gap-3 sm:gap-10">
          <Link href={`/vehicle/${slugify(vehicle.name)}`} className="flex-1">
            <h3 className="font-heading text-xl font-extrabold text-foreground hover:text-gold sm:text-3xl">
              {vehicle.name}
            </h3>
          </Link>
          <PremiumBadge text={vehicle.badge} />
        </div>
        <div className="flex flex-col items-start gap-2 sm:gap-3">
          <p className="font-body text-lg font-medium text-gold sm:text-xl">{vehicle.model}</p>
          <p className="font-body text-sm font-medium text-foreground/50 sm:text-base">
            {vehicle.specs}
          </p>
        </div>
        <div className="flex w-full items-center gap-3 sm:gap-4">
          {vehicle.stats.map((stat) => (
            <StatBox key={stat.label} {...stat} />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <span className="font-heading text-xl font-extrabold text-gold drop-shadow-[0_0_10px_rgba(230,168,78,0.5)] sm:text-3xl">
              ${vehicle.startingBid}
            </span>
            <span className="font-body text-xs uppercase text-foreground/50 sm:text-sm">
              Starting Bid
            </span>
          </div>
          <Link
            href={`/vehicle/${slugify(vehicle.name)}`}
            className="flex h-12 w-full max-w-[256px] flex-1 items-center justify-center overflow-hidden rounded-lg border-2 border-foreground bg-foreground/10 p-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-foreground backdrop-blur-sm sm:text-base"
          >
            {vehicle.auctionDate}
          </Link>
        </div>
      </div>
    </article>
  );
}
