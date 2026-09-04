import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart3,
  ClipboardList,
  FileSpreadsheet,
  ScrollText,
  Radio,
  ShieldCheck,
  FlaskConical,
  Container,
  BookOpen,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const completed = [
  { icon: LayoutDashboard, label: 'Live Dashboards', sub: 'KPIs & check-in feed' },
  { icon: ClipboardList, label: 'Attendance Views', sub: 'Session intelligence' },
  { icon: BarChart3, label: 'Analytics', sub: 'Charts & heatmap' },
  { icon: FileSpreadsheet, label: 'CSV Reports', sub: 'Exports' },
  { icon: ScrollText, label: 'Audit Logs', sub: 'Governance trail' },
  { icon: Radio, label: 'Realtime', sub: 'WebSocket updates' },
  { icon: ShieldCheck, label: 'Security Hardening', sub: 'Headers, CORS, scans' },
  { icon: FlaskConical, label: 'Test Suite', sub: 'Unit & security tests' },
  { icon: Container, label: 'Docker & CI', sub: 'DevSecOps MVP' },
  { icon: BookOpen, label: 'Final Docs', sub: 'README & evidence' },
]

export function Sprint3Slide() {
  return (
    <Section id="sprint3">
      <SectionTitle eyebrow="Final Delivery" title="Sprint 3" />

      <motion.p
        className="mb-5 text-center font-body text-xs uppercase tracking-[0.28em] text-emerald-300 sm:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        Dashboards · Reports · Security · Deployment · Completed
      </motion.p>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
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
              <p className="font-display text-sm font-semibold leading-tight sm:text-[15px]">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-emerald-200/60">{item.sub}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
