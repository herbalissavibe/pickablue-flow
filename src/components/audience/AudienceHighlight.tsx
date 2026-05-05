import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function AudienceHighlight() {
  const { title, lead, body, highlightPhrase } = site.audience;
  const parts = lead.split(highlightPhrase);

  return (
    <Section
      id="audience"
      labelledBy="audience-title"
      className="bg-brand-primary py-16 text-white sm:py-20 lg:py-24"
    >
      <Container>
        <h2 id="audience-title" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-6 max-w-[1400px] text-lg leading-relaxed text-white/95 sm:text-xl">
          {parts[0]}
          <strong className="font-bold text-white">{highlightPhrase}</strong>
          {parts[1] ?? ""}
        </p>
        <p className="mt-6 max-w-[1400px] text-base leading-relaxed text-white/90 sm:text-lg">
          {body}
        </p>
      </Container>
    </Section>
  );
}
