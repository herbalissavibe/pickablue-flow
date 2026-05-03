import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ValueProposition() {
  return (
    <Section id="value" labelledBy="value-title" className="bg-white">
      <Container>
        <h2 id="value-title" className="text-2xl font-bold text-brand-primary sm:text-3xl">
          {site.value.title}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-body sm:text-lg">
          {site.value.body}
        </p>
      </Container>
    </Section>
  );
}
