import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { ReasonRow } from "./ReasonRow";

export function ReasonsSection() {
  return (
    <Section id="reasons" labelledBy="reasons-title" className="bg-white">
      <Container>
        <h2
          id="reasons-title"
          className="text-2xl font-bold text-brand-heading-soft sm:text-3xl"
        >
          {site.reasons.title}
        </h2>
        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16">
          {site.reasons.items.map((item) => (
            <ReasonRow key={item.number} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
