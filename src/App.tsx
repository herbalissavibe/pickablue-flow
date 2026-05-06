import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/hero/HeroSection";
import { IntroContent } from "@/components/intro/IntroContent";
import { ContentJourney } from "@/components/content-journey/ContentJourney";
import { AppShowcaseSection } from "@/components/app-showcase/AppShowcaseSection";
import { ValueProposition } from "@/components/value/ValueProposition";
import { ReasonsSection } from "@/components/reasons/ReasonsSection";
import { AudienceHighlight } from "@/components/audience/AudienceHighlight";
import { ClosingStatement } from "@/components/statement/ClosingStatement";
import { ContactSection } from "@/components/contact/ContactSection";
import { SiteFooter } from "@/components/contact/SiteFooter";

export default function App() {
  return (
    <PageShell>
      <HeroSection />
      <IntroContent />
      <ContentJourney />
      <AppShowcaseSection />
      <ValueProposition />
      <ReasonsSection />
      <AudienceHighlight />
      <ClosingStatement />
      <ContactSection />
      <SiteFooter />
    </PageShell>
  );
}
