import Image from "next/image";
import Link from "next/link";
import { LiveAuction } from "@/data/siteContent";
import { slugify } from "@/lib/slugify";
import { StatBox } from "./StatBox";
import { PremiumBadge } from "./Badge";
import { BidActionButton } from "./BidActionButton";
import { Countdown } from "./Countdown";

export function LiveAuctionCard({
  auction,
  priority = false,
}: {
  auction: LiveAuction;
  priority?: boolean;
}) {
  const href = `/vehicle/${slugify(auction.name)}`;
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[20px] border-2 border-accent-violet bg-surface shadow-[0_0_20px_0_rgba(0,0,0,0.5)] lg:w-[calc(50%-1rem)]">
      <Link href={href} className="relative flex h-64 items-start justify-between p-5 sm:h-80 lg:h-96">
        <Image
          src={auction.image}
          alt={auction.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 624px, 100vw"
          className="absolute inset-0 object-cover"
        />
        <span className="rounded-full bg-accent-violet/75 px-4 py-2 font-heading text-sm font-black uppercase tracking-widest text-foreground backdrop-blur-[6px] sm:text-xl">
          Live Now
        </span>
        <Countdown
          seconds={auction.endsInSeconds}
          className="rounded-full border border-gold bg-surface-dark/75 px-4 py-2 font-heading text-sm font-black uppercase tracking-widest text-gold backdrop-blur-[6px] sm:text-xl"
        />
      </Link>
      <div className="flex flex-col items-start gap-5 p-5 sm:gap-6">
        <div className="flex w-full flex-wrap items-center gap-3 sm:gap-5">
          <Link href={href} className="flex-1">
            <h3 className="font-heading text-xl font-extrabold text-foreground hover:text-gold sm:text-3xl">
              {auction.name}
            </h3>
          </Link>
          <PremiumBadge text={auction.badge} />
        </div>
        <div className="flex flex-col items-start gap-2 sm:gap-3">
          <p className="font-body text-lg font-medium text-gold sm:text-xl">{auction.model}</p>
          <p className="font-body text-sm font-medium text-foreground/50 sm:text-base">
            {auction.specs}
          </p>
        </div>
        <div className="flex w-full items-center gap-3 sm:gap-4">
          {auction.stats.map((stat) => (
            <StatBox key={stat.label} {...stat} />
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/25 bg-surface-dark/75 p-4 sm:p-5">
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <span className="font-heading text-xl font-extrabold text-gold drop-shadow-[0_0_10px_rgba(230,168,78,0.5)] sm:text-3xl">
              ${auction.currentBid}
            </span>
            <span className="font-body text-xs uppercase text-foreground/50 sm:text-sm">
              Current Bid
            </span>
          </div>
          <div className="flex flex-col items-end gap-2 sm:gap-3">
            <span className="font-heading text-lg font-extrabold text-white sm:text-xl">
              {auction.activeBidders}
            </span>
            <span className="font-body text-xs uppercase text-foreground/50 sm:text-sm">
              Active Bidders
            </span>
          </div>
        </div>
        <BidActionButton mode="bid" />
      </div>
    </article>
  );
}
