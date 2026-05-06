import { HeroVideo } from "./HeroVideo";
import { HeroWaveDivider } from "./HeroWaveDivider";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <header className="relative isolate w-full">
      <div className="relative flex h-[560px] min-h-[560px] max-h-[560px] flex-col overflow-hidden bg-[#002b49] md:h-[640px] md:min-h-[640px] md:max-h-[640px] lg:h-[800px] lg:min-h-[800px] lg:max-h-[800px]">
        <HeroVideo />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#001a33]/80 via-transparent to-[#001a33]/40"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col pb-0 pt-[50px]">
          <Container>
            <img
              src="/images/pickablue_rgb_neg.svg"
              alt="pickablue Logo"
              className="h-auto w-[min(42vw,220px)] self-start"
            />
          </Container>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
          <Container className="flex">
            <img
              src="/images/flow-logo.svg"
              alt="FLOW Logo"
              className="h-auto w-[min(62vw,686px)] self-start opacity-95"
            />
          </Container>
        </div>
        {/* Внизу hero: волна внутри того же блока — прозрачность над кривой = видео, без лишней тёмной полосы */}
        <HeroWaveDivider />
      </div>
    </header>
  );
}
