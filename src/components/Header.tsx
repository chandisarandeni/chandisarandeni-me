import { useEffect, useState } from 'react'

function Header() {
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
    { href: '#experience', label: 'experience' },
    { href: '#education', label: 'education' },
    { href: '#achievements', label: 'achievements' },
    { href: '#work', label: 'work' },
    { href: '#stack', label: 'stack' },
  ]

  return (
    <header className="sticky top-7 z-30 mb-8 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="flex w-full items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          dev terminal
        </div>
        <div className="text-slate-300">~/portfolio</div>

        <nav className="ml-auto hidden flex-1 items-center justify-end gap-2 overflow-x-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="whitespace-nowrap rounded-md border border-slate-800 bg-slate-950 px-3 py-2 transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white md:hidden"
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
        className={`mt-2 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-[max-height,opacity,transform] duration-250 ease-in-out md:hidden ${
          isMenuOpen
            ? 'pointer-events-auto max-h-80 translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-1 opacity-0'
        }`}
      >
        <div className="grid gap-2 bg-[radial-gradient(circle_at_18%_15%,rgba(52,211,153,0.12),transparent_45%)] px-4 py-3 text-[12px] uppercase">
          <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] text-slate-300">
            <span>sections</span>
            <span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] uppercase text-slate-200">quick jump</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/90 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  {link.label}
                </span>
                <span className="text-[10px] text-slate-400">enter</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
