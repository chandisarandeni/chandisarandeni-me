import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import type { PortfolioSectionId } from "./section-nav";

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

type ExperienceSectionProps = {
  data: ExperienceItem[];
  id?: PortfolioSectionId;
};

export function ExperienceSection({
  data,
  id = "experience",
}: ExperienceSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="Experience"
      title="Professional Timeline"
      description="Hands-on roles across product delivery, internships, and technical mentoring."
    >
      <ol className="timeline-draw space-y-6 sm:space-y-7">
        {data.map((item, index) => (
          <li key={`${item.company}-${item.role}-${item.period}`} className="relative">
            <span
              className="absolute -left-[1.42rem] top-2 h-3 w-3 rounded-full border-2 border-surface bg-accent"
              aria-hidden
            />
            <Reveal delayMs={index * 90} variant="timeline-item">
              <article className="card-lift rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-app-fg">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-fg">
                  {item.company}
                  {item.location ? ` - ${item.location}` : ""}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-fg">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-fg">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <li
                      key={`${item.company}-${technology}`}
                      className="rounded-full border border-border-muted bg-surface-strong px-3 py-1 text-xs font-medium text-app-fg"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

