import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ClosingStatement() {
  return (
    <Section
      id="statement"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-heading-soft/15 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 100%, #009ee3 0, transparent 55%)",
        }}
        aria-hidden
      />
      <Container className="relative text-center">
        <p className="text-2xl font-light leading-snug text-brand-primary sm:text-4xl lg:text-5xl">
          {site.statement.line1}
        </p>
        <p className="mt-4 text-2xl font-semibold leading-snug text-text-body sm:text-3xl lg:text-4xl">
          {site.statement.line2}
        </p>
      </Container>
    </Section>
  );
}
