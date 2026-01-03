import SectionHeader from './SectionHeader'

type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  impact: string[]
  stack: string[]
  projects?: {
    name: string
    summary?: string
    link?: string
  }[]
}

type ExperienceProps = {
  items: ExperienceItem[]
}

function Experience({ items }: ExperienceProps) {
  const monthIndex: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  }

  const parseDate = (value: string) => {
    const match = value.trim().toLowerCase().match(/(\d{4})\s*([a-z]{3})/)
    if (!match) return null
    const [, yearStr, monthStr] = match
    const month = monthIndex[monthStr] ?? 0
    const year = Number(yearStr)
    return new Date(year, month, 1)
  }

  const getPeriodDates = (period: string) => {
    const [startRaw, endRaw] = period.split('-').map((part) => part.trim())
    const startDate = parseDate(startRaw) ?? new Date()
    const endDate =
      (endRaw && !/present/i.test(endRaw) ? parseDate(endRaw) : null) ?? new Date()
    return { startDate, endDate }
  }

  const formatDuration = (period: string) => {
    const { startDate, endDate } = getPeriodDates(period)
    const startTotalMonths = startDate.getFullYear() * 12 + startDate.getMonth()
    const endTotalMonths = endDate.getFullYear() * 12 + endDate.getMonth()
    const diff = Math.max(0, endTotalMonths - startTotalMonths)
    if (diff === 0) return '<1 mo'
    const years = Math.floor(diff / 12)
    const months = diff % 12
    const parts = []
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
    if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
    return parts.join(' ')
  }

  const sortedItems = [...items].sort(
    (a, b) => getPeriodDates(b.period).startDate.getTime() - getPeriodDates(a.period).startDate.getTime(),
  )

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
        {sortedItems.map((item, idx) => {
          const isCurrent = item.period.toLowerCase().includes('present')
          const hasProjects = (item.projects?.length ?? 0) > 0
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
                <div className="flex flex-col items-start gap-3 md:items-end">
                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-100">
                      {isCurrent ? 'active' : 'shipped'}
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-200">
                      {formatDuration(item.period)}
                    </span>
                  </div>
                  {hasProjects && (
                    <div className="w-full max-w-xs rounded-xl border border-emerald-300/30 bg-emerald-400/5 px-4 py-3 text-[12px] text-slate-200 shadow-inner shadow-emerald-500/10">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-emerald-200">Projects shipped</p>
                      <ul className="space-y-2 text-left md:text-right">
                        {item.projects?.map((project) => (
                          <li key={project.name} className="space-y-1">
                            <div className="flex items-center gap-2 md:justify-end">
                              <span className="inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-slate-950/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                                {project.name}
                              </span>
                              {project.link && (
                                <a
                                  className="rounded-md border border-emerald-300/40 bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-white"
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  view
                                </a>
                              )}
                            </div>
                            {project.summary && <p className="text-[12px] text-slate-300">{project.summary}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
