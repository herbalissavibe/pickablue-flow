/** Белая волна; прозрачность над кривой должна показывать слой видео героя (волна внутри hero). */
export function HeroWaveDivider() {
  return (
    <div className="pointer-events-none relative z-20 mt-auto w-full shrink-0 leading-none text-white">
      <svg
        className="block h-12 w-full sm:h-16 md:h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,120C160,28,360,0,560,16C760,32,880,88,1080,98C1240,106,1340,86,1440,26L1440,120L0,120Z"
        />
      </svg>
    </div>
  );
}
