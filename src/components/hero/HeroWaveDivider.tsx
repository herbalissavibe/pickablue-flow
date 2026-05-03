/** Белая волна; прозрачность над кривой должна показывать слой видео героя (волна внутри hero). */
export function HeroWaveDivider() {
  return (
    <div className="pointer-events-none relative z-20 mt-auto w-full shrink-0 leading-none text-white">
      <svg
        className="block h-16 w-full sm:h-24 md:h-28"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg>
    </div>
  );
}
