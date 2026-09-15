"use client";

import { useState } from "react";

type BidActionButtonProps = {
  mode: "bid" | "watch";
};

export function BidActionButton({ mode }: BidActionButtonProps) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <span className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-green-500/50 bg-green-500/10 px-7 font-heading text-sm font-extrabold uppercase tracking-wider text-green-400 sm:text-base">
        {mode === "bid" ? "You're the Highest Bidder" : "Watching — We'll Notify You"}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setDone(true)}
      className="flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-gold-gradient px-7 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-surface-alt sm:text-base"
    >
      {mode === "bid" ? "Place Bid" : "Watch This Auction"}
    </button>
  );
}
