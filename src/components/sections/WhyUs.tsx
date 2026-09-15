import { whyUsCards, whyUsSection } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundSection } from "@/components/ui/BackgroundSection";
import { IconFeatureCard } from "@/components/ui/IconFeatureCard";
import { Container } from "@/components/ui/Container";

export function WhyUs() {
  return (
    <BackgroundSection backgroundImage="/images/harley-davidson-flh.webp">
      <SectionHeading
        eyebrowLeft={whyUsSection.eyebrowLeft}
        eyebrowRight={whyUsSection.eyebrowRight}
        paragraph={whyUsSection.paragraph}
      />
      <Container className="flex flex-wrap items-start gap-8">
        {whyUsCards.map((card) => (
          <IconFeatureCard key={card.title} {...card} />
        ))}
      </Container>
    </BackgroundSection>
  );
}
