"use client";

import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
            <div key={`${item.title}-${item.date}`} className="h-[440px] sm:h-[420px] xl:h-[450px] w-[280px] sm:w-[320px] shrink-0 sm:w-[350px]">
              <ContentCard className="flex h-full flex-col overflow-hidden !p-0">
                {item.image && (
                  <div 
                    className="relative h-48 w-full shrink-0 cursor-zoom-in overflow-hidden"
                    onClick={() => setSelectedImage(item.image!)}
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-full w-full max-w-5xl overflow-hidden rounded-lg bg-transparent"
            >
              <Image
                src={selectedImage}
                alt="Achievement Full View"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
              <button
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
