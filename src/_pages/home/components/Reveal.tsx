"use client";

import { useRef } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in" | "timeline-item" | "slide-right";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
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
  distancePx = 20,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getVariants = () => {
    switch (variant) {
      case "fade-up":
      case "timeline-item":
        return {
          hidden: { opacity: 0, y: distancePx },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -distancePx },
          visible: { opacity: 1, x: 0 },
        };
      case "scale-in":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case "fade-in":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay: delayMs / 1000,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth custom ease out
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

