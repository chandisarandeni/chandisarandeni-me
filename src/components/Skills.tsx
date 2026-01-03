import SectionHeader from './SectionHeader'

type SkillsProps = {
  skills: {
    languages: string[]
    frontend: string[]
    backend: string[]
    databases: string[]
    devops: string[]
  }
  tools: string[]
}

function Skills({ skills, tools }: SkillsProps) {
  const blocks = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'DevOps', items: skills.devops },
  ]

  return (
    <section id="stack" className="mb-12 scroll-mt-28">
      <SectionHeader label="cat stack.txt" title="Skills & Tools" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="reveal rounded-2xl border border-slate-800 bg-slate-900/75 p-5 shadow-inner shadow-emerald-500/10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{block.title}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {block.items.map((item) => (
                <span key={item} className="rounded-lg border border-emerald-300/30 bg-emerald-400/5 px-3 py-1 text-emerald-100">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="reveal reveal-delay-1 rounded-2xl border border-emerald-300/30 bg-slate-900/85 p-5 shadow-[0_0_26px_rgba(52,211,153,0.14)]">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Tools</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {tools.map((tool) => (
              <span key={tool} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1 text-slate-100">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
