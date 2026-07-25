"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only attach cursor logic on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible((prev) => (prev ? prev : true));
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleInteractableEnter = () => setIsHovered(true);
    const handleInteractableLeave = () => setIsHovered(false);

    // Attach listeners to interactive elements
    const attachListeners = () => {
      const interactables = document.querySelectorAll(
        "a, button, input, textarea, select, .cursor-scale, [role='button'], .tap-target"
      );
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", handleInteractableEnter);
        el.addEventListener("mouseleave", handleInteractableLeave);
      });
    };

    attachListeners();

    // Re-attach listeners when DOM changes (e.g., Next.js navigation)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      
      const interactables = document.querySelectorAll(
        "a, button, input, textarea, select, .cursor-scale, [role='button'], .tap-target"
      );
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractableEnter);
        el.removeEventListener("mouseleave", handleInteractableLeave);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block h-8 w-8 rounded-full border border-accent mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isHovered ? "var(--accent)" : "transparent",
      }}
      animate={{
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
