import { motion } from 'framer-motion'
import {
  FileSearch,
  Network,
  Database,
  Layers,
  FolderKanban,
  Check,
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
      <SectionTitle eyebrow="Weeks 1–2" title="Sprint 0" />
      <motion.div
        className="mb-8 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-center font-body text-sm text-white/50">
          Analysis, architecture, and design foundations
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-body text-xs font-medium text-emerald-300">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Completed
        </span>
      </motion.div>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <GlassCard key={item.label} delay={i * 0.06} className="!p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee/30 to-ieee-dark/40 text-ieee-light shadow-[0_8px_20px_rgba(0,98,155,0.2)]">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="font-display text-sm font-semibold leading-snug sm:text-base">
                {item.label}
              </p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
