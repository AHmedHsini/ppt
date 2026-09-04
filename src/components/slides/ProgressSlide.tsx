import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const sprints = [
  {
    name: 'Sprint 0',
    status: 'Completed',
    icon: CheckCircle2,
  },
  {
    name: 'Sprint 1',
    status: 'Completed',
    icon: CheckCircle2,
  },
  {
    name: 'Sprint 2',
    status: 'Completed',
    icon: CheckCircle2,
  },
]

export function ProgressSlide() {
  return (
    <Section id="progress">
      <SectionTitle eyebrow="Roadmap" title="Project Progress" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-400 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {sprints.map((sprint, i) => {
            const Icon = sprint.icon
            return (
              <motion.div
                key={sprint.name}
                className="glass-strong relative flex flex-col items-center rounded-3xl border-emerald-400/25 px-6 py-10 text-center"
                initial={{ opacity: 0, y: 36, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 48px rgba(52, 211, 153, 0.15)',
                }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-300">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <p className="font-display text-3xl font-extrabold sm:text-4xl">
                  {sprint.name}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-emerald-300">
                  {sprint.status} ✅
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
