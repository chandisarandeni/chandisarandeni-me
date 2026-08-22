"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ContentCard } from "./ContentCard";
import { SectionShell } from "./SectionShell";
import type { AchievementItem } from "../seeds/achievements";
import { Reveal } from "./Reveal";

type FeaturedContributionsSectionProps = {
  data: AchievementItem[];
};

export function FeaturedContributionsSection({
  data,
}: FeaturedContributionsSectionProps) {
  const [selectedGallery, setSelectedGallery] = useState<{ images: (string | StaticImageData)[], index: number } | null>(null);

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

  const featuredItems = data.filter((item) => item.featured).slice(0, 3);

  if (featuredItems.length === 0) return null;

  return (
    <>
      <SectionShell
        id="featured-contributions" as any
        title="Community Spotlight"
        description="Latest featured contributions to the community and recent milestones."
        layout="stacked"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Main Spotlight */}
          {featuredItems.length > 0 && (() => {
            const item = featuredItems[0];
            const thumbnail = item.image || (item.images && item.images[0]);
            
            return (
              <div className="flex flex-col h-full">
                <Reveal
                  key={`${item.title}-${item.date}`}
                  className="h-full"
                >
                  <ContentCard className="flex flex-col overflow-hidden !p-0 h-full border border-accent/20 group hover:border-accent/40 transition-colors">
                    {thumbnail && (
                      <div 
                        className="relative shrink-0 cursor-zoom-in overflow-hidden w-full h-56 sm:h-64"
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
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col p-6 sm:p-8 flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-app-fg leading-snug">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-accent tracking-wide uppercase">
                        {[item.issuer, item.date].filter(Boolean).join(" - ")}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-fg line-clamp-4">{item.summary}</p>
                      {item.link && (
                        <div className="mt-auto pt-6">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex text-sm font-semibold text-app-fg hover:text-accent transition-colors w-fit"
                          >
                            View details &rarr;
                          </a>
                        </div>
                      )}
                    </div>
                  </ContentCard>
                </Reveal>
              </div>
            );
          })()}

          {/* Right Secondary Spotlights */}
          {featuredItems.length > 1 && (
            <div className="flex flex-col gap-6">
              {featuredItems.slice(1, 3).map((item) => {
                const thumbnail = item.image || (item.images && item.images[0]);
                
                return (
                  <Reveal
                    key={`${item.title}-${item.date}`}
                    className="flex-1"
                  >
                    <ContentCard className="flex flex-row overflow-hidden !p-0 h-full border border-accent/20 group hover:border-accent/40 transition-colors">
                      {thumbnail && (
                        <div 
                          className="relative shrink-0 cursor-zoom-in overflow-hidden w-32 sm:w-40 md:w-48 min-h-[140px]"
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
                            sizes="(max-width: 768px) 33vw, 25vw"
                          />
                        </div>
                      )}
                      <div className="flex flex-col p-4 sm:p-6 flex-1 justify-center">
                        <h3 className="text-base sm:text-lg font-bold text-app-fg leading-snug line-clamp-2">{item.title}</h3>
                        <p className="mt-1 text-xs font-semibold text-accent tracking-wide uppercase">
                          {[item.issuer, item.date].filter(Boolean).join(" - ")}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-fg line-clamp-2 sm:line-clamp-3">{item.summary}</p>
                        {item.link && (
                          <div className="mt-3">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex text-xs sm:text-sm font-semibold text-app-fg hover:text-accent transition-colors w-fit"
                            >
                              View details &rarr;
                            </a>
                          </div>
                        )}
                      </div>
                    </ContentCard>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </SectionShell>

      {/* Gallery Modal */}
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

              <button
                className="absolute right-4 sm:right-6 top-4 sm:top-6 z-30 flex items-center gap-2 rounded-full bg-black/60 pl-3 pr-4 py-2 text-white/90 hover:bg-black/80 hover:text-white transition-all cursor-pointer backdrop-blur-md shadow-lg group"
                onClick={() => setSelectedGallery(null)}
              >
                <div className="rounded-full bg-white/20 p-1 group-hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase mt-0.5">ESC to exit</span>
              </button>

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
