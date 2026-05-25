import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioData } from "@/types/portfolio";
import type { PortfolioSectionId } from "@/components/ui/section-nav";

type AboutSectionProps = {
  data: PortfolioData["about"];
  id?: PortfolioSectionId;
};

export function AboutSection({ data, id = "about" }: AboutSectionProps) {
  return (
    <SectionShell
      id={id}
      eyebrow="About"
      title={data.title ?? "A Short Introduction"}
      description="The background and mindset behind how I design, build, and ship reliable products."
    >
      <div className="card-lift space-y-4 rounded-2xl p-5 leading-8 text-muted-fg sm:p-6">
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="mt-5 flex flex-wrap gap-2">
          {data.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border-muted bg-surface-strong px-3 py-1 text-xs font-semibold uppercase tracking-wide text-app-fg"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
