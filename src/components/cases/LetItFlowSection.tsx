import { useState } from "react";
import { site } from "@/content/de";
import type { CaseStudy } from "@/content/types";
import { CaseStudyGrid } from "./CaseStudyGrid";
import { CaseVideoModal } from "./CaseVideoModal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

export function LetItFlowSection() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <>
      <Section
        id="cases"
        className="bg-brand-primary-alt py-16 text-white sm:py-20 lg:py-24"
        labelledBy="cases-heading"
      >
        <Container>
          <h2 id="cases-heading" className="mb-10 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {site.letItFlow.title}
          </h2>
          <CaseStudyGrid
            cases={site.caseStudies}
            onOpenCase={(c) => {
              setActive(c);
            }}
          />
        </Container>
      </Section>
      <CaseVideoModal
        caseStudy={active}
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      />
    </>
  );
}
