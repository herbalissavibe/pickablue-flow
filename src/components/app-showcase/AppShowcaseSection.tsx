import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function AppShowcaseSection() {
  return (
    <Section
      id="app"
      labelledBy="app-title"
      className="relative min-h-dvh overflow-hidden bg-[#002b49] py-16 text-white sm:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/images/app-showcase-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0, transparent 45%), radial-gradient(circle at 80% 20%, white 0, transparent 40%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(33, 131, 184) 0%, rgba(33, 131, 184, 0.45) 55%, rgba(33, 131, 184, 0.2) 100%)",
        }}
        aria-hidden
      />
      <Container className="relative flex flex-col gap-10">
        <div>
          <h2 id="app-title" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            {site.appShowcase.title}
          </h2>
          <p className="mt-6 max-w-[1400px] text-base leading-relaxed text-white/95 sm:text-lg">
            {site.appShowcase.body}
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/app-showcase-phone.svg"
            alt="App-Ansicht auf Smartphone"
            className="h-auto w-full max-w-[680px]"
          />
        </div>
      </Container>
    </Section>
  );
}
