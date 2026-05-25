"use client";

import { useEffect, useId, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuPanelId = useId();

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const syncMenuWithDesktopViewport = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    // ============= Mobile Disclosure Sync =============
    // --------------------- Close the mobile menu whenever viewport crosses into desktop layout ------------------
    desktopMediaQuery.addEventListener("change", syncMenuWithDesktopViewport);

    return () => {
      desktopMediaQuery.removeEventListener("change", syncMenuWithDesktopViewport);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => {
      window.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      aria-label="Portfolio sections"
      className={`portfolio-nav motion-nav-enter sticky top-2 z-40 rounded-2xl border border-border-muted shadow-sm ${className ?? ""}`}
    >
      <div className="content-gutter mx-auto w-full max-w-6xl py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuPanelId}
            aria-label={isMobileMenuOpen ? "Close section menu" : "Open section menu"}
            className="mobile-nav-toggle tap-target inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <FaXmark className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <FaBars className="h-3.5 w-3.5" aria-hidden />
            )}
          </button>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        <div
          id={mobileMenuPanelId}
          className="mobile-nav-panel mt-3 md:hidden"
          hidden={!isMobileMenuOpen}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={`mobile-${link.id}`}>
                <a
                  href={`#${link.id}`}
                  className="nav-chip nav-underline tap-target inline-flex w-full items-center rounded-xl px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-fg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-chip-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between md:gap-3">
          {/* ============= Desktop Width Guard ============= */}
          {/* --------------------- Keep horizontal nav scrolling inside its own width ------------------ */}
          <ul className="nav-scroll flex w-full max-w-full snap-x snap-mandatory items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {navLinks.map((link) => (
              <li key={link.id} className="shrink-0 snap-start">
                <a
                  href={`#${link.id}`}
                  // ============= Interaction Styling Strategy =============
                  // --------------------- Keep hover animation centralized in globals.css for consistent timing and layering ------------------
                  className="nav-chip nav-underline tap-target inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-fg sm:text-xs"
                >
                  <span className="nav-chip-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
