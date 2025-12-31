import SectionHeader from './SectionHeader'

type EducationItem = {
  title: string
  place: string
  years: string
  notes: string
}

type EducationProps = {
  items: EducationItem[]
}

function Education({ items }: EducationProps) {
  const formatNotes = (notes: string) =>
    notes
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)

  return (
    <section id="education" className="mb-12">
      <SectionHeader label="history education/" title="Education" />
      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.32)]">
        {items.map((item) => {
          const noteLines = formatNotes(item.notes)
          const isOngoing = item.years.toLowerCase().includes('present')
          return (
            <article
              key={`${item.title}-${item.years}`}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-inner shadow-emerald-500/5"
            >
              <div className="absolute left-4 top-0 h-full w-px bg-slate-800" aria-hidden="true" />
              <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div className="space-y-2 pl-6 md:pl-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                    {item.years}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">{item.place}</h3>
                    <p className="text-sm font-semibold text-emerald-100">{item.title}</p>
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                    {noteLines.map((line) => {
                      const [label, ...rest] = line.split(':')
                      const value = rest.join(':').trim()
                      const hasValue = value.length > 0
                      return (
                        <li key={line} className="leading-relaxed marker:text-slate-400">
                          {hasValue ? (
                            <div className="grid grid-cols-[max-content_8px_1fr] items-start gap-1">
                              <span className="font-semibold text-slate-100">{label.trim()}</span>
                              <span className="text-slate-400">:</span>
                              <span className="text-slate-200">{value}</span>
                            </div>
                          ) : (
                            <span>{line}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-2 md:items-end">
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-100">
                    {isOngoing ? 'ongoing' : 'complete'}
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Education
