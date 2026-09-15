import { liveAuctions, liveAuctionsSection } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LiveAuctionCard } from "@/components/ui/LiveAuctionCard";
import { OutlineButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function LiveAuctions() {
  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:gap-20 lg:px-20 lg:py-24">
      <SectionHeading
        eyebrowLeft={liveAuctionsSection.eyebrowLeft}
        eyebrowRight={liveAuctionsSection.eyebrowRight}
        paragraph={liveAuctionsSection.paragraph}
      />
      <Container className="flex flex-wrap items-start gap-8">
        {liveAuctions.map((auction, index) => (
          <LiveAuctionCard key={auction.name} auction={auction} priority={index < 2} />
        ))}
      </Container>
      <OutlineButton href={liveAuctionsSection.ctaHref} className="w-full max-w-sm">
        {liveAuctionsSection.cta}
      </OutlineButton>
    </section>
  );
}
