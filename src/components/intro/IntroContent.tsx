import { site } from "@/content/de";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { ProcessPillsAnimated } from "./ProcessPillsAnimated";

const headlineClass =
  "max-w-[1400px] text-3xl font-light leading-tight sm:text-4xl lg:text-5xl";

export function IntroContent() {
  return (
    <Section id="intro" labelledBy="intro-brand" className="bg-white pb-8 pt-4 sm:pb-12 sm:pt-6">
      <Container>
        <p id="intro-brand" className="text-xl font-semibold text-brand-primary sm:text-2xl">
          {site.brand}
        </p>
        <h1 className={cn(headlineClass, "mt-4 whitespace-pre-line text-brand-primary")}>
          {site.heroTitle}
        </h1>
        <p className={cn(headlineClass, "mt-6 text-neutral-600")}>
          <span className="block">{site.heroSub1}</span>
          <span className="block">{site.heroSub2}</span>
        </p>
        <p className="mt-8 max-w-[1400px] text-base leading-relaxed text-text-body sm:text-lg">
          {site.introLead}
        </p>
        <ProcessPillsAnimated />
      </Container>
    </Section>
  );
}
