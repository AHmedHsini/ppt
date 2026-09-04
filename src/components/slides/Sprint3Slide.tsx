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
  Check,
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
      <SectionTitle eyebrow="Weeks 7–8" title="Sprint 3" />

      <motion.div
        className="mb-8 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-center font-body text-sm text-white/50">
          Dashboards, reports, security, and final delivery
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-body text-xs font-medium text-emerald-300">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Completed
        </span>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {completed.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="glass group relative overflow-hidden rounded-[1.25rem] p-4 text-center sm:p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(0, 98, 155, 0.5)',
                boxShadow: '0 20px 40px rgba(0, 98, 155, 0.18)',
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ieee/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee/30 to-ieee-dark/40 text-ieee-light shadow-[0_8px_20px_rgba(0,98,155,0.2)]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="relative font-display text-sm font-semibold leading-tight sm:text-[15px]">
                {item.label}
              </p>
              <p className="relative mt-1 text-xs text-white/40">{item.sub}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
