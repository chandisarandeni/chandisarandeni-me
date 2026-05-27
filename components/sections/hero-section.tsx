import Image from "next/image";

import type { PortfolioData } from "@/types/portfolio";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import { Reveal } from "@/components/ui/Reveal";

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
  // ============= Avatar Semantics =============
  // --------------------- Keep a reliable fallback while ring styling remains decorative ------------------
  const resolvedProfileImageAlt = profileImageAlt ?? `${data.name} profile photo`;

  return (
    <section
      id={id}
      className="hero-panel scroll-mt-24 rounded-3xl border border-border-muted py-10 sm:py-12 lg:py-14"
    >
      <div className="layout-frame grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="min-w-0 text-center lg:text-left">
          <Reveal variant="fade-in" delayMs={110}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Based in {data.location}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delayMs={170} distancePx={16}>
            <h1 className="mx-auto mt-3 max-w-[10ch] break-words text-[clamp(2.2rem,9vw,3.05rem)] font-bold tracking-tight text-app-fg sm:max-w-none lg:mx-0 lg:text-[3.2rem] lg:leading-[1.06] xl:text-[3.45rem]">
              {data.name}
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delayMs={230}>
            <p className="mx-auto mt-2 max-w-[18ch] break-words text-xl font-medium text-muted-fg sm:max-w-none sm:text-2xl lg:mx-0">
              {data.role}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delayMs={290}>
            <p className="mx-auto mt-3 max-w-[31ch] text-lg leading-8 text-muted-fg sm:max-w-[38ch] lg:mx-0 lg:max-w-[58ch]">
              {data.tagline}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delayMs={350}>
            <p className="mx-auto mt-3 max-w-[34ch] text-base leading-8 text-muted-fg sm:max-w-[42ch] lg:mx-0 lg:max-w-[62ch]">
              {data.summary}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delayMs={420}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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
          </Reveal>
        </div>

        <Reveal variant="scale-in" delayMs={40} className="mx-auto lg:mx-0 lg:justify-self-end">
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            <div aria-hidden="true" className="profile-google-ring absolute inset-0 rounded-full" />
            <div className="absolute inset-[6px] overflow-hidden rounded-full border-4 border-surface shadow-lg">
              <Image
                src={profileImageSrc}
                alt={resolvedProfileImageAlt}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 320px"
                className="select-none object-cover"
                draggable={false}
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
