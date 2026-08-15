"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ContentCard } from "./ContentCard";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";
import { SectionShell } from "./SectionShell";
import type { PortfolioSectionId } from "./section-nav";
import type { AchievementItem } from "../seeds/achievements";

type AchievementsSectionProps = {
  data: AchievementItem[];
  id?: PortfolioSectionId;
};

export function AchievementsSection({
  data,
  id = "achievements",
}: AchievementsSectionProps) {
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

  return (
    <>
      <SectionShell
        id={id}
        eyebrow="Achievements"
        title="Recognition and Activities"
        description="Academic recognition and technical community contributions."
        layout="stacked"
      >
        <HorizontalScrollCarousel>
          {data.map((item) => (
            <div key={`${item.title}-${item.date}`} className="self-stretch w-[280px] sm:w-[320px] shrink-0 sm:w-[350px]">
              <ContentCard className="flex h-full flex-col overflow-hidden !p-0">
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
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 300px, 350px"
                      />
                    </div>
                  );
                })()}
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
        <div className="mt-0 flex justify-center sm:mt-4">
          <Link 
            href="/recognitions" 
            className="inline-flex items-center justify-center rounded-full bg-app-fg px-8 py-3 text-sm font-semibold text-surface transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Explore All Recognitions
          </Link>
        </div>
      </SectionShell>

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
