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
      className={`portfolio-nav sticky top-2 z-40 rounded-2xl border border-border-muted shadow-sm ${className ?? ""}`}
    >
      <div className="content-gutter mx-auto w-full max-w-6xl py-3 sm:py-3.5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <ul className="nav-scroll order-2 flex snap-x snap-mandatory items-center gap-1.5 overflow-x-auto pb-1 md:order-1 md:pb-0">
            {navLinks.map((link) => (
              <li key={link.id} className="shrink-0 snap-start">
                <a
                  href={`#${link.id}`}
                  className="nav-underline tap-target inline-flex items-center rounded-full border border-transparent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-fg transition-colors hover:border-border-muted hover:bg-surface-strong hover:text-app-fg sm:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="order-1 flex justify-end md:order-2 md:shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
