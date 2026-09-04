import { motion } from 'framer-motion'
import {
  Compass,
  KeyRound,
  QrCode,
  Rocket,
  Check,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const sprints = [
  {
    n: '00',
    name: 'Sprint 0',
    weeks: 'Weeks 1–2',
    focus: 'Analysis & design',
    detail: 'Scope, architecture, database, and UI/UX',
    icon: Compass,
  },
  {
    n: '01',
    name: 'Sprint 1',
    weeks: 'Weeks 3–4',
    focus: 'Auth & foundation',
    detail: 'RBAC, multi-tenancy, events, and sessions',
    icon: KeyRound,
  },
  {
    n: '02',
    name: 'Sprint 2',
    weeks: 'Weeks 5–6',
    focus: 'QR & check-in',
    detail: 'Participants, QR codes, and scanner desk',
    icon: QrCode,
  },
  {
    n: '03',
    name: 'Sprint 3',
    weeks: 'Weeks 7–8',
    focus: 'Reports & delivery',
    detail: 'Dashboards, security, CI, and final docs',
    icon: Rocket,
  },
]

export function ProgressSlide() {
  return (
    <Section id="progress">
      <SectionTitle eyebrow="Roadmap" title="Project Progress" />

      <motion.p
        className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-white/50 sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Eight weeks · four sprints · end-to-end delivery
      </motion.p>

      <div className="relative mx-auto max-w-6xl">
        {/* Timeline rail */}
        <motion.div
          className="absolute left-[12%] right-[12%] top-[52px] hidden h-[2px] lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
        >
          <div className="h-full w-full rounded-full bg-gradient-to-r from-ieee via-ieee-light to-emerald-400/80" />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sprints.map((sprint, i) => {
            const Icon = sprint.icon
            return (
              <motion.article
                key={sprint.name}
                className="group relative flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {/* Node on timeline */}
                <div className="relative z-10 mb-5 flex justify-center">
                  <motion.div
                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/15 bg-surface-2 shadow-[0_0_0_6px_rgba(7,11,18,0.9)]"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ieee to-ieee-dark text-white shadow-[0_8px_24px_rgba(0,98,155,0.45)]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="glass-strong relative flex flex-1 flex-col overflow-hidden rounded-[1.35rem] px-5 pb-5 pt-6 text-center"
                  whileHover={{
                    y: -6,
                    borderColor: 'rgba(26, 139, 196, 0.45)',
                    boxShadow: '0 20px 48px rgba(0, 98, 155, 0.18)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Soft top wash */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ieee/15 to-transparent" />

                  <div className="relative z-10 mb-3 flex items-center justify-center gap-2">
                    <span className="font-display text-[11px] font-semibold tracking-[0.22em] text-ieee-light">
                      {sprint.n}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/25" />
                    <span className="font-body text-[11px] uppercase tracking-[0.14em] text-white/40">
                      {sprint.weeks}
                    </span>
                  </div>

                  <h3 className="relative z-10 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {sprint.name}
                  </h3>

                  <p className="relative z-10 mt-3 font-display text-base font-semibold text-ieee-light sm:text-lg">
                    {sprint.focus}
                  </p>

                  <p className="relative z-10 mt-2 flex-1 font-body text-sm leading-relaxed text-white/45">
                    {sprint.detail}
                  </p>

                  <div className="relative z-10 mt-5 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 font-body text-xs font-medium text-emerald-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      Completed
                    </span>
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
