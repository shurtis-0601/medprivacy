import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { CTASection } from "@/components/CTASection";
import { DetectionMatrix } from "@/components/DetectionMatrix";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingCards } from "@/components/PricingCards";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductFeatureGrid } from "@/components/ProductFeatureGrid";
import { ProductHero } from "@/components/ProductHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WarningBar } from "@/components/WarningBar";

export default function Home() {
  return (
    <div id="medprivacy">
      <SiteHeader />
      <ProductHero />
      <ProblemSection />
      <ProductFeatureGrid />
      <HowItWorks />
      <DetectionMatrix />
      <CaseStudyBlock />
      <PricingCards />
      <WarningBar />
      <FAQAccordion />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
