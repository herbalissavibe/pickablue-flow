import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ContentJourney() {
  return (
    <Section id="journey" labelledBy="journey-title" className="bg-white">
      <Container>
        <h2 id="journey-title" className="text-2xl font-bold text-brand-primary sm:text-3xl">
          {site.contentJourney.title}
        </h2>
        <p className="mt-6 max-w-[1400px] text-base leading-relaxed text-text-body sm:text-lg">
          {site.contentJourney.body}
        </p>
      </Container>
    </Section>
  );
}
