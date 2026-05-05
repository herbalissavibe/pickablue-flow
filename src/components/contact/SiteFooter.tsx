import { Fragment } from "react";
import { site } from "@/content/de";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="bg-legal-bar py-4 text-center text-xs text-white/90 sm:text-sm">
      <Container>
        <nav aria-label="Rechtliches" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {site.footer.links.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 ? (
                <span className="text-white/40" aria-hidden>
                  |
                </span>
              ) : null}
              <a href={link.href} className="hover:text-white hover:underline">
                {link.label}
              </a>
            </Fragment>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
