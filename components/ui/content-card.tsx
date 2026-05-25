import type { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  className?: string;
};

export function ContentCard({ children, className }: ContentCardProps) {
  return (
    <article
      className={`card-lift rounded-2xl p-5 sm:p-6 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
