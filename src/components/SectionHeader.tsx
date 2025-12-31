import type { ReactNode } from 'react'

type SectionHeaderProps = {
  label: string
  title: string
  action?: ReactNode
}

function SectionHeader({ label, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">{label}</p>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      {action ? <div className="text-sm text-slate-200">{action}</div> : null}
    </div>
  )
}

export default SectionHeader
