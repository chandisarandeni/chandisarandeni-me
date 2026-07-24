"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type HorizontalScrollCarouselProps = {
  children: ReactNode;
};

export function HorizontalScrollCarousel({
  children,
}: HorizontalScrollCarouselProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !trackRef.current) return;

      const { top, height } = targetRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // The container is tall (e.g. 250vh).
      const scrollableDistance = height - viewportHeight;

      if (scrollableDistance <= 0) return;

      // Calculate progress across the scrollable distance
      const startBuffer = scrollableDistance * 0.10;
      const activeScrollDistance = scrollableDistance * 0.90;

      let progress = (-top - startBuffer) / activeScrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    const handleResize = () => {
      if (!trackRef.current || !targetRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = targetRef.current.clientWidth;
      setMaxScroll(Math.max(0, trackWidth - containerWidth));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getMaskStyle = () => {
    const leftFade = scrollProgress > 0 ? "transparent, black 16px" : "black, black 16px";
    const rightFade = scrollProgress < 1 ? "black calc(100% - 16px), transparent" : "black calc(100% - 16px), black";
    
    return `linear-gradient(to right, ${leftFade}, ${rightFade})`;
  };

  return (
    <div ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-24 flex flex-col justify-between w-full h-[calc(100vh-6rem)]">
        <div 
          className="flex-1 w-full flex items-start pt-0 lg:pt-4 overflow-hidden transition-[mask-image] duration-300"
          style={{
            WebkitMaskImage: getMaskStyle(),
            maskImage: getMaskStyle()
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 px-4 md:px-8 xl:px-0"
            style={{
              transform: `translateX(-${scrollProgress * maxScroll}px)`,
              willChange: "transform",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
