import SectionHeader from './SectionHeader'

type Achievement = {
  title: string
  place: string
  year: string
  note?: string
}

type AchievementsProps = {
  items: Achievement[]
}

function Achievements({ items }: AchievementsProps) {
  return (
    <section id="achievements" className="mb-12 scroll-mt-28">
      <SectionHeader label="cat achievements.log" title="Achievements" />
      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.32)]">
        {items.map((item, idx) => (
          <article
            key={`${item.title}-${item.year}`}
            className={`reveal ${idx % 2 === 0 ? '' : 'reveal-delay-1'} relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-inner shadow-emerald-500/5`}
          >
            <div className="absolute left-4 top-0 h-full w-px bg-slate-800" aria-hidden="true" />
            <div className="relative grid gap-2 pl-6 md:grid-cols-[1fr_auto] md:items-start md:gap-4 md:pl-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-300/80">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  {item.year}
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.place}</p>
                {item.note && <p className="text-sm text-slate-200">{item.note}</p>}
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-100">
                {item.year}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
