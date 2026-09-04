import { motion } from 'framer-motion'
import {
  Users,
  FileSpreadsheet,
  QrCode,
  Download,
  ScanLine,
  Camera,
  UserRound,
  ShieldAlert,
  Check,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const completed = [
  { icon: Users, label: 'Participant Directory', sub: 'CRUD & search' },
  { icon: FileSpreadsheet, label: 'CSV Import', sub: 'Bulk registration' },
  { icon: QrCode, label: 'QR Generation', sub: 'Per registration' },
  { icon: Download, label: 'QR Download', sub: 'Participant codes' },
  { icon: ScanLine, label: 'Check-in Logic', sub: 'Duplicate prevention' },
  { icon: Camera, label: 'Scanner Desk', sub: 'Camera + manual' },
  { icon: UserRound, label: 'Volunteers', sub: 'Event & session staff' },
  { icon: ShieldAlert, label: 'Access Rules', sub: 'Organizer / volunteer' },
]

export function Sprint2Slide() {
  return (
    <Section id="sprint2">
      <SectionTitle eyebrow="Weeks 5–6" title="Sprint 2" />

      <motion.div
        className="mb-8 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-center font-body text-sm text-white/50">
          Participants, QR codes, and live check-in operations
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-body text-xs font-medium text-emerald-300">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          Completed
        </span>
      </motion.div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
              <p className="relative font-display text-sm font-semibold sm:text-base">
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
