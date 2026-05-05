import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = { number: 1 | 2 | 3 };

export function BubbleCircle({ number }: Props) {
  const reduced = usePrefersReducedMotion();
  const bulbByNumber: Record<Props["number"], string> = {
    1: "/images/bulb_01.png",
    2: "/images/bulb_02.png",
    3: "/images/bulb_03.png",
  };
  const sizeClass = number === 1 ? "h-[150px] w-[150px]" : "h-[200px] w-[200px]";
  const bubbleMotionByNumber: Record<
    Props["number"],
    { x: number[]; y: number[]; rotate: number[]; duration: number; delay: number }
  > = {
    1: { x: [0, 3, -2, 2, 0], y: [0, -4, 2, -3, 0], rotate: [0, 0.6, -0.5, 0.3, 0], duration: 7.2, delay: 0.1 },
    2: { x: [0, -2, 3, -2, 0], y: [0, 3, -4, 2, 0], rotate: [0, -0.5, 0.6, -0.4, 0], duration: 8.1, delay: 0.35 },
    3: { x: [0, 2, -3, 1, 0], y: [0, -3, 3, -2, 0], rotate: [0, 0.4, -0.6, 0.5, 0], duration: 7.7, delay: 0.2 },
  };
  const motionPreset = bubbleMotionByNumber[number];

  return (
    <motion.div
      initial={reduced ? false : { x: 0, y: 0, rotate: 0 }}
      animate={
        reduced
          ? { x: 0, y: 0, rotate: 0 }
          : { x: motionPreset.x, y: motionPreset.y, rotate: motionPreset.rotate }
      }
      transition={
        reduced
          ? { duration: 0.2 }
          : {
              duration: motionPreset.duration,
              delay: motionPreset.delay,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }
      }
      className={`relative flex ${sizeClass} shrink-0 items-center justify-center overflow-hidden rounded-full bg-center bg-cover text-6xl font-black text-white shadow-lg ring-4 ring-white/40 sm:text-7xl`}
      style={{ backgroundImage: `url(${bulbByNumber[number]})` }}
      aria-hidden
    >
      <span className="absolute inset-0 bg-black/25" />
      <span className="relative z-10">{number}</span>
    </motion.div>
  );
}
