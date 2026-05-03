import type { CaseStudy } from "@/content/types";
import { caseVideoSources } from "@/content/de";
import { cn } from "@/lib/cn";

type Props = {
  caseStudy: CaseStudy;
  onOpen: () => void;
};

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function CaseStudyCard({ caseStudy, onOpen }: Props) {
  const sources = caseVideoSources(caseStudy);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Video öffnen: ${caseStudy.indexLabel} — ${caseStudy.title}`}
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl bg-black text-left shadow-lg ring-1 ring-black/20 transition",
        "hover:ring-2 hover:ring-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
      )}
    >
      <div className="relative aspect-[8/9] w-full overflow-hidden">
        <video
          className="pointer-events-none h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>

        {/* Bottom gradient + description + play (always visible, no centered hover CTA) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/75 to-transparent px-4 pb-4 pt-24 sm:px-5 sm:pb-5 sm:pt-28">
          <div className="flex items-end gap-3 sm:gap-4">
            <span
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-lg ring-1 ring-white/40 backdrop-blur-md transition duration-200 sm:h-12 sm:w-12",
                "group-hover:bg-white/28 group-hover:ring-white/55",
              )}
            >
              <PlayGlyph className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <div className="min-w-0 flex-1 space-y-0.5 pb-0.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                {caseStudy.indexLabel}
              </p>
              <p className="text-sm font-bold leading-snug sm:text-base">{caseStudy.title}</p>
              {caseStudy.subtitle ? (
                <p className="text-xs leading-snug text-white/90 sm:text-sm">{caseStudy.subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
