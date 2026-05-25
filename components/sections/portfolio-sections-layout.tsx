import {
  DEFAULT_PORTFOLIO_NAV_LINKS,
  type PortfolioNavLink,
} from "@/components/ui/section-nav";
import type { PortfolioData } from "@/types/portfolio";

import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioTopNav } from "@/components/sections/portfolio-top-nav";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

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
