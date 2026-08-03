import { motion } from 'framer-motion'
import {
  Calendar,
  Clock3,
  Users,
  QrCode,
  ScanLine,
  UserCheck,
  BarChart3,
  LineChart,
  Rocket,
  FlaskConical,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const frontend = [
  { icon: Calendar, label: 'Events' },
  { icon: Clock3, label: 'Sessions' },
  { icon: Users, label: 'Participants' },
  { icon: QrCode, label: 'QR Management' },
  { icon: ScanLine, label: 'Scanner' },
]

const then = [
  { icon: UserCheck, label: 'Attendance' },
  { icon: BarChart3, label: 'Reports' },
  { icon: LineChart, label: 'Analytics' },
  { icon: Rocket, label: 'Deployment' },
  { icon: FlaskConical, label: 'Testing' },
]

export function NextSprintSlide() {
  return (
    <Section id="next">
      <SectionTitle eyebrow="Roadmap" title="Next Steps" />

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-ieee-light sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Complete Frontend For
      </motion.p>

      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {frontend.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="glass flex flex-col items-center rounded-2xl px-4 py-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, borderColor: 'rgba(0, 98, 155, 0.55)' }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-ieee/25 text-ieee-light">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="font-display text-base font-semibold">{item.label}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-white/45 sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Then Implement
      </motion.p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {then.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="glass flex flex-col items-center rounded-2xl px-4 py-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              whileHover={{ y: -6, borderColor: 'rgba(0, 98, 155, 0.4)' }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/8 text-white/70">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="font-display text-base font-semibold text-white/80">
                {item.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
