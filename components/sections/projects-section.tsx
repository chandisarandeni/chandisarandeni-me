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

                {projectLinks.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {projectLinks.map((link) => {
                      const external = isExternalLink(link.href);

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer noopener" : undefined}
                          className="tap-target inline-flex rounded-full border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-wide text-app-fg transition-colors hover:bg-surface-strong"
                        >
                          {link.label}
                        </a>
                      );
                    })}
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
