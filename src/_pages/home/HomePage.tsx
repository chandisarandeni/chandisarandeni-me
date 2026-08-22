import profileImage from "./assets/profile.jpg";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactCtaSection } from "./components/ContactCtaSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { FeaturedContributionsSection } from "./components/FeaturedContributionsSection";
import { GithubGraphSection } from "./components/GithubGraphSection";
import { PortfolioTopNav } from "./components/PortfolioTopNav";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import type { PortfolioNavLink } from "./components/section-nav";
import about from "./seeds/about.json";
import achievements from "./seeds/achievements";
import contact from "./seeds/contact.json";
import education from "./seeds/education.json";
import experience from "./seeds/experience.json";
import hero from "./seeds/hero.json";
import navLinks from "./seeds/nav-links.json";
import projects from "./seeds/projects.json";
import skills from "./seeds/skills.json";

export function HomePage() {
  const resolvedNavLinks = navLinks as PortfolioNavLink[];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 pb-12 sm:pb-16">
      <PortfolioTopNav links={resolvedNavLinks} />

      {/* ============= Section Composition ============= */}
      <HeroSection
        data={hero}
        profileImageSrc={profileImage}
        profileImageAlt="Portrait of Chandisa Randeni"
      />
      <FeaturedContributionsSection data={achievements} />
      <AboutSection data={about} />
      <SkillsSection data={skills} />
      <ProjectsSection data={projects} />
      <GithubGraphSection />
      <ExperienceSection data={experience} />
      <EducationSection data={education} />
      <AchievementsSection data={achievements} />
      <ContactCtaSection data={contact} />
    </div>
  );
}
