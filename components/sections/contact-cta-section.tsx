import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SectionShell } from "@/components/ui/section-shell";
import type { PortfolioSectionId } from "@/components/ui/section-nav";
import type { PortfolioData } from "@/types/portfolio";

type ContactCtaSectionProps = {
  data: PortfolioData["contact"];
  id?: PortfolioSectionId;
};

type ContactChannel = {
  key: "github" | "linkedin" | "email";
  label: string;
  href: string;
  icon: IconType;
};

function getContactChannels(data: PortfolioData["contact"]): ContactChannel[] {
  // ============= Contact Link Normalization =============
  // --------------------- Map mixed content links into stable GitHub / LinkedIn / Email actions ------------------
  const githubLink = data.links.find(
    (link) => /github/i.test(link.label) || /github\.com/i.test(link.url)
  );
  const linkedInLink = data.links.find(
    (link) => /linkedin/i.test(link.label) || /linkedin\.com/i.test(link.url)
  );
  const emailLink = data.links.find(
    (link) => /email/i.test(link.label) || link.url.startsWith("mailto:")
  );

  const channels: ContactChannel[] = [
    { key: "github", label: "GitHub", href: githubLink?.url ?? "", icon: FaGithub },
    { key: "linkedin", label: "LinkedIn", href: linkedInLink?.url ?? "", icon: FaLinkedin },
    {
      key: "email",
      label: "Email",
      href: emailLink?.url ?? `mailto:${data.email}`,
      icon: FaEnvelope,
    },
  ];

  return channels.filter((channel) => Boolean(channel.href));
}

export function ContactCtaSection({
  data,
  id = "contact",
}: ContactCtaSectionProps) {
  const contactChannels = getContactChannels(data);

  return (
    <SectionShell
      id={id}
      eyebrow="Contact"
      title="Let's Build Something Useful"
      className="pb-8 sm:pb-10 lg:pb-12"
    >
      {/* ============= CTA Surface Harmony ============= */}
      {/* --------------------- Keep contact panel in the same neutral blur family used across all sections ------------------ */}
      <div className="card-lift contact-card p-5 sm:p-6 lg:p-7">
        <p className="max-w-2xl text-base leading-7 text-app-fg">{data.availability}</p>
        {data.location ? (
          <p className="mt-2 text-sm text-muted-fg">{data.location}</p>
        ) : null}

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-fg">
            Direct Contacts
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const isExternal = channel.href.startsWith("http");

              return (
                <li key={channel.key}>
                  <a
                    href={channel.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    className="contact-secondary-btn tap-target inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span>{channel.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </SectionShell>
  );
}
