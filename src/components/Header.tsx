import { useEffect, useState } from 'react'

type HeaderProps = {
  email: string
  github: string
  linkedin: string
}

function Header({ email, github, linkedin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { href: '#hero', label: 'home' },
    { href: '#log', label: 'log' },
    { href: '#education', label: 'education' },
    { href: '#achievements', label: 'achievements' },
    { href: '#work', label: 'work' },
    { href: '#stack', label: 'stack' },
  ]

  return (
    <header className="sticky top-7 z-30 mb-10 rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="flex w-full items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          dev terminal
        </div>
        <div className="text-slate-300">~/portfolio</div>

        <nav className="hidden flex-1 items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-emerald-100 md:flex">
          <a className="rounded-md border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-white" href={`mailto:${email}`}>
            ping me
          </a>
          <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-white" href={github} target="_blank" rel="noreferrer">
            github
          </a>
          <a className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-white" href={linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-200 transition hover:border-emerald-300/60 hover:text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col items-center justify-center gap-1">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`mt-3 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-[max-height,opacity,transform] duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-130 opacity-100' : 'pointer-events-none max-h-0 -translate-y-1 opacity-0'}`}
      >
        <div className="grid gap-3 bg-[radial-gradient(circle_at_18%_15%,rgba(52,211,153,0.12),transparent_45%)] px-4 py-3 text-[12px] uppercase">
          <nav className="grid gap-2 font-semibold tracking-[0.18em] text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-lg border border-slate-800 bg-slate-950/90 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
