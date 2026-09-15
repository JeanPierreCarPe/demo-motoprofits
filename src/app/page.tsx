import { Hero } from "@/components/sections/Hero";
import { LiveAuctions } from "@/components/sections/LiveAuctions";
import { WhyUs } from "@/components/sections/WhyUs";
import { PremiumCollection } from "@/components/sections/PremiumCollection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MarketIntelligence } from "@/components/sections/MarketIntelligence";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValueEstimator } from "@/components/sections/ValueEstimator";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveAuctions />
      <WhyUs />
      <PremiumCollection />
      <HowItWorks />
      <MarketIntelligence />
      <Testimonials />
      <ValueEstimator />
    </>
  );
}
