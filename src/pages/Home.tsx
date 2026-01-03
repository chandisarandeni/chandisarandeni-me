import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import TerminalLog from '../components/TerminalLog'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import { achievements, education, experience, hero, projects, skills, terminalEntries, tools } from '../utils/data'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(52,211,153,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(56,189,248,0.12),transparent_38%)]" />
        <div className="absolute inset-0 opacity-60 bg-[linear-gradient(90deg,rgba(15,23,42,0.85)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.85)_1px,transparent_1px)] bg-size-[90px_90px]" />
        <div className="clouds">
          <span className="cloud cloud-a" />
          <span className="cloud cloud-b" />
          <span className="cloud cloud-c" />
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">
        <Header email={hero.email} github={hero.github} linkedin={hero.linkedin} />

        <Hero
          name={hero.name}
          role={hero.role}
          tagline={hero.tagline}
          summary={hero.summary}
          location={hero.location}
          availability={hero.availability}
          profileImage={hero.profileImage}
          email={hero.email}
          github={hero.github}
          linkedin={hero.linkedin}
          footerSlot={
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">frontend systems</span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">platform</span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">devops</span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">ai tooling</span>
            </div>
          }
        />

        <div className="mb-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <TerminalLog entries={terminalEntries} />
          <div className="reveal reveal-delay-1 rounded-3xl border border-cyan-300/25 bg-slate-900/75 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.32)]">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-cyan-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                Ops Pulse
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-[10px] font-semibold text-slate-200">
                status: green
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">Current focus</p>
                <p className="text-slate-200">Developer UX, observability, and automation-first delivery.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">Now shipping</p>
                <p className="text-slate-200">Realtime dashboards, deploy safety rails, and AI-assisted docs.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">Availability</p>
                <p className="text-slate-200">Open for collaborations and consulting.</p>
              </div>
            </div>
          </div>
        </div>

        <Experience items={experience} />
        <Education items={education} />
        <Achievements items={achievements} />
        <Projects items={projects} />
        <Skills skills={skills} tools={tools} />
        <Footer email={hero.email} github={hero.github} linkedin={hero.linkedin} />
      </main>
    </div>
  )
}

export default Home
