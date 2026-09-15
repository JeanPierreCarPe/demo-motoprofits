import { howItWorksSection, howItWorksSteps } from "@/data/siteContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/Button";
import { BackgroundSection } from "@/components/ui/BackgroundSection";
import { StepCard } from "@/components/ui/StepCard";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  return (
    <BackgroundSection backgroundImage={howItWorksSection.backgroundImage}>
      <SectionHeading
        eyebrowLeft={howItWorksSection.eyebrowLeft}
        eyebrowRight={howItWorksSection.eyebrowRight}
        paragraph={howItWorksSection.paragraph}
      />
      <Container className="flex flex-wrap items-stretch justify-center gap-8">
        {howItWorksSteps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </Container>
      <GoldButton href={howItWorksSection.ctaHref} className="w-full max-w-sm">
        {howItWorksSection.cta}
      </GoldButton>
    </BackgroundSection>
  );
}
