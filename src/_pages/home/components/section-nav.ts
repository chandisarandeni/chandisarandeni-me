import navLinks from "../seeds/nav-links.json";

// ============= Section Anchor IDs =============
export type PortfolioSectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "github"
  | "experience"
  | "education"
  | "achievements"
  | "contact";

export type PortfolioNavLink = {
  id: PortfolioSectionId;
  label: string;
};

// ============= Section Registry =============
// --------------------- Shared source for nav and section composition order ------------------
export const DEFAULT_PORTFOLIO_NAV_LINKS = navLinks as PortfolioNavLink[];
export const PORTFOLIO_SECTION_IDS = DEFAULT_PORTFOLIO_NAV_LINKS.map(
  (link) => link.id
);

