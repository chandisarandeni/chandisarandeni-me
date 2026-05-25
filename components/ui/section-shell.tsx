import type { ReactNode } from "react";

import type { PortfolioSectionId } from "@/components/ui/section-nav";
import { Reveal } from "@/components/ui/Reveal";

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
  return (
    <section id={id} className={`scroll-mt-32 ${className ?? ""}`}>
      <div className="content-gutter mx-auto w-full max-w-6xl">
        <Reveal>
          {(eyebrow || title || description) && (
            <header className="mb-5 sm:mb-6">
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </p>
              )}
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-app-fg">
                {title}
              </h2>
              {description && (
                <p className="mt-3 max-w-3xl text-base leading-7 text-muted-fg">
                  {description}
                </p>
              )}
            </header>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
