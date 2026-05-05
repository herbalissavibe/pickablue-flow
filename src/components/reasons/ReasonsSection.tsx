import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { ReasonRow } from "./ReasonRow";

export function ReasonsSection() {
  return (
    <Section id="reasons" labelledBy="reasons-title" className="bg-white pt-0 sm:pt-0 lg:pt-0">
      <Container>
        <h2
          id="reasons-title"
          className="max-w-[1400px] text-3xl font-light leading-tight text-brand-primary sm:text-4xl lg:text-5xl"
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
