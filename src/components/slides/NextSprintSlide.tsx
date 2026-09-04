import { motion } from 'framer-motion'
import {
  Building2,
  ScanLine,
  LayoutDashboard,
  BarChart3,
  ScrollText,
  Radio,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const delivered = [
  { icon: Building2, label: 'Multi-tenant Orgs' },
  { icon: ScanLine, label: 'QR Check-in' },
  { icon: LayoutDashboard, label: 'Live Dashboards' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: ScrollText, label: 'Audit Trail' },
  { icon: FileSpreadsheet, label: 'CSV Reports' },
  { icon: Radio, label: 'Realtime Feed' },
  { icon: ShieldCheck, label: 'RBAC & CI' },
]

export function NextSprintSlide() {
  return (
    <Section id="next">
      <SectionTitle eyebrow="Outcome" title="What We Delivered" />

      <motion.p
        className="mx-auto mb-8 max-w-2xl text-center font-body text-sm text-white/60 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        End-to-end IEEE Student Branch event operations — from registration to
        live QR check-in, attendance tracking, and governance.
      </motion.p>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {delivered.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="glass flex flex-col items-center rounded-2xl border-emerald-400/20 px-4 py-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, borderColor: 'rgba(52, 211, 153, 0.45)' }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="font-display text-base font-semibold">{item.label}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
