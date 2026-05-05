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
          d="M0,58L60,68C120,78,240,98,360,92C480,86,600,54,720,56C840,58,960,94,1080,92C1200,90,1320,50,1380,30L1440,10L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        />
      </svg>
    </div>
  );
}
