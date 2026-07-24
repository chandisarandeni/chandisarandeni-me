import { ContentCard } from "./ContentCard";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import type { PortfolioSectionId } from "./section-nav";

type EducationItem = {
  institution: string;
  qualification: string;
  location: string;
  period: string;
  details: string[];
};

type EducationSectionProps = {
  data: EducationItem[];
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
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <Reveal
            key={`${item.institution}-${item.qualification}-${item.period}`}
            delayMs={index * 70}
            variant="fade-up"
          >
            <ContentCard>
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
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

