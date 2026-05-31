import { SectionShell } from "@/src/shared/ui/section-shell";
import { Reveal } from "@/src/shared/ui/reveal";
import type { PortfolioData } from "@/src/features/portfolio/types/portfolio";
import type { PortfolioSectionId } from "@/src/shared/ui/section-nav";

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
        {data.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delayMs={index * 80} variant="fade-up">
            <p>{paragraph}</p>
          </Reveal>
        ))}
        <ul className="mt-5 flex flex-wrap gap-2">
          {data.focusAreas.map((area, index) => (
            <li key={area}>
              <Reveal
                delayMs={220 + index * 50}
                variant="scale-in"
                distancePx={10}
              >
                <span className="inline-flex rounded-full border border-border-muted bg-surface-strong px-3 py-1 text-xs font-semibold uppercase tracking-wide text-app-fg">
                  {area}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

