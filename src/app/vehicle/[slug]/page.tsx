import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { verificationStandards } from "@/data/siteContent";
import {
  getAllVehicles,
  getArchivedVehicles,
  getVehicleBySlug,
  getSimilarVehicles,
  getSoldRecord,
  generateDescription,
  generateBidHistory,
} from "@/lib/vehicles";
import { PremiumBadge } from "@/components/ui/Badge";
import { StatBox } from "@/components/ui/StatBox";
import { OutlineButton, DarkButton } from "@/components/ui/Button";
import { BidActionButton } from "@/components/ui/BidActionButton";
import { Countdown } from "@/components/ui/Countdown";
import { CtaBand } from "@/components/ui/CtaBand";
import { Container } from "@/components/ui/Container";

export function generateStaticParams() {
  return [...getAllVehicles(), ...getArchivedVehicles()].map((v) => ({ slug: v.slug }));
}

export default function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  const description = generateDescription(vehicle);
  const bidHistory = generateBidHistory(vehicle);
  const similar = getSimilarVehicles(vehicle);
  const verification = verificationStandards.find((v) => v.category === vehicle.category);
  const soldRecord = getSoldRecord(vehicle);

  return (
    <>
      {/* Gallery hero */}
      <section className="relative flex h-[420px] items-end overflow-hidden px-5 pb-8 pt-[140px] sm:h-[520px] sm:px-10 lg:h-[620px] lg:px-20 lg:pb-12">
        <Image src={vehicle.image} alt={vehicle.name} fill priority className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/20 to-black/10" aria-hidden />
        <Container className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-fit rounded-full border border-gold bg-surface-dark/75 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-gold backdrop-blur-[6px]">
                {vehicle.category}
              </span>
              {soldRecord && (
                <span className="w-fit rounded-full bg-foreground/90 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-surface-alt">
                  Sold
                </span>
              )}
            </div>
            <h1 className="break-words font-heading text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl">
              {vehicle.name}
            </h1>
            <p className="font-body text-lg font-medium text-gold sm:text-xl">{vehicle.model}</p>
          </div>
          <PremiumBadge text={vehicle.badge} />
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Left column: specs, description, verification, bid history */}
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex w-full items-center gap-3 sm:gap-4">
              {vehicle.stats.map((stat) => (
                <StatBox key={stat.label} {...stat} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">Description</h2>
              <p className="font-body text-base leading-7 text-foreground/85 sm:text-lg">{description}</p>
              <p className="font-body text-sm text-foreground/50">{vehicle.specs}</p>
            </div>

            <div className="flex flex-col gap-4 rounded-[20px] border-2 border-gold bg-surface-alt p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">Verification Report</h2>
              <p className="font-body text-base text-foreground/85 sm:text-lg">
                {verification?.detail ?? "Expert-inspected: title, mileage, and condition confirmed before listing."}
              </p>
              <div className="flex flex-wrap gap-3">
                {["Title Verified", "Mileage Cross-Checked", "Condition Report on File"].map((tag) => (
                  <span key={tag} className="rounded-lg bg-gold/20 px-4 py-2 font-body text-sm font-bold text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">Bid Activity</h2>
              <div className="flex flex-col gap-3">
                {bidHistory.map((bid, i) => (
                  <div
                    key={bid.bidder + i}
                    className="flex items-center justify-between rounded-xl border border-foreground/25 bg-surface-alt px-5 py-4"
                  >
                    <span className="font-body font-semibold text-foreground">{bid.bidder}</span>
                    <span className="font-heading font-extrabold text-gold">{bid.amount}</span>
                    <span className="font-body text-sm text-foreground/50">{bid.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-[16px] border border-foreground/25 bg-surface-alt p-6">
              <h3 className="font-heading text-xl font-extrabold text-foreground">Seller</h3>
              <p className="font-body text-sm text-foreground/70">
                Verified seller · 4.8/5 rating · 6 completed sales on Motoprofits
              </p>
            </div>
          </div>

          {/* Right column: sticky bid module */}
          <div
            className={`flex w-full flex-col gap-6 rounded-[20px] border-2 bg-surface p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.5)] lg:sticky lg:top-28 lg:w-[380px] lg:shrink-0 ${
              soldRecord ? "border-foreground/25" : "border-accent-violet"
            }`}
          >
            {soldRecord ? (
              <span className="w-fit rounded-full border border-foreground/40 bg-surface-dark/75 px-4 py-2 font-heading text-lg font-black uppercase tracking-widest text-foreground/70">
                Auction Closed
              </span>
            ) : (
              vehicle.isLive &&
              vehicle.endsInSeconds !== undefined && (
                <Countdown
                  seconds={vehicle.endsInSeconds}
                  className="w-fit rounded-full border border-gold bg-surface-dark/75 px-4 py-2 font-heading text-lg font-black uppercase tracking-widest text-gold"
                />
              )
            )}
            <div className="flex flex-col gap-2">
              <span className="font-heading text-3xl font-extrabold text-gold drop-shadow-[0_0_10px_rgba(230,168,78,0.5)] sm:text-4xl">
                {soldRecord ? soldRecord.price : vehicle.priceValue}
              </span>
              <span className="font-body text-xs uppercase text-foreground/50">
                {soldRecord ? "Sold For" : vehicle.priceLabel}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/25 bg-surface-dark/75 p-4">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-lg font-extrabold text-white">
                  {soldRecord ? "Closed" : vehicle.secondaryValue}
                </span>
                <span className="font-body text-xs uppercase text-foreground/50">
                  {soldRecord ? "Status" : vehicle.secondaryLabel}
                </span>
              </div>
            </div>
            {soldRecord ? (
              <span className="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-lg bg-foreground/10 px-7 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-foreground/50 sm:text-base">
                Sold — Bidding Closed
              </span>
            ) : (
              <BidActionButton mode={vehicle.isLive ? "bid" : "watch"} />
            )}
            <OutlineButton href="/contact" className="w-full">
              Ask a Question
            </OutlineButton>
          </div>
        </Container>
      </section>

      {similar.length > 0 && (
        <section className="flex flex-col items-center gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
          <Container>
            <h2 className="mb-8 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              More in {vehicle.category}
            </h2>
            <div className="flex flex-wrap items-start gap-8">
              {similar.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vehicle/${v.slug}`}
                  className="flex w-full flex-col overflow-hidden rounded-[20px] border-2 border-accent-violet bg-surface shadow-[0_0_20px_0_rgba(0,0,0,0.5)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                >
                  <div className="relative h-56 w-full">
                    <Image src={v.image} alt={v.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading text-lg font-extrabold text-foreground">{v.name}</span>
                      <PremiumBadge text={v.badge} />
                    </div>
                    <span className="font-heading text-xl font-extrabold text-gold">{v.priceValue}</span>
                    <span className="font-body text-xs uppercase text-foreground/50">{v.priceLabel}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        eyebrow="Not Quite Ready to Bid?"
        title="Talk to Our Team First"
        paragraph="Questions about this vehicle's history, condition, or auction terms — we'll get you a straight answer."
      >
        <DarkButton href="/contact" className="w-full">
          Contact Support
        </DarkButton>
      </CtaBand>
    </>
  );
}
