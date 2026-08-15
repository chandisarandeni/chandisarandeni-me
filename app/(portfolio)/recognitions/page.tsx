"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import achievements from "@/src/_pages/home/seeds/achievements";
import { ContentCard } from "@/src/_pages/home/components/ContentCard";
import { Reveal } from "@/src/_pages/home/components/Reveal";
import { HorizontalScrollCarousel } from "@/src/_pages/home/components/HorizontalScrollCarousel";

export default function RecognitionsPage() {
  const featuredActivities = achievements.filter((a) => a.featured);
  
  const [selectedGallery, setSelectedGallery] = useState<{ images: (string | StaticImageData)[], index: number } | null>(null);

  type MonthGroup = { month: string; items: typeof achievements };
  type YearGroup = { year: string; months: MonthGroup[] };

  const timelineData: YearGroup[] = [];

  achievements.forEach(item => {
    let year = "Other";
    let month = "";
    
    if (item.date && item.date !== "Active") {
      const parts = item.date.split(" ");
      if (parts.length === 2) {
        month = parts[0];
        year = parts[1];
      } else {
        year = item.date;
      }
    } else if (item.date === "Active") {
      year = "Active";
    }

    let yearGroup = timelineData.find(yg => yg.year === year);
    if (!yearGroup) {
      yearGroup = { year, months: [] };
      timelineData.push(yearGroup);
    }

    let monthGroup = yearGroup.months.find(mg => mg.month === month);
    if (!monthGroup) {
      monthGroup = { month, items: [] };
      yearGroup.months.push(monthGroup);
    }

    monthGroup.items.push(item);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === "Escape") setSelectedGallery(null);
      if (e.key === "ArrowRight") {
        setSelectedGallery(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
      }
      if (e.key === "ArrowLeft") {
        setSelectedGallery(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
      }
    };
    if (selectedGallery) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedGallery]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 space-y-12 sm:space-y-16">
        <div className="space-y-6 sm:space-y-8">
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
            <header className="max-w-2xl space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-app-fg sm:text-5xl">
                Recognitions & Activities
              </h1>
              <p className="text-lg leading-7 text-muted-fg">
                A comprehensive overview of my academic recognitions, professional certifications, and community involvement.
              </p>
            </header>
          </Reveal>
        </div>

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
            
            <div className="-mx-6 lg:-mx-8">
              <HorizontalScrollCarousel>
                {featuredActivities.map((item, index) => (
                  <div key={`featured-${item.title}-${index}`} className="self-stretch w-[300px] sm:w-[360px] lg:w-[420px] shrink-0">
                    <ContentCard className="flex h-full flex-col overflow-hidden !p-0 border border-accent/20">
                        {(() => {
                          const thumbnail = item.image || (item.images && item.images[0]);
                          if (!thumbnail) return null;
                          return (
                            <div 
                              className="relative h-48 w-full shrink-0 cursor-zoom-in overflow-hidden"
                              onClick={() => {
                                const imgs = item.images || (item.image ? [item.image] : []);
                                if (imgs.length > 0) {
                                  setSelectedGallery({ images: imgs, index: 0 });
                                }
                              }}
                            >
                              <Image 
                                src={thumbnail} 
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 768px) 300px, 350px"
                              />
                            </div>
                          );
                        })()}
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-app-fg leading-snug">{item.title}</h3>
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
                  </div>
                ))}
              </HorizontalScrollCarousel>
            </div>
          </section>
        )}

        {/* Timeline of Activities Section */}
        <section className="space-y-12">
          <Reveal>
            <h2 className="text-2xl font-bold text-app-fg border-b border-border-muted pb-4">
              Timeline of Activities
            </h2>
          </Reveal>
          
          <div className="space-y-16">
            {timelineData.map((yearGroup) => (
              <div key={yearGroup.year} className="space-y-8">
                {/* Year Divider */}
                <Reveal>
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-black text-app-fg tracking-tight">{yearGroup.year}</h3>
                    <div className="h-px flex-1 bg-border-muted" />
                  </div>
                </Reveal>

                <div className="space-y-10 pl-0 sm:pl-4 border-l-0 sm:border-l sm:border-border-muted/50">
                  {yearGroup.months.map((monthGroup) => (
                    <div key={monthGroup.month || "Unknown"} className="space-y-6">
                      {/* Month Sub-header */}
                      {monthGroup.month && (
                        <Reveal>
                          <h4 className="text-sm font-bold text-accent uppercase tracking-widest pl-4 border-l-2 border-accent relative -left-[1px]">
                            {monthGroup.month}
                          </h4>
                        </Reveal>
                      )}
                      
                      {/* Vertical stack for horizontal cards */}
                      <div className="flex flex-col gap-6">
                        {monthGroup.items.map((item, index) => (
                          <Reveal key={`timeline-${item.title}-${index}`} className="w-full">
                            <ContentCard className="flex flex-col sm:flex-row w-full overflow-hidden !p-0 items-stretch group">
                              {(() => {
                                const thumbnail = item.image || (item.images && item.images[0]);
                                if (!thumbnail) return null;
                                return (
                                  <div 
                                    className="relative w-full sm:w-72 lg:w-80 min-h-[220px] sm:min-h-full shrink-0 cursor-zoom-in overflow-hidden bg-surface-elevated"
                                    onClick={() => {
                                      const imgs = item.images || (item.image ? [item.image] : []);
                                      if (imgs.length > 0) {
                                        setSelectedGallery({ images: imgs, index: 0 });
                                      }
                                    }}
                                  >
                                    <Image 
                                      src={thumbnail} 
                                      alt={item.title}
                                      fill
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      sizes="(max-width: 640px) 100vw, 320px"
                                    />
                                  </div>
                                );
                              })()}
                              <div className="flex flex-1 flex-col p-6 sm:p-8 justify-center">
                                <h3 className="text-xl font-bold text-app-fg leading-snug">{item.title}</h3>
                                <p className="mt-2 text-sm text-accent font-semibold tracking-wide">
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGallery(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-full w-full max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {selectedGallery.images.length > 1 && (
                <button
                  className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGallery(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
              )}

              {/* Current Image */}
              <div className="relative w-full h-[80vh] flex items-center justify-center cursor-default">
                <Image
                  src={selectedGallery.images[selectedGallery.index]}
                  alt={`Achievement Full View ${selectedGallery.index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                  priority
                />
              </div>

              {/* Next Button */}
              {selectedGallery.images.length > 1 && (
                <button
                  className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGallery(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              )}

              {/* Close Button */}
              <button
                className="absolute right-2 sm:right-4 top-2 sm:top-4 z-30 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
                onClick={() => setSelectedGallery(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              {/* Indicators */}
              {selectedGallery.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {selectedGallery.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGallery(prev => prev ? { ...prev, index: idx } : null);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === selectedGallery.index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
