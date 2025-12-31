import SectionHeader from './SectionHeader'

type Project = {
  name: string
  description: string
  stack: string[]
  link: string
  status: string
}

type ProjectsProps = {
  items: Project[]
}

function Projects({ items }: ProjectsProps) {
  return (
    <section id="work" className="mb-12">
      <SectionHeader
        label="ls projects/"
        title="Recent Work"
        action={
          <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
            {items.length.toString().padStart(2, '0')} items
          </span>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.name}
            className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition duration-200 hover:-translate-y-[3px] hover:border-emerald-300/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">{project.status}</p>
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
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-200">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
