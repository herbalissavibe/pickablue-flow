import type { ReactNode } from "react";

const TRADEMARK_PATTERN = /pickablue®?/g;

function PickablueMark({ index }: { index: number }) {
  return (
    <span key={`pickablue-mark-${index}`} className="whitespace-nowrap">
      pickablue
      <sup className="relative -top-[0.82em] ml-0.5 text-[0.42em] font-semibold">®</sup>
    </span>
  );
}

export function renderTrademark(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let matchIndex = 0;
  let match = TRADEMARK_PATTERN.exec(text);

  while (match) {
    const start = match.index;
    const end = start + match[0].length;

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start));
    }

    nodes.push(<PickablueMark key={`pickablue-mark-wrap-${matchIndex}`} index={matchIndex} />);
    matchIndex += 1;
    lastIndex = end;
    match = TRADEMARK_PATTERN.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : text;
}
