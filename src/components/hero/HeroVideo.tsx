import { heroVideoSources } from "@/content/de";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const POSTER = "/images/hero-poster.svg";

export function HeroVideo() {
  const reduced = usePrefersReducedMotion();
  const sources = heroVideoSources();

  if (reduced) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER})` }}
        aria-hidden
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      playsInline
      loop
      poster={POSTER}
      aria-hidden
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
