import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import type { PortfolioData } from "@/types/portfolio";

type ContactCtaSectionProps = {
  data: PortfolioData["contact"];
  id?: PortfolioSectionId;
};

export function ContactCtaSection({
  data,
  id = "contact",
}: ContactCtaSectionProps) {
  const primaryLabel = "Send an Email";
  const secondaryLabel = "Back to Top";

  return (
    <SectionShell id={id} eyebrow="Contact" title="Let's Build Something Useful">
      {/* ============= CTA Surface Harmony ============= */}
      {/* --------------------- Keep contact panel in the same neutral blur family used across all sections ------------------ */}
      <div className="card-lift contact-card p-5 sm:p-6">
        <p className="max-w-2xl text-base leading-7 text-app-fg">{data.availability}</p>
        <p className="mt-2 text-sm text-muted-fg">{data.location}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${data.email}`}
            className="contact-primary-btn tap-target inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold"
          >
            {primaryLabel}
          </a>
          <a
            href="#home"
            className="contact-secondary-btn tap-target inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold"
          >
            {secondaryLabel}
          </a>
        </div>
        <ul className="mt-5 flex flex-wrap gap-3">
          {data.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer noopener" : undefined}
                className="contact-link text-sm font-medium underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
