export type CaseStudyId = "kuladig" | "regional" | "datacycle";

export type CaseStudy = {
  id: CaseStudyId;
  indexLabel: string;
  title: string;
  subtitle: string;
  /** WebM preferred, then MP4 — skeleton uses public demo URLs until real assets exist. */
  video: { webm?: string; mp4: string };
  poster?: string;
};

export type ReasonBlock = {
  number: 1 | 2 | 3;
  title: string;
  body: string;
};
