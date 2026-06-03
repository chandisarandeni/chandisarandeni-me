import { ContentCard } from "./ContentCard";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import type { PortfolioSectionId } from "./section-nav";

type AchievementItem = {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  link?: string;
};

type AchievementsSectionProps = {
  data: AchievementItem[];
  id?: PortfolioSectionId;
};

export function AchievementsSection({
  data,
  id = "achievements",
}: AchievementsSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="Achievements"
      title="Recognition and Activities"
      description="Academic recognition and technical community contributions."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((item, index) => (
          <Reveal key={`${item.title}-${item.date}`} delayMs={index * 70} variant="fade-up">
            <ContentCard>
              <h3 className="text-lg font-semibold text-app-fg">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-fg">
                {[item.issuer, item.date].filter(Boolean).join(" - ")}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-fg">{item.summary}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-85"
                >
                  View details
                </a>
              ) : null}
            </ContentCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

