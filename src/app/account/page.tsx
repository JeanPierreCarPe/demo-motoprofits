"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { getVehicleBySlug } from "@/lib/vehicles";
import {
  accountUser,
  accountActiveBids,
  accountWatchlist,
  accountListings,
  accountPayoutHistory,
  accountBidHistory,
  accountNotificationSettings,
} from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Countdown } from "@/components/ui/Countdown";
import { PremiumBadge } from "@/components/ui/Badge";
import { GoldButton } from "@/components/ui/Button";

export default function AccountPage() {
  const [tab, setTab] = useState<"Buying" | "Selling">("Buying");

  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-28 pt-[140px] sm:px-10 lg:px-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-6 rounded-[20px] border-2 border-gold bg-surface-alt p-6 sm:p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient font-heading text-2xl font-extrabold text-surface-alt">
            {accountUser.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="flex-1">
            <p className="font-heading text-xl font-extrabold text-foreground">{accountUser.name}</p>
            <p className="font-body text-sm text-foreground/60">
              Member since {accountUser.memberSince} {accountUser.verified && "· Verified"}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {accountUser.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-background px-4 py-2 text-center">
                <p className="font-heading font-extrabold text-gold">{stat.value}</p>
                <p className="font-body text-xs uppercase text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 self-center rounded-full border border-gold bg-surface-alt p-1.5">
          {(["Buying", "Selling"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-6 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider ${
                tab === t ? "bg-gold-gradient text-surface-alt" : "text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Buying" ? (
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Active Bids</h2>
              <div className="flex flex-col gap-3">
                {accountActiveBids.map(({ vehicle, status }) => (
                  <Link
                    key={vehicle.name}
                    href={`/vehicle/${slugify(vehicle.name)}`}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-foreground/20 bg-surface-alt p-4 transition-colors hover:border-gold"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-20 overflow-hidden rounded-lg">
                        <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-foreground">{vehicle.name}</p>
                        <p className="font-heading font-extrabold text-gold">${vehicle.currentBid}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Countdown seconds={vehicle.endsInSeconds} className="font-body text-sm text-foreground/60" />
                      <span
                        className={`rounded-full px-3 py-1 font-body text-xs font-bold uppercase ${
                          status === "Winning" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Watchlist</h2>
              <div className="flex flex-wrap gap-4">
                {accountWatchlist.map((v) => (
                  <Link
                    key={v.name}
                    href={`/vehicle/${slugify(v.name)}`}
                    className="flex w-64 items-center gap-3 rounded-xl border border-foreground/20 bg-surface-alt p-3 transition-colors hover:border-gold"
                  >
                    <div className="relative h-12 w-16 overflow-hidden rounded-lg">
                      <Image src={v.image} alt={v.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">{v.name}</p>
                      <p className="font-body text-xs text-foreground/50">{v.auctionDate}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Bid History</h2>
              <div className="flex flex-col gap-2">
                {accountBidHistory.map((b) => {
                  const match = getVehicleBySlug(slugify(b.vehicle));
                  return (
                    <Link
                      key={b.vehicle}
                      href={match ? `/vehicle/${match.slug}` : "/marketplace"}
                      className="flex items-center justify-between rounded-lg border border-foreground/10 bg-surface-alt px-5 py-3 transition-colors hover:border-gold"
                    >
                      <span className="font-body text-foreground">{b.vehicle}</span>
                      <PremiumBadge text={b.result} />
                      <span className="font-heading font-extrabold text-gold">{b.finalPrice}</span>
                      <span className="font-body text-xs text-foreground/50">{b.date}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Active Listings</h2>
              <div className="flex flex-col gap-3">
                {accountListings.map((l) => (
                  <div key={l.name} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-foreground/20 bg-surface-alt p-4">
                    <span className="font-body font-semibold text-foreground">{l.name}</span>
                    <span className="rounded-full bg-gold/20 px-3 py-1 font-body text-xs font-bold uppercase text-gold">
                      {l.status}
                    </span>
                    <span className="font-heading font-extrabold text-foreground">{l.currentBid}</span>
                    <span className="font-body text-xs text-foreground/50">
                      {l.daysLeft ? `${l.daysLeft} days left` : "—"}
                    </span>
                  </div>
                ))}
              </div>
              <GoldButton href="/sell" className="mt-4">
                List Another Vehicle
              </GoldButton>
            </div>

            <div>
              <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Payout History</h2>
              <div className="overflow-x-auto rounded-[16px] border border-foreground/20">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-foreground/20 bg-surface-alt text-sm uppercase text-foreground/50">
                      <th className="px-5 py-3">Vehicle</th>
                      <th className="px-5 py-3">Sale Price</th>
                      <th className="px-5 py-3">Fee</th>
                      <th className="px-5 py-3">Net Payout</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountPayoutHistory.map((p) => {
                      const match = getVehicleBySlug(slugify(p.vehicle));
                      return (
                        <tr key={p.vehicle} className="border-b border-foreground/10">
                          <td className="px-5 py-3 font-body text-foreground">
                            {match ? (
                              <Link href={`/vehicle/${match.slug}`} className="hover:text-gold">
                                {p.vehicle}
                              </Link>
                            ) : (
                              p.vehicle
                            )}
                          </td>
                          <td className="px-5 py-3 font-body text-foreground/70">{p.salePrice}</td>
                          <td className="px-5 py-3 font-body text-foreground/50">{p.fee}</td>
                          <td className="px-5 py-3 font-heading font-extrabold text-gold">{p.net}</td>
                          <td className="px-5 py-3 font-body text-sm text-green-400">{p.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-4 font-heading text-xl font-extrabold text-foreground">Notifications</h2>
          <div className="flex flex-wrap gap-4">
            {accountNotificationSettings.map((setting) => (
              <label key={setting} className="flex items-center gap-3 rounded-lg border border-foreground/20 bg-surface-alt px-4 py-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#e6a84e]" />
                <span className="font-body text-sm text-foreground">{setting}</span>
              </label>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
