import type { ReactNode } from 'react'

type HeroProps = {
  name: string
  role: string
  tagline: string
  summary: string
  location: string
  availability: string
  profileImage: string
  email: string
  github: string
  linkedin: string
  footerSlot?: ReactNode
}

function Hero({
  name,
  role,
  tagline,
  summary,
  location,
  availability,
  profileImage,
  email,
  github,
  linkedin,
  footerSlot,
}: HeroProps) {
  const focusAreas = ['Web platforms', 'DevOps guardrails', 'AI tooling']
  const workStreams = [
    {
      title: 'Now shipping',
      detail: 'Release dashboards with deploy safety rails, live telemetry, and calm alerts.',
    },
    {
      title: 'Next up',
      detail: 'AI-assisted onboarding, concise developer docs, and faster feedback cycles.',
    },
  ]
  const collabSnapshots = [
    {
      title: 'Collab cadence',
      detail: 'Async-first updates, pairing for thorny flows, tight demos with acceptance notes.',
    },
    {
      title: 'Delivery style',
      detail: 'Small batches with feature flags, rollout plans, and metrics wired from day one.',
    },
    {
      title: 'Toolbox',
      detail: 'TypeScript, React, CI/CD, observability, docs as code, and automation over repetition.',
    },
  ]

  return (
    <section id="hero" className="mb-12 grid scroll-mt-45 gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="reveal relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(52,211,153,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.12),transparent_44%)]" />
        <div className="relative space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-emerald-300/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            {role}
            <span className="rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-slate-200">
              {availability}
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-slate-200">
              {location}
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">hello ~/intro</p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">{name}</h1>
            <p className="text-lg text-emerald-100">{tagline}</p>
          </div>
          <p className="max-w-3xl text-base text-slate-200 md:text-lg">{summary}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {workStreams.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 shadow-inner shadow-emerald-500/10"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">{item.title}</p>
                <p className="mt-1 text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-emerald-300/30 bg-emerald-400/5 px-4 py-3 text-sm font-semibold text-emerald-100"
              >
                {item}
              </div>
            ))}
          </div>
          {footerSlot && <div className="pt-1">{footerSlot}</div>}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="reveal reveal-delay-1 relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-slate-950/85 p-5 shadow-[0_0_26px_rgba(52,211,153,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(52,211,153,0.18),transparent_48%)]" />
          <div className="relative space-y-3">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-emerald-300/50 bg-slate-900 shadow-inner shadow-emerald-400/12">
                <img
                  src={profileImage}
                  alt={name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-800/70" />
              </div>
              <div className="space-y-1 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">currently shipping</p>
                <p className="text-lg font-semibold text-white">{name}</p>
                <p className="text-slate-300">{role}</p>
                <p className="text-slate-400">{location}</p>
              </div>
            </div>
            <p className="text-sm text-slate-200">
              Remote-friendly product engineer crafting dependable web experiences and shipping pipelines that stay out
              of the way.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <a
                className="rounded-lg border border-emerald-300/60 bg-emerald-400/10 px-3 py-2 font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-white"
                href={`mailto:${email}`}
              >
                email me
              </a>
              <a
                className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <a
                className="rounded-lg border border-slate-800 px-3 py-2 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 rounded-3xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.32)]">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            collaboration signals
          </div>
          <ul className="space-y-3 text-sm">
            {collabSnapshots.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-200 shadow-inner shadow-emerald-500/10"
              >
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-200">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
