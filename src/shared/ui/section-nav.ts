// ============= Section Anchor IDs =============
export type PortfolioSectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
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
export const PORTFOLIO_SECTION_IDS: PortfolioSectionId[] = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "achievements",
  "contact",
];

export const DEFAULT_PORTFOLIO_NAV_LINKS: PortfolioNavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

