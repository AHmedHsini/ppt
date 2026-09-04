import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const sprints = [
  { name: 'Sprint 0', focus: 'Analysis & design' },
  { name: 'Sprint 1', focus: 'Auth & foundation' },
  { name: 'Sprint 2', focus: 'QR & check-in' },
  { name: 'Sprint 3', focus: 'Reports & delivery' },
]

export function ProgressSlide() {
  return (
    <Section id="progress">
      <SectionTitle eyebrow="Roadmap" title="Project Progress" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="absolute left-[6%] right-[6%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-400 lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sprints.map((sprint, i) => (
            <motion.div
              key={sprint.name}
              className="glass-strong relative flex flex-col items-center rounded-3xl border-emerald-400/25 px-5 py-8 text-center"
              initial={{ opacity: 0, y: 36, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 24px 48px rgba(52, 211, 153, 0.15)',
              }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-300">
                <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="font-display text-2xl font-extrabold sm:text-3xl">
                {sprint.name}
              </p>
              <p className="mt-2 text-xs text-white/45 sm:text-sm">{sprint.focus}</p>
              <p className="mt-3 font-display text-base font-semibold text-emerald-300">
                Completed ✅
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
