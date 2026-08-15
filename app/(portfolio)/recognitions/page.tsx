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
                      {item.image && (
                        <div 
                          className="relative h-48 w-full shrink-0 cursor-zoom-in overflow-hidden"
                          onClick={() => setSelectedImage(item.image!)}
                        >
                          <Image 
                            src={item.image} 
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 300px, 350px"
                          />
                        </div>
                      )}
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
                    <div 
                      className="relative h-48 w-full shrink-0 cursor-zoom-in overflow-hidden bg-surface-elevated"
                      onClick={() => setSelectedImage(item.image!)}
                    >
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
