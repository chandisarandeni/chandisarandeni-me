"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiArrowRight } from "react-icons/fi";

export const HireMePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={popupRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="mb-4 w-[320px] rounded-2xl bg-surface border border-border-muted shadow-[var(--shadow-card)] overflow-hidden flex flex-col pointer-events-auto"
          >
            <div className="bg-surface-strong border-b border-border-muted p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </div>
                <span className="font-semibold text-sm text-app-fg">Available for work</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-fg hover:text-app-fg transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 flex flex-col gap-4 bg-app-bg">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[1.15rem] font-bold text-app-fg leading-tight">
                  Got a business idea?
                </h3>
                <div className="flex items-center mt-0.5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-500/15 px-2 py-0.5 rounded-md">
                    Free Consultation
                  </span>
                </div>
              </div>
              <p className="text-[0.85rem] text-muted-fg leading-relaxed">
                I&apos;m currently accepting new projects. Let&apos;s discuss your vision and see how I can help bring it to life—completely free of charge to explore.
              </p>
              
              <a 
                href="mailto:chandisarandeni@gmail.com"
                className="mt-1 flex flex-col items-center justify-center gap-0.5 w-full py-2 px-4 bg-accent text-accent-contrast rounded-xl hover:opacity-90 transition-opacity group"
              >
                <div className="flex items-center gap-2 font-medium text-[0.95rem]">
                  <span>Send an Email</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[0.75rem] opacity-80 font-mono tracking-tight">chandisarandeni@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-accent text-accent-contrast rounded-full shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow relative pointer-events-auto"
            aria-label={isOpen ? "Close popup" : "Available for work"}
          >
            {!isOpen && (
              <div className="absolute top-0 right-0 flex h-3.5 w-3.5 transform translate-x-1/4 -translate-y-1/4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-app-bg"></span>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMessageSquare className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
