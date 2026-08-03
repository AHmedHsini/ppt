import { motion } from 'framer-motion'
import {
  Calendar,
  Users,
  QrCode,
  ScanLine,
  PanelsTopLeft,
  Clock3,
  UserRound,
  Smartphone,
  ScanBarcode,
  LayoutDashboard,
  BarChart3,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const completed = [
  { icon: Calendar, label: 'Event Management', sub: 'Session & Event APIs' },
  { icon: Users, label: 'Participant Management', sub: 'Backend Complete' },
  { icon: QrCode, label: 'QR Code Management', sub: 'Backend Complete' },
  { icon: ScanLine, label: 'Check-in Scanner', sub: 'Backend Complete' },
]

const inProgress = [
  { icon: PanelsTopLeft, label: 'Frontend for Events' },
  { icon: Clock3, label: 'Frontend for Sessions' },
  { icon: UserRound, label: 'Frontend for Participants' },
  { icon: Smartphone, label: 'Frontend QR Interface' },
  { icon: ScanBarcode, label: 'Scanner UI' },
  { icon: LayoutDashboard, label: 'Attendance Dashboard' },
  { icon: BarChart3, label: 'Reports & Analytics' },
]

export function Sprint2Slide() {
  return (
    <Section id="sprint2">
      <SectionTitle eyebrow="Active Sprint" title="Sprint 2" />

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-emerald-300 sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Backend Progress · Completed
      </motion.p>

      <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {completed.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-center backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(52, 211, 153, 0.15)',
              }}
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="font-display text-sm font-semibold sm:text-base">{item.label}</p>
              <p className="mt-1 text-xs text-emerald-200/60">{item.sub}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-amber-300 sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Still In Progress
      </motion.p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {inProgress.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-ieee/40 bg-gradient-to-br from-ieee/20 to-amber-500/10 p-4 text-center backdrop-blur-xl sm:p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(0, 98, 155, 0.2)',
              }}
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-ieee/30 text-ieee-light">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="font-display text-sm font-semibold leading-tight sm:text-[15px]">
                {item.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
