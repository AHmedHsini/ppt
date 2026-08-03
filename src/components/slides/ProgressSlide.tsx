import { motion } from 'framer-motion'
import { CheckCircle2, Construction } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const sprints = [
  {
    name: 'Sprint 0',
    status: 'Completed',
    icon: CheckCircle2,
    tone: 'complete' as const,
  },
  {
    name: 'Sprint 1',
    status: 'Completed',
    icon: CheckCircle2,
    tone: 'complete' as const,
  },
  {
    name: 'Sprint 2',
    status: 'In Progress',
    icon: Construction,
    tone: 'progress' as const,
  },
]

export function ProgressSlide() {
  return (
    <Section id="progress">
      <SectionTitle eyebrow="Roadmap" title="Project Progress" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-emerald-400 via-emerald-400 to-amber-400 md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {sprints.map((sprint, i) => {
            const Icon = sprint.icon
            const isProgress = sprint.tone === 'progress'
            return (
              <motion.div
                key={sprint.name}
                className={`glass-strong relative flex flex-col items-center rounded-3xl px-6 py-10 text-center ${
                  isProgress ? 'border-amber-400/30' : 'border-emerald-400/25'
                }`}
                initial={{ opacity: 0, y: 36, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{
                  y: -8,
                  boxShadow: isProgress
                    ? '0 24px 48px rgba(251, 191, 36, 0.15)'
                    : '0 24px 48px rgba(52, 211, 153, 0.15)',
                }}
              >
                <motion.div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${
                    isProgress
                      ? 'bg-amber-400/20 text-amber-300'
                      : 'bg-emerald-400/20 text-emerald-300'
                  }`}
                  animate={
                    isProgress
                      ? { scale: [1, 1.08, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </motion.div>
                <p className="font-display text-3xl font-extrabold sm:text-4xl">
                  {sprint.name}
                </p>
                <p
                  className={`mt-3 font-display text-lg font-semibold ${
                    isProgress ? 'text-amber-300' : 'text-emerald-300'
                  }`}
                >
                  {sprint.status} {isProgress ? '🚧' : '✅'}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
