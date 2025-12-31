type TerminalLogProps = {
  entries: { prompt: string; output: string }[]
  title?: string
}

function TerminalLog({ entries, title = 'session.log' }: TerminalLogProps) {
  return (
    <section
      id="log"
      className="reveal scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.32)]"
    >
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-300/80">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        {title}
      </div>
      <div className="space-y-3 text-sm">
        {entries.map((line) => (
          <div
            key={line.prompt}
            className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/75 px-4 py-3"
          >
            <span className="mt-0.5 text-emerald-300">~/portfolio$</span>
            <div>
              <div className="font-semibold text-white">{line.prompt}</div>
              <div className="text-slate-300">{line.output}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TerminalLog
