"use client";

import { useEffect, useState, cloneElement, useRef, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useInView } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { BsGithub, BsFire, BsLightningChargeFill, BsCalendarCheck } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { SectionShell } from "./SectionShell";
import { ContentCard } from "./ContentCard";

export function GithubGraphSection() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const statsCalculated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [stats, setStats] = useState<{ total: number; maxDay: number; maxDate: string; longestStreak: number; currentStreak: number } | null>(null);

  const transformData = useCallback((data: any[]) => {
    if (!statsCalculated.current && data.length > 0) {
      let total = 0;
      let maxDay = 0;
      let maxDate = "";
      let streak = 0;
      let longestStreak = 0;

      data.forEach((day, index) => {
        total += day.count;
        
        // Add random staggered delay mimicking a building-block cascade 
        day.animDelay = (index / data.length) * 2.5 + Math.random() * 0.15;

        if (day.count > maxDay) {
          maxDay = day.count;
          maxDate = day.date;
        }
        if (day.count > 0) {
          streak++;
          if (streak > longestStreak) {
            longestStreak = streak;
          }
        } else {
          streak = 0;
        }
      });

      let currentStreak = 0;
      for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].count > 0) {
          currentStreak++;
        } else {
          if (i === data.length - 1) {
            continue;
          }
          break;
        }
      }

      setTimeout(() => {
        setStats({ total, maxDay, maxDate, longestStreak, currentStreak });
      }, 0);
      statsCalculated.current = true;
    }
    return data;
  }, []);

  useEffect(() => {
    setMounted(true);
    // Check initial theme
    const root = document.documentElement;
    setTheme(root.dataset.theme === "light" ? "light" : "dark");

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(root.dataset.theme === "light" ? "light" : "dark");
        }
      });
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <SectionShell
      id="github"
      eyebrow="Open Source"
      title="GitHub Contributions"
      description="A live view of my open-source activity and coding consistency."
      layout="stacked"
    >
      <ContentCard className="flex flex-col items-center justify-center p-6 sm:p-10 overflow-hidden">
        
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mb-10">
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface border border-border-muted shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <BsGithub className="text-muted-fg text-lg" />
                <span className="text-xs sm:text-sm text-muted-fg font-semibold uppercase tracking-wider text-center">Total Commits</span>
              </div>
              <span className="text-3xl font-bold text-app-fg">{stats.total}</span>
              <span className="text-xs text-muted-fg mt-1">In the last year</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface border border-border-muted shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <BsCalendarCheck className="text-muted-fg text-lg" />
                <span className="text-xs sm:text-sm text-muted-fg font-semibold uppercase tracking-wider text-center">Current Streak</span>
              </div>
              <span className="text-3xl font-bold text-app-fg">{stats.currentStreak} <span className="text-lg text-muted-fg font-medium">days</span></span>
              <span className="text-xs text-muted-fg mt-1">Keep it going</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface border border-border-muted shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <BsFire className="text-muted-fg text-lg" />
                <span className="text-xs sm:text-sm text-muted-fg font-semibold uppercase tracking-wider text-center">Longest Streak</span>
              </div>
              <span className="text-3xl font-bold text-app-fg">{stats.longestStreak} <span className="text-lg text-muted-fg font-medium">days</span></span>
              <span className="text-xs text-muted-fg mt-1">Consistency is key</span>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface border border-border-muted shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <BsLightningChargeFill className="text-muted-fg text-lg" />
                <span className="text-xs sm:text-sm text-muted-fg font-semibold uppercase tracking-wider text-center">Most Active Day</span>
              </div>
              <span className="text-3xl font-bold text-app-fg">{stats.maxDay} <span className="text-lg text-muted-fg font-medium">commits</span></span>
              <span className="text-xs text-muted-fg mt-1">{new Date(stats.maxDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        )}

        <div ref={containerRef} className="overflow-x-auto w-full flex justify-start sm:justify-center pb-2">
          <div className="min-w-max min-h-[140px]">
            {mounted && (
              <>
                <GitHubCalendar
                  username="chandisarandeni"
                  colorScheme={theme}
                  transformData={transformData}
                  labels={{ totalCount: ' ' }}
                  {...({ hideTotalCount: true } as any)}
                  theme={{
                    light: ["#e7edf3", "#9ccfff", "#69b3ff", "#338ce5", "#0b6bcb"],
                    dark: ["#121e2a", "#0b6bcb", "#338ce5", "#69b3ff", "#9ccfff"],
                  }}
                  style={{
                    margin: "0 auto",
                  }}
                  renderBlock={(block, activity) =>
                    cloneElement(block as React.ReactElement<any>, {
                      "data-tooltip-id": "github-tooltip",
                      "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                      style: {
                        ...block.props.style,
                        opacity: 0,
                        animationName: isInView ? 'brick-fall' : 'none',
                        animationDuration: '0.6s',
                        animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        animationFillMode: 'forwards',
                        animationDelay: `${activity.animDelay || 0}s`,
                        transformBox: "fill-box",
                        transformOrigin: "center"
                      }
                    })
                  }
                />
                <Tooltip 
                  id="github-tooltip" 
                  delayShow={50}
                  className="!bg-surface-strong !text-app-fg !rounded-lg !px-3 !py-2 !shadow-xl !border !border-border-muted !text-xs !font-semibold z-50 !transition-opacity !duration-300 ease-out"
                />
              </>
            )}
          </div>
        </div>
      </ContentCard>
    </SectionShell>
  );
}
