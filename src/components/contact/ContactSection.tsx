import { site } from "@/content/de";
import { renderTrademark } from "@/lib/renderTrademark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function ContactSection() {
  const c = site.contact;
  return (
    <Section
      id="kontakt"
      labelledBy="contact-title"
      className="relative overflow-hidden bg-[#001a33] py-16 text-white sm:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/images/bg_footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(1, 51, 135, 0.8) 0%, rgba(1, 51, 135, 0.55) 55%, rgba(1, 51, 135, 0.35) 100%)",
        }}
      />
      <Container className="relative">
        <h2
          id="contact-title"
          className="max-w-[1400px] text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          {c.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button
            variant="primary"
            className="bg-brand-primary hover:bg-brand-heading-soft"
            onClick={() => {
              window.location.href = "https://www.pickablue.de/kontakt/";
            }}
          >
            {c.cta}
          </Button>
        </div>
        <address className="mt-12 not-italic text-white/90">
          <p className="font-semibold text-white">{renderTrademark(c.company)}</p>
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
