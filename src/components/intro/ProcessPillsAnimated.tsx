import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const steps = [
  { label: "select", className: "bg-flow-blue z-40" },
  { label: "transform", className: "bg-flow-green z-30" },
  { label: "review", className: "bg-flow-pink z-20" },
  { label: "publish", className: "bg-flow-orange z-10" },
] as const;

const containerReduced = {
  hidden: {},
  show: {},
};

const containerMotion = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemReduced = {
  hidden: { opacity: 1, scale: 1 },
  show: { opacity: 1, scale: 1 },
};

/** No `y` here so Tailwind `translate-y-1/2` on items 2 & 4 is not overridden by Motion. */
const itemMotion = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

export function ProcessPillsAnimated() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -8% 0px" });
  const reduced = usePrefersReducedMotion();

  const c = reduced ? containerReduced : containerMotion;
  const i = reduced ? itemReduced : itemMotion;
  const initial = reduced ? "show" : "hidden";
  const animate = reduced || inView ? "show" : "hidden";

  return (
    <motion.div
      ref={ref}
      className="mt-8 flex max-w-3xl flex-row flex-wrap items-start justify-start gap-0 sm:mt-10"
      variants={c}
      initial={initial}
      animate={animate}
      aria-label="Workflow: select, transform, review, publish"
    >
      {steps.map((step, index) => (
        <motion.span
          key={step.label}
          variants={i}
          className={cn(
            "relative inline-flex shrink-0 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md sm:px-6 sm:text-base",
            index > 0 && "-ml-3 sm:-ml-4",
            (index === 1 || index === 3) && "translate-y-1/2",
            step.className,
          )}
        >
          {step.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
