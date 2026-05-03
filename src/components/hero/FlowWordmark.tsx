import { cn } from "@/lib/cn";

const letters = [
  { ch: "F", className: "text-flow-blue" },
  { ch: "L", className: "text-flow-green" },
  { ch: "O", className: "text-flow-pink" },
  { ch: "W", className: "text-flow-orange" },
] as const;

export function FlowWordmark() {
  return (
    <div
      className="relative flex select-none justify-center gap-1 sm:gap-2 md:gap-3"
      aria-hidden
    >
      {letters.map(({ ch, className }) => (
        <span
          key={ch}
          className={cn(
            "font-black tracking-tighter mix-blend-multiply",
            "text-[clamp(3.5rem,14vw,10rem)] leading-none",
            className,
          )}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
