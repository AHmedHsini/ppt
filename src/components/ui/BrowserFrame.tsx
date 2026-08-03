import type { ReactNode } from 'react'

type BrowserFrameProps = {
  title: string
  children: ReactNode
}

export function BrowserFrame({ title, children }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0a1220] shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center font-body text-[11px] text-white/45">
          {title}
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#0d1626] to-[#0a1018]">{children}</div>
    </div>
  )
}
