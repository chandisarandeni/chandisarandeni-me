"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SectionShell } from "./SectionShell";
import { ContentCard } from "./ContentCard";

export function GithubGraphSection() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
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
      <ContentCard className="flex items-center justify-center p-6 sm:p-10 overflow-hidden">
        <div className="overflow-x-auto w-full flex justify-start sm:justify-center pb-2">
          <div className="min-w-max">
            <GitHubCalendar
              username="chandisarandeni"
              colorScheme={theme}
              theme={{
                light: ["#e7edf3", "#9ccfff", "#69b3ff", "#338ce5", "#0b6bcb"],
                dark: ["#121e2a", "#0b6bcb", "#338ce5", "#69b3ff", "#9ccfff"],
              }}
              style={{
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </ContentCard>
    </SectionShell>
  );
}
