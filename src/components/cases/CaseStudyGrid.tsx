import type { CaseStudy } from "@/content/types";
import { CaseStudyCard } from "./CaseStudyCard";

type Props = {
  cases: readonly CaseStudy[];
  onOpenCase: (c: CaseStudy) => void;
};

export function CaseStudyGrid({ cases, onOpenCase }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {cases.map((c) => (
        <CaseStudyCard key={c.id} caseStudy={c} onOpen={() => onOpenCase(c)} />
      ))}
    </div>
  );
}
