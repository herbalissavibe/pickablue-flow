import { FlowWordmark } from "./FlowWordmark";
import { HeroVideo } from "./HeroVideo";
import { HeroWaveDivider } from "./HeroWaveDivider";

export function HeroSection() {
  return (
    <header className="relative isolate h-[800px] min-h-[800px] max-h-[800px] overflow-hidden bg-[#002b49]">
      <HeroVideo />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#001a33]/80 via-transparent to-[#001a33]/40"
        aria-hidden
      />
      <div className="relative z-10 flex h-[800px] min-h-[800px] flex-col px-5 pb-0 pt-8 sm:px-8">
        <div className="text-lg font-semibold tracking-tight text-white/95">pickablue</div>
        <div className="flex flex-1 flex-col items-center justify-center pb-16 pt-8 text-center">
          <FlowWordmark />
        </div>
      </div>
      <HeroWaveDivider />
    </header>
  );
}
