type HeaderProps = {
  email: string
  github: string
  linkedin: string
}

function Header({ email, github, linkedin }: HeaderProps) {
  return (
    <header className="sticky top-7 z-30 mb-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-3 text-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          dev terminal
        </div>
        <div className="text-slate-300">~/portfolio</div>
      </div>
      <nav className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#hero">
          home
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#log">
          log
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#education">
          education
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#achievements">
          achievements
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#work">
          work
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href="#stack">
          stack
        </a>
      </nav>
      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-emerald-100">
        <a className="rounded-md border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 hover:border-emerald-200 hover:text-white" href={`mailto:${email}`}>
          ping me
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href={github} target="_blank" rel="noreferrer">
          github
        </a>
        <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 hover:border-emerald-300/50 hover:text-white" href={linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
      </div>
    </header>
  )
}

export default Header
