import { cn } from "@/lib/cn";

type Props = { children: React.ReactNode; className?: string };

export function VisuallyHidden({ children, className }: Props) {
  return <span className={cn("sr-only", className)}>{children}</span>;
}
