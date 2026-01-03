import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'home' },
  { href: '#log', label: 'log' },
  { href: '#experience', label: 'experience' },
  { href: '#education', label: 'education' },
  { href: '#achievements', label: 'achievements' },
  { href: '#work', label: 'work' },
  { href: '#stack', label: 'stack' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')

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

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const id = link.href.replace('#', '')
        return document.getElementById(id)
      })
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: 0.1,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-7 z-30 mb-8 rounded-xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-sm shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="flex w-full items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          dev terminal
        </div>
        <div className="text-slate-300">~/portfolio</div>

        <nav className="ml-auto hidden flex-1 items-center justify-end gap-3 overflow-x-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`whitespace-nowrap rounded-md border px-3 py-2.5 transition focus-visible:outline focus-visible:outline-emerald-300/70 ${
                activeHref === link.href
                  ? 'border-emerald-300/70 bg-emerald-400/10 text-white shadow-[0_0_12px_rgba(52,211,153,0.18)]'
                  : 'border-slate-800 bg-slate-950 text-slate-200 hover:border-emerald-300/60 hover:bg-emerald-400/10 hover:text-white'
              }`}
              aria-current={activeHref === link.href ? 'page' : undefined}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:text-white md:hidden"
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
        className={`mt-3 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-[max-height,opacity,transform] duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? 'pointer-events-auto max-h-105 translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-1 opacity-0'
        }`}
      >
        <div className="grid gap-3 bg-[radial-gradient(circle_at_18%_15%,rgba(52,211,153,0.12),transparent_45%)] px-4 py-4 text-[12px] uppercase">
          <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.17em] text-slate-300">
            <span>sections</span>
            <span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] uppercase text-slate-200">quick jump</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`flex items-center justify-between rounded-lg border px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] transition focus-visible:outline focus-visible:outline-emerald-300/70 ${
                  activeHref === link.href
                    ? 'border-emerald-300/70 bg-emerald-400/10 text-white shadow-[0_0_12px_rgba(52,211,153,0.18)]'
                    : 'border-slate-800 bg-slate-950/90 text-slate-200 hover:border-emerald-300/70 hover:bg-emerald-400/10 hover:text-white'
                }`}
                aria-current={activeHref === link.href ? 'page' : undefined}
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
