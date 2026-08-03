import { motion } from 'framer-motion'
import {
  ClipboardX,
  CalendarDays,
  QrCode,
  LayoutDashboard,
  Building2,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const goals = [
  { icon: ClipboardX, label: 'Replace Manual', sub: 'Attendance' },
  { icon: CalendarDays, label: 'Digital Event', sub: 'Management' },
  { icon: QrCode, label: 'QR', sub: 'Check-in' },
  { icon: LayoutDashboard, label: 'Real-time', sub: 'Dashboards' },
  { icon: Building2, label: 'Multi-tenant', sub: 'Platform' },
]

export function GoalSlide() {
  return (
    <Section id="goal">
      <SectionTitle eyebrow="Vision" title="Project Goal" />
      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-5">
        {goals.map((goal, i) => {
          const Icon = goal.icon
          return (
            <motion.div
              key={goal.label}
              className="glass group flex flex-col items-center rounded-2xl px-3 py-8 text-center"
              initial={{ opacity: 0, y: 32, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(0, 98, 155, 0.55)',
                boxShadow: '0 20px 40px rgba(0, 98, 155, 0.2)',
              }}
            >
              <motion.div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ieee/20 text-ieee-light"
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </motion.div>
              <p className="font-display text-base font-semibold leading-tight sm:text-lg">
                {goal.label}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-ieee-light sm:text-lg">
                {goal.sub}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
