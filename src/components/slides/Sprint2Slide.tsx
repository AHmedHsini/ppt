import { motion } from 'framer-motion'
import {
  Calendar,
  Users,
  QrCode,
  ScanLine,
  PanelsTopLeft,
  UserRound,
  LayoutDashboard,
  BarChart3,
  ScrollText,
  Radio,
  FileSpreadsheet,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const completed = [
  { icon: Calendar, label: 'Events & Sessions', sub: 'API + UI' },
  { icon: Users, label: 'Participants', sub: 'Directory, CSV, QR' },
  { icon: QrCode, label: 'QR Issuance', sub: 'Per registration' },
  { icon: ScanLine, label: 'Check-in Desk', sub: 'Camera + manual' },
  { icon: PanelsTopLeft, label: 'Org Dashboards', sub: 'Live KPIs' },
  { icon: UserRound, label: 'Volunteers', sub: 'Assignments' },
  { icon: LayoutDashboard, label: 'Attendance', sub: 'Live stream' },
  { icon: BarChart3, label: 'Analytics', sub: 'Charts & heatmap' },
  { icon: ScrollText, label: 'Audit Logs', sub: 'Governance trail' },
  { icon: FileSpreadsheet, label: 'CSV Reports', sub: 'Exports' },
  { icon: Radio, label: 'Realtime', sub: 'WebSocket feed' },
]

export function Sprint2Slide() {
  return (
    <Section id="sprint2">
      <SectionTitle eyebrow="Delivery Sprint" title="Sprint 2" />

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-emerald-300 sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Full Stack · Completed
      </motion.p>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {completed.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-center backdrop-blur-xl sm:p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
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
    </Section>
  )
}
