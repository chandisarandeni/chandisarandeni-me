import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ContentCard } from "./ContentCard";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";
import { SectionShell } from "./SectionShell";
import type { PortfolioSectionId } from "./section-nav";

type AchievementItem = {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  image?: string | StaticImageData;
  link?: string;
};

type AchievementsSectionProps = {
  data: AchievementItem[];
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
      <HorizontalScrollCarousel>
        {data.map((item) => (
          <div key={`${item.title}-${item.date}`} className="h-[450px] w-[300px] shrink-0 sm:w-[350px]">
            <ContentCard className="flex h-full flex-col overflow-hidden !p-0">
              {item.image && (
                <div className="relative h-48 w-full shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 300px, 350px"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-app-fg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-fg">
                  {[item.issuer, item.date].filter(Boolean).join(" - ")}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-fg">{item.summary}</p>
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
              </div>
            </ContentCard>
          </div>
        ))}
      </HorizontalScrollCarousel>
    </SectionShell>
  );
}
