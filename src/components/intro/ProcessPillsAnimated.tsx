import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const steps = [
  { label: "select", className: "bg-flow-blue z-40" },
  { label: "transform", className: "bg-flow-green z-30" },
  { label: "review", className: "bg-flow-pink z-20" },
  { label: "publish", className: "bg-flow-orange z-10" },
] as const;

export function ProcessPillsAnimated() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="mt-8 flex max-w-[1400px] flex-nowrap items-start justify-start gap-0 sm:mt-10 sm:flex-wrap"
      aria-label="Workflow: select, transform, review, publish"
    >
      {steps.map((step, index) => (
        <motion.span
          key={step.label}
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={
            reduced
              ? { opacity: 1, scale: 1, top: 0 }
              : { opacity: 1, scale: 1, top: [0, -3, 0, 2, 0] }
          }
          transition={
            reduced
              ? { duration: 0.2 }
              : {
                  opacity: { duration: 0.28, delay: index * 0.08 },
                  scale: { duration: 0.28, delay: index * 0.08 },
                  top: {
                    duration: 3.2 + index * 0.35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.18,
                  },
                }
          }
          className={cn(
            "relative inline-flex shrink-0 rounded-full px-4 py-[9px] text-[14px] font-semibold uppercase tracking-wide text-white shadow-md sm:px-6 sm:py-2 sm:text-base",
            index > 0 && "-ml-2 sm:-ml-4",
            (index === 1 || index === 3) && "translate-y-1/2",
            step.className,
          )}
        >
          {step.label}
        </motion.span>
      ))}
    </div>
  );
}
