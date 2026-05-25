import { ContentCard } from "@/components/ui/content-card";
import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import type { PortfolioData } from "@/types/portfolio";

type EducationSectionProps = {
  data: PortfolioData["education"];
  id?: PortfolioSectionId;
};

export function EducationSection({
  data,
  id = "education",
}: EducationSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="Education"
      title="Education and Qualifications"
      description="Academic path supporting software engineering depth and practical execution."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {data.map((item) => (
          <ContentCard
            key={`${item.institution}-${item.qualification}-${item.period}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {item.period}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-app-fg">
              {item.qualification}
            </h3>
            <p className="mt-1 text-sm text-muted-fg">
              {item.institution} - {item.location}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-fg">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </ContentCard>
        ))}
      </div>
    </SectionShell>
  );
}
