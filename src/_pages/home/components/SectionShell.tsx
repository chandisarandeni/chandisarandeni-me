import type { ReactNode } from "react";

import { Reveal } from "./Reveal";
import type { PortfolioSectionId } from "./section-nav";

type SectionShellProps = {
  id: PortfolioSectionId;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  // ============= Section Intro Presence =============
  // --------------------- Keep body full-width for sections that intentionally omit intro copy ------------------
  const hasIntroContent = Boolean(eyebrow || title || description);

  return (
    <section id={id} className={`scroll-mt-32 ${className ?? ""}`}>
      <div className="layout-frame">
        <div className="grid gap-6 lg:gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)] xl:items-start">
          {hasIntroContent ? (
            <Reveal className="xl:sticky xl:top-24">
              <header className="space-y-2">
                {eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {eyebrow}
                  </p>
                ) : null}
                <h2 className="text-3xl font-semibold tracking-tight text-app-fg sm:text-4xl">
                  {title}
                </h2>
                {description ? (
                  <p className="max-w-[36ch] text-base leading-7 text-muted-fg">
                    {description}
                  </p>
                ) : null}
              </header>
            </Reveal>
          ) : null}

          <div className={hasIntroContent ? "min-w-0" : "min-w-0 xl:col-span-2"}>{children}</div>
        </div>
      </div>
    </section>
  );
}

