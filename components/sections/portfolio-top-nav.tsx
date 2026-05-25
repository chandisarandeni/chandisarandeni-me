import {
  DEFAULT_PORTFOLIO_NAV_LINKS,
  type PortfolioNavLink,
} from "@/components/ui/section-nav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type PortfolioTopNavProps = {
  links?: PortfolioNavLink[];
  className?: string;
};

export function PortfolioTopNav({ links, className }: PortfolioTopNavProps) {
  // ============= Navigation Source =============
  // --------------------- Fallbacks ------------------
  const navLinks =
    links && links.length > 0 ? links : DEFAULT_PORTFOLIO_NAV_LINKS;

  return (
    <nav
      aria-label="Portfolio sections"
      className={`portfolio-nav sticky top-0 z-40 mb-4 rounded-2xl border border-border-muted sm:mb-5 ${className ?? ""}`}
    >
      <div className="content-gutter mx-auto w-full max-w-6xl">
        {/* ============= Mobile Visibility ============= */}
        {/* --------------------- Wrap nav links so mobile users can see all sections without horizontal scrolling ------------------ */}
        <div className="flex items-center justify-end pt-2.5 sm:pt-3">
          <ThemeToggle />
        </div>
        <ul className="flex flex-wrap items-center gap-1.5 pb-2.5 pt-2 sm:gap-2 sm:pb-3 sm:pt-2.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="nav-underline tap-target inline-flex rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-fg transition-colors hover:bg-surface-strong hover:text-app-fg sm:text-xs"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
