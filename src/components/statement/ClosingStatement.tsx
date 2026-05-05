import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ClosingStatement() {
  return (
    <Section
      id="statement"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
      style={{
        backgroundImage: "url('/images/bg_hell.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0.1) 100%)",
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
