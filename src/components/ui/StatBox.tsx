import Image from "next/image";
import { VehicleStat } from "@/data/siteContent";

export function StatBox({ icon, value, label }: VehicleStat) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 p-2.5 sm:gap-3">
      <Image src={icon} alt="" width={24} height={24} className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="font-heading text-sm font-extrabold text-foreground sm:text-base">
        {value}
      </span>
      <span className="font-body text-xs uppercase text-foreground/50 sm:text-sm">{label}</span>
    </div>
  );
}
