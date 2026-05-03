import { site } from "@/content/de";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ContactSection() {
  const c = site.contact;
  return (
    <Section
      id="kontakt"
      labelledBy="contact-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#003366] to-[#001a33] py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, #009ee3 0, transparent 50%), radial-gradient(circle at 80% 60%, #00a3c1 0, transparent 45%)",
        }}
      />
      <Container className="relative">
        <h2 id="contact-title" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          {c.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button variant="primary" className="bg-brand-primary hover:bg-brand-heading-soft">
            {c.cta}
          </Button>
        </div>
        <address className="mt-12 not-italic text-white/90">
          <p className="font-semibold text-white">{c.company}</p>
          <p className="mt-2">{c.street}</p>
          <p>{c.city}</p>
          <p className="mt-2">
            {c.phoneLabel} <a className="underline hover:text-white" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
          </p>
        </address>
      </Container>
    </Section>
  );
}
