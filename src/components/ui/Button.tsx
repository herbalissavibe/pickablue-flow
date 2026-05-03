import { cn } from "@/lib/cn";

type Variant = "primary" | "ghostOnDark";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", type = "button", ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-brand-primary text-white hover:bg-brand-primary-alt focus-visible:outline-white",
        variant === "ghostOnDark" &&
          "border border-white/40 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
        className,
      )}
      {...props}
    />
  );
}
