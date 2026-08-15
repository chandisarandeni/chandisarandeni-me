import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import achievements from "@/src/_pages/home/seeds/achievements";
import { ContentCard } from "@/src/_pages/home/components/ContentCard";
import { Reveal } from "@/src/_pages/home/components/Reveal";

export default function RecognitionsPage() {
  const featuredActivities = achievements.filter((a) => a.featured);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 space-y-24">
      {/* Navigation */}
      <nav>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-fg hover:text-app-fg transition-colors"
        >
          <BsArrowLeft className="text-lg" />
          Back to Home
        </Link>
      </nav>

      {/* Header */}
      <Reveal>
        <header className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-app-fg sm:text-5xl">
            Recognitions & Activities
          </h1>
          <p className="text-lg leading-8 text-muted-fg">
            A comprehensive overview of my academic recognitions, professional certifications, and community involvement.
          </p>
        </header>
      </Reveal>

      {/* Featured Section */}
      {featuredActivities.length > 0 && (
        <section className="space-y-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-app-fg flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              Featured Highlights
            </h2>
          </Reveal>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {featuredActivities.map((item, index) => (
              <Reveal key={`${item.title}-${index}`} className="h-full">
                <ContentCard className="flex h-full flex-col overflow-hidden !p-0 border border-accent/20 shadow-md">
                  {item.image && (
                    <div className="relative h-64 w-full shrink-0 overflow-hidden bg-surface-elevated">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-app-fg">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-accent">
                      {[item.issuer, item.date].filter(Boolean).join(" - ")}
                    </p>
                    <p className="mt-4 flex-1 text-base leading-7 text-muted-fg">{item.summary}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-6 inline-flex text-sm font-semibold text-app-fg hover:text-accent transition-colors"
                      >
                        View details &rarr;
                      </a>
                    )}
                  </div>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* All Activities Section */}
      <section className="space-y-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-app-fg border-b border-border-muted pb-4">
            All Activities
          </h2>
        </Reveal>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={`all-${item.title}-${index}`} className="h-full">
              <ContentCard className="flex h-full flex-col overflow-hidden !p-0">
                {item.image && (
                  <div className="relative h-48 w-full shrink-0 overflow-hidden bg-surface-elevated">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-app-fg leading-snug">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-fg font-medium">
                    {[item.issuer, item.date].filter(Boolean).join(" - ")}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-fg">{item.summary}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex text-sm font-semibold text-accent hover:opacity-85 transition-opacity"
                    >
                      View details
                    </a>
                  )}
                </div>
              </ContentCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
