"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in" | "timeline-item";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delayMs?: number;
  threshold?: number;
  once?: boolean;
  variant?: RevealVariant;
  distancePx?: number;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.15,
  once = true,
  variant = "fade-up",
  distancePx,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    // ============= Motion Controls =============
    // --------------------- Skip observer work when QA or motion-off mode is active ------------------
    const root = document.documentElement;
    if (root.dataset.motion === "off") {
      element.dataset.revealReady = "true";
      element.dataset.revealIn = "true";
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.revealReady = "true";
      element.dataset.revealIn = "true";
      return;
    }

    element.style.setProperty("--reveal-delay", `${delayMs}ms`);
    if (typeof distancePx === "number") {
      element.style.setProperty("--reveal-distance", `${distancePx}px`);
    }
    element.dataset.revealVariant = variant;

    // ============= Viewport Reveal =============
    // --------------------- Start animation only when section intersects ------------------
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ============= Staged Reveal =============
          // --------------------- Mark ready, then animate in ------------------
          element.dataset.revealReady = "true";
          element.dataset.revealIn = "true";
          if (once) {
            observer.unobserve(element);
          }
          return;
        }

        if (!once) {
          element.dataset.revealReady = "true";
          element.dataset.revealIn = "false";
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (typeof distancePx === "number") {
        element.style.removeProperty("--reveal-distance");
      }
    };
  }, [delayMs, distancePx, once, threshold, variant]);

  return (
    <div ref={ref} className={`reveal-section ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
