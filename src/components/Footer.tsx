type FooterProps = {
  email: string
  github: string
  linkedin: string
}

function Footer({ email, github, linkedin }: FooterProps) {
  return (
    <footer className="mt-10 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-300/80">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        ready · /contact
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          className="rounded-md border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
          href={`mailto:${email}`}
        >
          Email
        </a>
        <a
          className="rounded-md border border-slate-700 px-3 py-2 font-semibold text-slate-200 transition hover:border-emerald-200 hover:text-white"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="rounded-md border border-slate-700 px-3 py-2 font-semibold text-slate-200 transition hover:border-emerald-200 hover:text-white"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
