import SectionHeader from './SectionHeader'

type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  impact: string[]
  stack: string[]
}

type ExperienceProps = {
  items: ExperienceItem[]
}

function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="mb-12 scroll-mt-28">
      <SectionHeader
        label="tail -f experience.log"
        title="Experience"
        action={
          <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
            {items.length.toString().padStart(2, '0')} companies
          </span>
        }
      />

      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.32)]">
        {items.map((item, idx) => {
          const isCurrent = item.period.toLowerCase().includes('present')
          const primaryImpact = item.impact[0] ?? 'Shipping reliable releases with the team.'
          return (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className={`reveal ${idx % 2 === 0 ? '' : 'reveal-delay-1'} relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-inner shadow-emerald-500/5`}
            >
              <div className="absolute left-4 top-0 h-full w-px bg-slate-800" aria-hidden="true" />
              <div className="relative grid gap-3 pl-6 md:grid-cols-[1fr_auto] md:items-start md:gap-6 md:pl-8">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-300/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                    <span>{item.period}</span>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-semibold text-emerald-100">
                      {item.location}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">{item.company}</h3>
                    <p className="text-sm font-semibold text-emerald-100">{item.role}</p>
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                    {item.impact.map((line) => (
                      <li key={line} className="leading-relaxed marker:text-slate-400">
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-200">
                    {item.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 md:items-end">
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-100">
                    {isCurrent ? 'active' : 'shipped'}
                  </span>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-[12px] text-slate-200 shadow-inner shadow-emerald-500/5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">Focus</p>
                    <p className="text-slate-200">{primaryImpact}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
