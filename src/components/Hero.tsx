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
  stats: { label: string; value: string }[]
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
  stats,
  footerSlot,
}: HeroProps) {
  return (
    <section className="mb-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(52,211,153,0.12),transparent_42%)]" />
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
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">hello ~/about</p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">{name}</h1>
            <p className="text-lg text-emerald-100">{tagline}</p>
          </div>
          <p className="max-w-3xl text-base text-slate-200 md:text-lg">{summary}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-lg border border-emerald-300/60 bg-emerald-400/10 px-4 py-2 font-semibold text-emerald-100 transition hover:-translate-y-[2px] hover:border-emerald-200 hover:text-white"
              href={`mailto:${email}`}
            >
              email
            </a>
            <a
              className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 font-semibold text-slate-200 transition hover:-translate-y-[2px] hover:border-emerald-300/60 hover:text-white"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              className="rounded-lg border border-slate-800 px-4 py-2 font-semibold text-slate-200 transition hover:-translate-y-[2px] hover:border-emerald-300/60 hover:text-white"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>
          {footerSlot}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-300/30 bg-slate-950/85 p-5 shadow-[0_0_26px_rgba(52,211,153,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(52,211,153,0.18),transparent_48%)]" />
          <div className="relative flex items-center gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-emerald-300/50 bg-slate-900 shadow-inner shadow-emerald-400/12">
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
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Profile</p>
              <p className="text-lg font-semibold text-white">{name}</p>
              <p className="text-slate-300">{role}</p>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                available for collab
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm shadow-inner shadow-emerald-500/10"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">{item.label}</p>
              <p className="mt-1 text-base text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
