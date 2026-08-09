"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type HorizontalScrollCarouselProps = {
  children: ReactNode;
};

export function HorizontalScrollCarousel({
  children,
}: HorizontalScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScrollTo = (element: HTMLElement, targetLeft: number, duration: number) => {
      const startLeft = element.scrollLeft;
      const distance = targetLeft - startLeft;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        element.scrollLeft = startLeft + distance * easeInOutCubic(progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const intervalId = setInterval(() => {
      // If we are dragging or hovering, pause the step-scroll
      if (isDragging || isHovered) return;

      const firstChild = content.children[0] as HTMLElement;
      if (!firstChild) return;
      
      const step = firstChild.offsetWidth + 24; // 24px is gap-6

      // Wrap around seamlessly
      if (container.scrollLeft >= content.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'auto' }); // auto = instant
        setTimeout(() => {
          smoothScrollTo(container, step, 800); // 800ms perfectly smooth glide
        }, 50);
      } else {
        // Ensure we snap to exact increments of the step width
        const currentStepIndex = Math.round(container.scrollLeft / step);
        const nextLeft = (currentStepIndex + 1) * step;
        smoothScrollTo(container, nextLeft, 800);
      }
    }, 3000); // 3 seconds between steps

    return () => {
      clearInterval(intervalId);
    };
  }, [isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current || !contentRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (startX - x) * 1.5; // Scroll speed multiplier for dragging
    
    let newLeft = scrollLeft + walk;
    const contentWidth = contentRef.current.scrollWidth;
    
    if (newLeft < 0) {
      newLeft += contentWidth;
      setScrollLeft(newLeft);
      setStartX(x);
    } else if (newLeft >= contentWidth) {
      newLeft -= contentWidth;
      setScrollLeft(newLeft);
      setStartX(x);
    }
    
    containerRef.current.scrollTo({ left: newLeft, behavior: 'auto' });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current || !contentRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (startX - x) * 1.5;
    
    let newLeft = scrollLeft + walk;
    const contentWidth = contentRef.current.scrollWidth;
    
    if (newLeft < 0) {
      newLeft += contentWidth;
      setScrollLeft(newLeft);
      setStartX(x);
    } else if (newLeft >= contentWidth) {
      newLeft -= contentWidth;
      setScrollLeft(newLeft);
      setStartX(x);
    }
    
    containerRef.current.scrollTo({ left: newLeft, behavior: 'auto' });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!containerRef.current || !contentRef.current) return;
    if (Math.abs(e.deltaX) === 0) return;
    
    let newLeft = containerRef.current.scrollLeft + e.deltaX;
    const contentWidth = contentRef.current.scrollWidth;
    
    if (newLeft < 0) {
      newLeft += contentWidth;
    } else if (newLeft >= contentWidth) {
      newLeft -= contentWidth;
    }
    
    containerRef.current.scrollTo({ left: newLeft, behavior: 'auto' });
  };

  const maskStyle = "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)";

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className={`w-full overflow-hidden touch-pan-y transition-[mask-image] duration-300 pb-4 pt-4 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div className="flex w-max">
          <div ref={contentRef} className="flex gap-6 shrink-0 pr-6 pointer-events-none sm:pointer-events-auto">
            {children}
          </div>
          <div className="flex gap-6 shrink-0 pr-6 pointer-events-none sm:pointer-events-auto" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
