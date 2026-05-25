import Image from "next/image";

import type { PortfolioData } from "@/types/portfolio";
import type { PortfolioSectionId } from "@/components/ui/section-nav";

type HeroSectionProps = {
  data: PortfolioData["hero"];
  id?: PortfolioSectionId;
  profileImageSrc?: string;
  profileImageAlt?: string;
};

export function HeroSection({
  data,
  id = "home",
  profileImageSrc = "/images/profile.jpg",
  profileImageAlt,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className="hero-panel scroll-mt-24 rounded-3xl border border-border-muted py-10 sm:py-12 lg:py-14"
    >
      <div className="reveal-hero content-gutter mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[auto_1fr] md:items-center">
        <div className="mx-auto md:mx-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-surface shadow-lg ring-2 ring-accent sm:h-48 sm:w-48">
            <Image
              src={profileImageSrc}
              alt={profileImageAlt ?? `${data.name} profile photo`}
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Based in {data.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-app-fg sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-2 text-xl font-medium text-muted-fg">
            {data.role}
          </p>
          <p className="mt-3 text-lg leading-8 text-muted-fg">
            {data.tagline}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-fg">
            {data.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={data.primaryAction.url}
                className="tap-target inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
              >
                {data.primaryAction.label}
              </a>
            {data.secondaryAction ? (
              <a
                href={data.secondaryAction.url}
                className="tap-target inline-flex h-11 items-center justify-center rounded-full border border-border-strong px-6 text-sm font-semibold text-app-fg transition-colors hover:bg-surface-strong"
              >
                {data.secondaryAction.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
