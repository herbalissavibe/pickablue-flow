import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  labelledBy?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  labelledBy,
  className,
  as: Tag = "section",
  ...props
}: Props) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-4 py-16 sm:py-20 lg:py-24", className)}
      {...props}
    />
  );
}
