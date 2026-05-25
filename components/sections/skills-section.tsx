import { ContentCard } from "@/components/ui/content-card";
import type { PortfolioData, SkillCategory } from "@/types/portfolio";
import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";

type SkillsSectionProps = {
  data: PortfolioData["skills"];
  id?: PortfolioSectionId;
};

export function SkillsSection({ data, id = "skills" }: SkillsSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="Skills"
      title="Core Capabilities"
      description={data.summary}
    >
      {/* ============= Grid Rhythm ============= */}
      {/* --------------------- Keep a balanced 2x2 layout on tablet/desktop and expand to 4 columns only when wider space is available ------------------ */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.categories.map((group: SkillCategory) => (
          <ContentCard key={group.category} className="h-full">
            <h3 className="text-lg font-semibold text-app-fg">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-fg">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {skill}
                </li>
              ))}
            </ul>
          </ContentCard>
        ))}
      </div>
    </SectionShell>
  );
}
