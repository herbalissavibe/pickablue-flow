import type { ReasonBlock } from "@/content/types";
import { renderTrademark } from "@/lib/renderTrademark";
import { BubbleCircle } from "./BubbleCircle";

type Props = { item: ReasonBlock };

export function ReasonRow({ item }: Props) {
  const groupIndentClass =
    item.number === 2 ? "ml-[100px]" : item.number === 3 ? "ml-[20px]" : "";

  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 ${groupIndentClass}`}>
      <BubbleCircle number={item.number} />
      <div>
        <h3 className="text-lg font-bold text-brand-primary sm:text-xl">{item.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-text-body">{renderTrademark(item.body)}</p>
      </div>
    </div>
  );
}
