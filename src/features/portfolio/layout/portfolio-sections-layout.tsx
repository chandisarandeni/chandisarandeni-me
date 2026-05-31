import {
  DEFAULT_PORTFOLIO_NAV_LINKS,
  type PortfolioNavLink,
} from "@/src/shared/ui/section-nav";
import type { PortfolioData } from "@/src/features/portfolio/types/portfolio";

import { AboutSection } from "@/src/features/portfolio/sections/about-section";
import { AchievementsSection } from "@/src/features/portfolio/sections/achievements-section";
import { ContactCtaSection } from "@/src/features/portfolio/sections/contact-cta-section";
import { EducationSection } from "@/src/features/portfolio/sections/education-section";
import { ExperienceSection } from "@/src/features/portfolio/sections/experience-section";
import { HeroSection } from "@/src/features/portfolio/sections/hero-section";
import { PortfolioTopNav } from "@/src/features/portfolio/layout/portfolio-top-nav";
import { ProjectsSection } from "@/src/features/portfolio/sections/projects-section";
import { SkillsSection } from "@/src/features/portfolio/sections/skills-section";

type PortfolioSectionsLayoutProps = {
  data: PortfolioData;
  showTopNav?: boolean;
  navLinks?: PortfolioNavLink[];
  className?: string;
  heroProfileImageSrc?: string;
  heroProfileImageAlt?: string;
};

export function PortfolioSectionsLayout({
  data,
  showTopNav = true,
  navLinks,
  className,
  heroProfileImageSrc,
  heroProfileImageAlt,
}: PortfolioSectionsLayoutProps) {
  // ============= Navigation Priority =============
  // --------------------- Source Order ------------------
  const resolvedNavLinks = navLinks ?? DEFAULT_PORTFOLIO_NAV_LINKS;
  const layoutClassName = ["space-y-8 sm:space-y-10 lg:space-y-12", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={layoutClassName}>
      {showTopNav && <PortfolioTopNav links={resolvedNavLinks} />}

      {/* ============= Section Composition ============= */}
      <HeroSection
        data={data.hero}
        profileImageSrc={heroProfileImageSrc}
        profileImageAlt={heroProfileImageAlt}
      />
      <AboutSection data={data.about} />
      <SkillsSection data={data.skills} />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />
      <EducationSection data={data.education} />
      <AchievementsSection data={data.achievements} />
      <ContactCtaSection data={data.contact} />
    </div>
  );
}


