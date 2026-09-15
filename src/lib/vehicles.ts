import {
  liveAuctions,
  premiumCollection,
  recentSales,
  soldVehicles,
  LiveAuction,
  CollectionVehicle,
  VehicleStat,
} from "@/data/siteContent";
import { slugify } from "@/lib/slugify";

export type UnifiedVehicle = {
  slug: string;
  name: string;
  image: string;
  badge: string;
  category: string;
  model: string;
  specs: string;
  stats: VehicleStat[];
  priceLabel: string;
  priceValue: string;
  secondaryLabel: string;
  secondaryValue: string;
  isLive: boolean;
  endsInSeconds?: number;
};

const liveAuctionCategories: Record<string, string> = {
  "Ford Mustang Fastback": "Sports Cars",
  "Porsche 911 GT3 RS": "Sports Cars",
  "Harley-Davidson FLH Electra Glide": "Motorcycles",
  "Range Rover Sport": "Trucks & SUVs",
};

function fromLiveAuction(auction: LiveAuction): UnifiedVehicle {
  return {
    slug: slugify(auction.name),
    name: auction.name,
    image: auction.image,
    badge: auction.badge,
    category: liveAuctionCategories[auction.name] ?? "Sports Cars",
    model: auction.model,
    specs: auction.specs,
    stats: auction.stats,
    priceLabel: "Current Bid",
    priceValue: `$${auction.currentBid}`,
    secondaryLabel: "Active Bidders",
    secondaryValue: auction.activeBidders,
    isLive: true,
    endsInSeconds: auction.endsInSeconds,
  };
}

function fromCollectionVehicle(vehicle: CollectionVehicle): UnifiedVehicle {
  return {
    slug: slugify(vehicle.name),
    name: vehicle.name,
    image: vehicle.image,
    badge: vehicle.badge,
    category: vehicle.category,
    model: vehicle.model,
    specs: vehicle.specs,
    stats: vehicle.stats,
    priceLabel: "Starting Bid",
    priceValue: `$${vehicle.startingBid}`,
    secondaryLabel: "Auction Date",
    secondaryValue: vehicle.auctionDate,
    isLive: false,
  };
}

export function getAllVehicles(): UnifiedVehicle[] {
  const live = liveAuctions.map(fromLiveAuction);
  const collection = premiumCollection.map(fromCollectionVehicle);
  const seen = new Set<string>();
  return [...live, ...collection].filter((v) => {
    if (seen.has(v.slug)) return false;
    seen.add(v.slug);
    return true;
  });
}

export function getArchivedVehicles(): UnifiedVehicle[] {
  return soldVehicles.map(fromCollectionVehicle);
}

export function getVehicleBySlug(slug: string): UnifiedVehicle | undefined {
  return (
    getAllVehicles().find((v) => v.slug === slug) ??
    getArchivedVehicles().find((v) => v.slug === slug)
  );
}

export function getSoldRecord(vehicle: UnifiedVehicle) {
  return recentSales.find((sale) => slugify(sale.name) === vehicle.slug);
}

export function getSimilarVehicles(vehicle: UnifiedVehicle, limit = 3): UnifiedVehicle[] {
  return getAllVehicles()
    .filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug)
    .slice(0, limit);
}

export function generateDescription(vehicle: UnifiedVehicle): string {
  const conditionStat = vehicle.stats.find((s) => s.label === "Condition");
  const condition = conditionStat?.value ?? "Verified";
  return `This ${vehicle.model.replace(/^Model\s*/, "")} ${vehicle.name} presents in ${condition.toLowerCase()} condition, powered by ${vehicle.specs.toLowerCase()}. Full ownership history and service records are on file, and the vehicle passed Motoprofits' expert inspection before this listing went live — condition, mileage, and title status all confirmed ahead of your first bid.`;
}

export function generateBidHistory(vehicle: UnifiedVehicle) {
  const top = Number(vehicle.priceValue.replace(/[^0-9]/g, "")) || 10000;
  const steps = 5;
  const history = [];
  let current = top;
  for (let i = 0; i < steps; i++) {
    history.push({
      amount: `$${current.toLocaleString("en-US")}`,
      bidder: `Bidder #${(1000 + (i * 37) % 899).toString().slice(-3)}`,
      time: i === 0 ? "Just now" : `${i * 4}h ago`,
    });
    current = Math.round((current * 0.94) / 100) * 100;
  }
  return history;
}
