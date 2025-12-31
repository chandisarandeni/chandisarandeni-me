import './index.css'

const projects = [
  {
    name: 'Terminal Portfolio',
    description:
      'CLI-inspired personal site with keyboard navigation, command palette, and live status widgets.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/your-handle/terminal-portfolio',
  },
  {
    name: 'DevOps Dashboard',
    description:
      'Streaming deployment timeline, log viewer, and metrics cards for pipelines in real time.',
    stack: ['Vite', 'WebSockets', 'Node.js'],
    link: 'https://github.com/your-handle/devops-dashboard',
  },
  {
    name: 'AI Snippets',
    description:
      'AI-assisted snippet library with semantic search, tagging, and offline-safe storage.',
    stack: ['Next.js', 'OpenAI API', 'PostgreSQL'],
    link: 'https://github.com/your-handle/ai-snippets',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Shell'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Node.js', 'Next.js', 'Express', 'Tailwind'],
  },
  {
    title: 'Tooling',
    items: ['Git', 'Docker', 'PostgreSQL', 'Vercel', 'Jest', 'Figma'],
  },
]

const education = [
  {
    school: 'Bachelor of Computer Science',
    place: 'Your University',
    years: '2019 — 2023',
    details: 'Focused on distributed systems, UI engineering, and software architecture.',
  },
  {
    school: 'Certifications',
    place: 'Cloud, DevOps, or Security',
    years: '2023 — Present',
    details: 'Add your cert list, workshops, or notable bootcamps here.',
  },
]

const quickFacts = [
  { label: 'Role', value: 'Full-stack Engineer' },
  { label: 'Focus', value: 'Web, DevOps, AI tooling' },
  { label: 'Location', value: 'Remote / Global' },
  { label: 'Status', value: 'Open to opportunities' },
]

const terminalFeed = [
  { prompt: 'whoami', response: 'Chandi Sarandeni — building digital tools with a terminal-first mindset.' },
  { prompt: 'cat mission.txt', response: 'Ship fast, readable software that feels like a well-crafted CLI: concise, responsive, and purposeful.' },
  { prompt: 'ls values/', response: 'craft · clarity · curiosity · ownership · delivery' },
]

const toolbelt = ['VS Code', 'Neovim', 'Notion', 'Linear', 'Postman', 'Supabase']

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">
        <section className="mb-10 md:mb-14">
          <div className="rounded-3xl border border-lime-300/30 bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              terminal · ~/portfolio
            </div>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                  Chandi Sarandeni
                </h1>
                <p className="max-w-2xl text-base text-slate-300 md:text-lg">
                  Full-stack developer crafting human-friendly products with a coding-first, terminal-inspired
                  aesthetic. I like clean architectures, sharp UI, and steady delivery.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    className="rounded-lg border border-lime-400/60 bg-lime-400/10 px-4 py-2 font-semibold text-lime-100 shadow-[0_0_25px_rgba(132,204,22,0.15)] transition hover:-translate-y-[2px] hover:border-lime-300 hover:text-white"
                    href="mailto:you@example.com"
                  >
                    ping me
                  </a>
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 font-semibold text-slate-200 transition hover:-translate-y-[2px] hover:border-emerald-300/60 hover:text-white"
                    href="#projects"
                  >
                    view projects
                  </a>
                </div>
              </div>

              <div className="grid w-full max-w-sm grid-cols-2 gap-3 text-sm text-slate-200 md:max-w-md">
                {quickFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-emerald-500/10"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/80">{item.label}</p>
                    <p className="mt-1 text-base text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 md:mb-14">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-300/80">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              session.log
            </div>
            <div className="space-y-3 text-sm">
              {terminalFeed.map((line) => (
                <div
                  key={line.prompt}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3"
                >
                  <span className="mt-0.5 text-emerald-300">~/portfolio$</span>
                  <div>
                    <div className="font-semibold text-white">{line.prompt}</div>
                    <div className="text-slate-300">{line.response}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">ls projects/</p>
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
            </div>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
              03 visible
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-200 hover:-translate-y-[2px] hover:border-emerald-300/40"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <p className="text-sm text-slate-300">{project.description}</p>
                    </div>
                    <a
                      className="rounded-md border border-emerald-300/40 px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      open
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-200">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 md:mb-14">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">cat skills.txt</p>
            <h2 className="text-2xl font-semibold text-white">Skills & Toolbelt</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-inner shadow-emerald-500/10"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-emerald-300/30 bg-emerald-400/5 px-3 py-1 text-emerald-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-lime-300/30 bg-slate-900/80 p-5 shadow-[0_0_35px_rgba(132,204,22,0.18)]">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Tools in play</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {toolbelt.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-lime-300/30 bg-lime-400/10 px-3 py-1 text-lime-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 md:mb-14">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">history education/</p>
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{item.years}</p>
                    <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                    <p className="text-sm text-slate-300">{item.place}</p>
                  </div>
                  <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-200">
                    log
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            ready · /contact
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-md border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
              href="mailto:you@example.com"
            >
              Email
            </a>
            <a
              className="rounded-md border border-slate-700 px-3 py-2 font-semibold text-slate-200 transition hover:border-emerald-200 hover:text-white"
              href="https://github.com/your-handle"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-slate-700 px-3 py-2 font-semibold text-slate-200 transition hover:border-emerald-200 hover:text-white"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
