import type { CaseStudy, ReasonBlock } from "./types";

/**
 * Underwater / depth water — dev fallback when `/public/video/*` is missing.
 * Pexels (free license): https://www.pexels.com/video/underwater-footage-2556894/
 * For production, replace with self-hosted files in `public/video/`.
 */
const DEMO_WATER_DEEP_MP4 =
  "https://videos.pexels.com/video-files/2556894/2556894-hd_1920_1080_25fps.mp4";

export const site = {
  brand: "pickablue flow",
  heroTitle: "Ihre Inhalte können mehr – wir machen sie für Gäste erlebbar",
  heroSub1: "Kuratiert statt generiert.",
  heroSub2: "Neue Formate, volle Kontrolle",
  introLead: `Websites sind im Tourismus zentral, oft jedoch nur statische Informationsträger. Dabei bergen sie mehr Potenzial. pickablue flow baut auf dieser Grundlage auf: Es analysiert die Inhalte Ihrer Website, PDFs, Datenbanken oder externen Quellen und verwandelt sie automatisiert und kuratiert in interaktive Formate. So werden aus vorhandenen Informationen lebendige Erlebnisse – ohne zusätzlichen Content-Aufwand.`,
  contentJourney: {
    title: "Vom Content zum Erlebnis",
    body: `Der Weg von Inhalten zu Anwendungen ist einfach. Quellen wie URLs, Dokumente oder Datenbanken werden eingebunden, automatisch verarbeitet und in neue Formate übersetzt. In Minuten entstehen Hörspiele, Audioguides, Quizformate oder spielerische Interaktionen, die im pickablue System verfügbar sind.`,
  },
  letItFlow: {
    title: "Let it flow – so einfach geht's:",
    cardHint: "Screenvideo + Fullscreen-Modal",
  },
  appShowcase: {
    title: "Direkt erlebbar – ohne App",
    body: `Alle Inhalte integrieren sich nahtlos ins pickablue Ökosystem und sind sofort nutzbar. Gäste greifen über QR-Codes darauf zu und erleben die Inhalte direkt im mobilen Browser – ohne Download, ohne Hürde. Ein kurzer Scan wird zum unmittelbaren, digitalen Erlebnis vor Ort.`,
  },
  value: {
    title: "Mehr Wirkung bei weniger Aufwand",
    body: `pickablue flow bietet Mehrwert auf mehreren Ebenen: Inhalte gewinnen an Tiefe und Emotionalität, Gäste interagieren intensiver und bleiben länger. Der Bedarf, neue Inhalte aufwendig zu produzieren, entfällt, da bestehende Quellen intelligent weiterverwendet werden. Automatische Mehrsprachigkeit und vereinfachte Darstellung erreichen eine breitere Zielgruppe – ohne zusätzlichen redaktionellen Aufwand.`,
  },
  reasons: {
    title: "Drei Gründe, die überzeugen",
    items: [
      {
        number: 1,
        title: "Kontrolle und Qualität",
        body: "Trotz Automatisierung behalten Sie die Kontrolle über alle Inhalte. Jede generierte Anwendung kann geprüft, angepasst und freigegeben werden. So sichern Sie korrekte, konsistente und vertrauenswürdige Inhalte. KI unterstützt – die finale Entscheidung liegt bei Ihnen.",
      },
      {
        number: 2,
        title: "Transparente Kostenstruktur",
        body: "pickablue flow bietet klare und nachvollziehbare Nutzung. Sie behalten den Überblick über Ihren Verbrauch und planen Budgets verlässlich. Keine versteckten Kosten, sondern eine transparente Grundlage für den Einsatz.",
      },
      {
        number: 3,
        title: "Nahtlose Integration bestehender Systeme",
        body: "pickablue flow arbeitet mit Ihren bestehenden Systemen. Websites, Broschüren, Datenbanken oder externe Plattformen werden nicht ersetzt, sondern intelligent eingebunden und zu einem konsistenten Erlebnis zusammengeführt.",
      },
    ] satisfies ReasonBlock[],
  },
  audience: {
    title: "Für wen pickablue flow geeignet ist",
    lead:
      "Die Lösung richtet sich an Organisationen, die Inhalte effizienter nutzen und erlebbar machen möchten – insbesondere im Tourismus, in Städten und Regionen sowie in kulturellen Einrichtungen.",
    body: "Während viele KI-Anwendungen isolierte Inhalte erzeugen, verbindet pickablue flow bestehende Quellen mit direkter Ausspielung in ein funktionierendes Ökosystem. Das Ergebnis ist kein zusätzlicher Content-Baustein, sondern ein durchgängiges Erlebnis – integriert, kontrollierbar und sofort nutzbar.",
    highlightPhrase:
      "im Tourismus, in Städten und Regionen sowie in kulturellen Einrichtungen",
  },
  statement: {
    line1: "Ihre Website ist mehr als Information.",
    line2: "Mit pickablue flow wird sie zum Erlebnisraum.",
  },
  contact: {
    title: "Kontaktieren Sie uns",
    cta: "Kontakt",
    company: "pickablue GmbH",
    street: "Blumenstraße 2,",
    city: "65189 Wiesbaden",
    phoneLabel: "Telefon:",
    phone: "0611 408090",
  },
  footer: {
    links: [
      { label: "Datenschutz", href: "#" },
      { label: "Nutzungsbedingungen", href: "#" },
      { label: "Impressum", href: "#" },
    ] as const,
  },
  caseStudies: [
    {
      id: "kuladig",
      indexLabel: "#1 | KuLaDig",
      title: "Vom Website-Beitrag",
      subtitle: "zum Hörspiel",
      video: { webm: "/video/case-kuladig.webm", mp4: "/video/case-kuladig.mp4" },
    },
    {
      id: "regional",
      indexLabel: "#2 | regionalgeschichte.net",
      title: "Vom Website-Beitrag",
      subtitle: "zur kinderechten Version",
      video: { webm: "/video/case-regional.webm", mp4: "/video/case-regional.mp4" },
    },
    {
      id: "datacycle",
      indexLabel: "#3 | Datacycle",
      title: "lorem ipsum dolor sit amet",
      subtitle: "",
      video: { webm: "/video/case-datacycle.webm", mp4: "/video/case-datacycle.mp4" },
    },
  ] satisfies CaseStudy[],
} as const;

export type VideoSource = { src: string; type: string };

/** Local sources first; in dev append underwater demo so playback works without assets. */
export function caseVideoSources(caseItem: CaseStudy): VideoSource[] {
  const local: VideoSource[] = [];
  if (caseItem.video.webm) {
    local.push({ src: caseItem.video.webm, type: "video/webm" });
  }
  local.push({ src: caseItem.video.mp4, type: "video/mp4" });
  if (import.meta.env.PROD) {
    return local;
  }
  return [...local, { src: DEMO_WATER_DEEP_MP4, type: "video/mp4" }];
}

export function heroVideoSources(): VideoSource[] {
  const local: VideoSource[] = [
    { src: "/video/hero.webm", type: "video/webm" },
    { src: "/video/hero.mp4", type: "video/mp4" },
  ];
  if (import.meta.env.PROD) {
    return local;
  }
  return [...local, { src: DEMO_WATER_DEEP_MP4, type: "video/mp4" }];
}
