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
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 id="app-title" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            {site.appShowcase.title}
          </h2>
          <p className="mt-6 max-w-[1400px] text-base leading-relaxed text-white/95 sm:text-lg">
            {site.appShowcase.body}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative aspect-[9/19] w-[min(100%,280px)] rounded-[2.5rem] border-8 border-black/40 bg-black/30 p-2 shadow-2xl ring-1 ring-white/20"
            aria-hidden
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-neutral-900">
              <div className="relative aspect-video bg-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center text-white/60">
                  <span className="rounded-full border-2 border-white/50 px-3 py-1 text-xs uppercase tracking-wider">
                    Video
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-2 bg-white p-4 text-neutral-900">
                <p className="text-xs font-bold uppercase tracking-wide text-[#c41e3a]">
                  Platzhalter UI
                </p>
                <p className="text-sm font-semibold">ROMER &amp; LIMES</p>
                <p className="text-xs text-neutral-600">Mockup — später echtes Screendesign.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
