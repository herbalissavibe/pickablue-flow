type Props = { number: 1 | 2 | 3 };

export function BubbleCircle({ number }: Props) {
  const bulbByNumber: Record<Props["number"], string> = {
    1: "/images/bulb_01.png",
    2: "/images/bulb_02.png",
    3: "/images/bulb_03.png",
  };
  const sizeClass = number === 1 ? "h-[150px] w-[150px]" : "h-[200px] w-[200px]";

  return (
    <div
      className={`relative flex ${sizeClass} shrink-0 items-center justify-center overflow-hidden rounded-full bg-center bg-cover text-6xl font-black text-white shadow-lg ring-4 ring-white/40 sm:text-7xl`}
      style={{ backgroundImage: `url(${bulbByNumber[number]})` }}
      aria-hidden
    >
      <span className="absolute inset-0 bg-black/25" />
      <span className="relative z-10">{number}</span>
    </div>
  );
}
