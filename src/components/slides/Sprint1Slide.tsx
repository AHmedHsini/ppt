import { motion } from 'framer-motion'
import {
  Boxes,
  KeyRound,
  ShieldCheck,
  Database,
  Route,
  FileJson,
  FlaskConical,
  Check,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

const features = [
  { icon: Boxes, label: 'Core Platform' },
  { icon: Database, label: 'Database Preparation' },
  { icon: KeyRound, label: 'Authentication' },
  { icon: ShieldCheck, label: 'Authorization (RBAC)' },
  { icon: Route, label: 'Protected Routes' },
  { icon: FileJson, label: 'Swagger' },
  { icon: FlaskConical, label: 'Testing' },
]

export function Sprint1Slide() {
  return (
    <Section id="sprint1">
      <SectionTitle eyebrow="Weeks 3–4" title="Sprint 1" />
      <motion.div
        className="mb-8 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-center font-body text-sm text-white/50">
          Auth, RBAC, multi-tenancy, and event foundations
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-body text-xs font-medium text-emerald-300">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Completed
        </span>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <GlassCard key={feature.label} delay={i * 0.04} className="!p-4 text-center sm:!p-5">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee/30 to-ieee-dark/40 text-ieee-light shadow-[0_8px_20px_rgba(0,98,155,0.2)]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="font-display text-sm font-semibold leading-snug sm:text-[15px]">
                {feature.label}
              </p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
