import profileImage from "./assets/profile.jpg";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactCtaSection } from "./components/ContactCtaSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { PortfolioTopNav } from "./components/PortfolioTopNav";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import type { PortfolioNavLink } from "./components/section-nav";
import about from "./Seeds/about.json";
import achievements from "./Seeds/achievements.json";
import contact from "./Seeds/contact.json";
import education from "./Seeds/education.json";
import experience from "./Seeds/experience.json";
import hero from "./Seeds/hero.json";
import navLinks from "./Seeds/nav-links.json";
import projects from "./Seeds/projects.json";
import skills from "./Seeds/skills.json";

export function HomePage() {
  const resolvedNavLinks = navLinks as PortfolioNavLink[];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <PortfolioTopNav links={resolvedNavLinks} />

      {/* ============= Section Composition ============= */}
      <HeroSection
        data={hero}
        profileImageSrc={profileImage}
        profileImageAlt="Portrait of Chandisa Randeni"
      />
      <AboutSection data={about} />
      <SkillsSection data={skills} />
      <ProjectsSection data={projects} />
      <ExperienceSection data={experience} />
      <EducationSection data={education} />
      <AchievementsSection data={achievements} />
      <ContactCtaSection data={contact} />
    </div>
  );
}
