import { FaArrowRight } from "react-icons/fa6";
import { ContentCard } from "@/components/ui/content-card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import type { PortfolioData, ProjectItem } from "@/types/portfolio";

type ProjectsSectionProps = {
  data: PortfolioData["projects"];
  id?: PortfolioSectionId;
};

function isExternalLink(href: string) {
  return /^https?:\/\//i.test(href);
}

function getProjectLinks(project: ProjectItem) {
  // ============= Link Normalization =============
  // --------------------- Optional links to display list ------------------
  if (!project.links) {
    return [];
  }

  const linkEntries = [
    { label: "Live", href: project.links.liveUrl },
    { label: "Repository", href: project.links.repositoryUrl },
    { label: "Case Study", href: project.links.caseStudyUrl },
  ];

  return linkEntries.filter((entry): entry is { label: string; href: string } =>
    Boolean(entry.href)
  );
}

function shouldShowDirectionalArrow(label: string) {
  // ============= Directional Cue Scope =============
  // --------------------- Limit arrows to navigation-heavy project actions ------------------
  return /^(live|repository)$/i.test(label);
}

export function ProjectsSection({ data, id = "projects" }: ProjectsSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="Projects"
      title="Selected Work"
      description="A focused selection of work across web platforms, workflow tools, and education-driven products."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {data.map((project, index) => {
          const projectLinks = getProjectLinks(project);
          // ============= Action Docking =============
          // --------------------- Keep links pinned despite variable card content ------------------
          const hasProjectLinks = projectLinks.length > 0;

          return (
            <Reveal key={project.name} delayMs={index * 80} variant="fade-up">
              <ContentCard className="flex h-full flex-col">
                <h3 className="text-xl font-semibold text-app-fg">{project.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.period} - {project.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-fg">{project.description}</p>
                <p className="mt-3 rounded-lg bg-surface-strong px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-app-fg">
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                  {project.highlights.map((highlight) => (
                    <li key={`${project.name}-${highlight}`} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((item) => (
                    <li
                      key={`${project.name}-${item}`}
                      className="rounded-full border border-border-muted bg-surface-strong px-3 py-1 text-xs font-medium text-app-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {hasProjectLinks ? (
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-3">
                      {projectLinks.map((link) => {
                        const external = isExternalLink(link.href);
                        const showDirectionalArrow = shouldShowDirectionalArrow(link.label);

                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer noopener" : undefined}
                            className="tap-target inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-wide text-app-fg transition-colors hover:bg-surface-strong"
                          >
                            <span>{link.label}</span>
                            {showDirectionalArrow ? (
                              <FaArrowRight className="h-3.5 w-3.5" aria-hidden />
                            ) : null}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </ContentCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
