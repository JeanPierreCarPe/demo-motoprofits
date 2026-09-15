import { valueEstimatorSection } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/Button";

export function ValueEstimator() {
  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <h2 className="font-heading text-4xl font-extrabold uppercase text-gold drop-shadow-[0_0_20px_rgba(230,168,78,0.6)] sm:text-5xl lg:text-6xl">
          {valueEstimatorSection.eyebrowLeft}
        </h2>
        <h2 className="font-heading text-4xl font-extrabold uppercase text-foreground sm:text-5xl lg:text-6xl">
          {valueEstimatorSection.eyebrowRight}
        </h2>
      </div>
      <p className="max-w-3xl text-center font-body text-lg text-foreground sm:text-xl">
        {valueEstimatorSection.paragraph}
      </p>
      <div className="flex w-full max-w-[842px] flex-wrap items-start gap-6 rounded-[20px] bg-surface-alt p-5 sm:gap-8">
        {valueEstimatorSection.fields.map((field) =>
          field.label === "Vehicle Type" ? (
            <label key={field.label} className="flex min-w-72 flex-1 flex-col items-start gap-2.5">
              <span className="font-heading text-lg font-medium text-white sm:text-xl">
                {field.label}
              </span>
              <div className="relative w-full">
                <select
                  defaultValue=""
                  className="h-12 w-full appearance-none rounded-lg border-2 border-foreground/50 bg-[#131313] px-5 font-body text-lg text-foreground/50 focus:border-gold focus:outline-none sm:text-xl"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  <option value="sports-car">Sports Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="truck-suv">Truck &amp; SUV</option>
                  <option value="boat-marine">Boat &amp; Marine</option>
                  <option value="terrain">Terrain Conqueror</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-5 top-1/2 h-3 w-5 -translate-y-1/2 text-foreground"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 12L0 2.5L2.5 0L9.5 7L16.5 0L19 2.5L9.5 12Z" fill="currentColor" />
                </svg>
              </div>
            </label>
          ) : (
            <label key={field.label} className="flex min-w-72 flex-1 flex-col items-start gap-2.5">
              <span className="font-heading text-lg font-medium text-white sm:text-xl">
                {field.label}
              </span>
              <input
                type="text"
                placeholder={field.placeholder}
                className="h-12 w-full rounded-lg border-2 border-foreground/50 bg-[#131313] px-5 font-body text-lg text-foreground placeholder:text-foreground/50 focus:border-gold focus:outline-none sm:text-xl"
              />
            </label>
          )
        )}
        <GoldButton href="/sell" className="h-12 min-w-[280px] flex-1">
          {valueEstimatorSection.cta}
        </GoldButton>
      </div>
    </section>
  );
}
