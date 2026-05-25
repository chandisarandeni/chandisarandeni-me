import { ContentCard } from "@/components/ui/content-card";
import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import type { PortfolioData } from "@/types/portfolio";

type AchievementsSectionProps = {
  data: PortfolioData["achievements"];
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
        {data.map((item) => (
          <ContentCard key={`${item.title}-${item.date}`}>
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
        ))}
      </div>
    </SectionShell>
  );
}
