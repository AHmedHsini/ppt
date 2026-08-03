import {
  FileSearch,
  Network,
  Database,
  Layers,
  FolderKanban,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

const items = [
  { icon: FileSearch, label: 'Requirements Analysis' },
  { icon: Network, label: 'System Architecture' },
  { icon: Database, label: 'Database Design' },
  { icon: Layers, label: 'Technology Stack' },
  { icon: FolderKanban, label: 'Monorepo Setup' },
]

export function Sprint0Slide() {
  return (
    <Section id="sprint0">
      <SectionTitle eyebrow="Foundation" title="Sprint 0" />
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <GlassCard key={item.label} delay={i * 0.06} className="!p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="font-display text-sm font-semibold leading-tight sm:text-base">
                {item.label}
              </p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
