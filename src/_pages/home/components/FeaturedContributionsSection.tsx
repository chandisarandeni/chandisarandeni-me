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
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({});

  const featuredItems = data.filter((item) => item.featured).slice(0, 3);

  useEffect(() => {
    const hasMultipleImages = featuredItems.some(item => {
      const imgs = item.images || (item.image ? [item.image] : []);
      return imgs.length > 1;
    });

    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setImageIndices(prev => {
        const nextIndices = { ...prev };
        featuredItems.forEach(item => {
          const imgs = item.images || (item.image ? [item.image] : []);
          if (imgs.length > 1) {
            const currentIndex = prev[item.title] || 0;
            nextIndices[item.title] = (currentIndex + 1) % imgs.length;
          }
        });
        return nextIndices;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [featuredItems]);

  if (featuredItems.length === 0) return null;

  return (
    <>
      <SectionShell
        id={"featured-contributions" as any}
        title="Community Spotlight"
        description="Latest featured contributions to the community and recent milestones."
        layout="stacked"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Main Spotlight */}
          {featuredItems.length > 0 && (() => {
            const item = featuredItems[0];
            const imgs = item.images || (item.image ? [item.image] : []);
            const currentIndex = imageIndices[item.title] || 0;
            const currentImage = imgs[currentIndex] || imgs[0];
            
            return (
              <div className="flex flex-col h-full">
                <Reveal
                  key={`${item.title}-${item.date}`}
                  className="h-full"
                >
                  <ContentCard className="flex flex-col overflow-hidden !p-0 h-full border border-accent/20 group hover:border-accent/40 transition-colors">
                    {currentImage && (
                      <div 
                        className={`relative shrink-0 overflow-hidden w-full h-56 sm:h-64 ${imgs.length > 1 ? "cursor-pointer" : ""}`}
                        onClick={() => {
                          if (imgs.length > 1) {
                            setImageIndices(prev => ({
                              ...prev,
                              [item.title]: (currentIndex + 1) % imgs.length
                            }));
                          }
                        }}
                      >
                        <AnimatePresence initial={false}>
                          <motion.div
                            key={currentIndex}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0"
                          >
                            <Image 
                              src={currentImage} 
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                        {imgs.length > 1 && (
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                            {imgs.map((_, idx) => (
                              <div 
                                key={idx} 
                                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                              />
                            ))}
                          </div>
                        )}
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
                const imgs = item.images || (item.image ? [item.image] : []);
                const currentIndex = imageIndices[item.title] || 0;
                const currentImage = imgs[currentIndex] || imgs[0];
                
                return (
                  <Reveal
                    key={`${item.title}-${item.date}`}
                    className="flex-1"
                  >
                    <ContentCard className="flex flex-row overflow-hidden !p-0 h-full border border-accent/20 group hover:border-accent/40 transition-colors">
                      {currentImage && (
                        <div 
                          className={`relative shrink-0 overflow-hidden w-32 sm:w-40 md:w-48 min-h-[140px] ${imgs.length > 1 ? "cursor-pointer" : ""}`}
                          onClick={() => {
                            if (imgs.length > 1) {
                              setImageIndices(prev => ({
                                ...prev,
                                [item.title]: (currentIndex + 1) % imgs.length
                              }));
                            }
                          }}
                        >
                          <AnimatePresence initial={false}>
                            <motion.div
                              key={currentIndex}
                              initial={{ x: "100%" }}
                              animate={{ x: 0 }}
                              exit={{ x: "-100%" }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              className="absolute inset-0"
                            >
                              <Image 
                                src={currentImage} 
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 33vw, 25vw"
                              />
                            </motion.div>
                          </AnimatePresence>
                          {imgs.length > 1 && (
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                              {imgs.map((_, idx) => (
                                <div 
                                  key={idx} 
                                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? "w-3 bg-white" : "w-1.5 bg-white/50"}`}
                                />
                              ))}
                            </div>
                          )}
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
    </>
  );
}
