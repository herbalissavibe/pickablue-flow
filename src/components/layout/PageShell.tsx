import type { ReactNode } from "react";

type Props = { children: ReactNode };

export function PageShell({ children }: Props) {
  return (
    <div className="min-h-dvh bg-white text-text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-primary focus:shadow-lg"
      >
        Zum Inhalt springen
      </a>
      <main id="main">{children}</main>
    </div>
  );
}
