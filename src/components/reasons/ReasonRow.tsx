import type { ReasonBlock } from "@/content/types";
import { BubbleCircle } from "./BubbleCircle";

type Props = { item: ReasonBlock };

export function ReasonRow({ item }: Props) {
  return (
    <div className="flex gap-6 sm:gap-8">
      <BubbleCircle number={item.number} />
      <div>
        <h3 className="text-lg font-bold text-brand-primary sm:text-xl">{item.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-text-body">{item.body}</p>
      </div>
    </div>
  );
}
