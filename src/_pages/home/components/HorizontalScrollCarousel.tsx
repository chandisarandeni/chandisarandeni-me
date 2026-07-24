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

      // The container is tall (e.g. 300vh).
      // 'scrollableDistance' is the amount we can actually scroll it vertically
      // while it's in view (which is height - viewportHeight).
      const scrollableDistance = height - viewportHeight;

      if (scrollableDistance <= 0) return;

      // We want a pause at both the start and end of the horizontal scroll.
      // Let's allocate 10% of the scrollable distance as a start buffer (holds at 0),
      // 70% for the actual horizontal scroll, and the remaining 20% as an end buffer (holds at 1).
      const startBuffer = scrollableDistance * 0.10;
      const activeScrollDistance = scrollableDistance * 0.70;

      let progress = (-top - startBuffer) / activeScrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    const handleResize = () => {
      if (!trackRef.current || !targetRef.current) return;
      // Calculate how much we need to shift left to see the last item
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = targetRef.current.clientWidth;
      // We only want to scroll horizontally by the overflow amount relative to the container.
      setMaxScroll(Math.max(0, trackWidth - containerWidth));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial calculations
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-24 flex h-[calc(100vh-6rem)] w-full items-center overflow-hidden">
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
  );
}
