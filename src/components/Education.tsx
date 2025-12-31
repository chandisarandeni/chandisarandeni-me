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
  return (
    <section id="education" className="mb-12">
      <SectionHeader label="history education/" title="Education" />
      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.32)]">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 border-l border-slate-800 pl-4 md:flex-row md:items-center md:justify-between md:gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{item.years}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.place}</p>
              <p className="text-sm text-slate-400">{item.notes}</p>
            </div>
            <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-100">
              {index === 0 ? 'complete' : 'ongoing'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
