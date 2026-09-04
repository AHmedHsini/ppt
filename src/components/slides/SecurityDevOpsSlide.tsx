import { motion } from 'framer-motion'
import {
  KeyRound,
  ShieldCheck,
  Building2,
  ScrollText,
  Lock,
  ScanSearch,
  GitBranch,
  Container,
  Activity,
  DatabaseBackup,
  FileJson2,
  Shield,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const appSecurity = [
  { icon: KeyRound, label: 'JWT + refresh tokens', sub: 'Hashed & revocable' },
  { icon: Lock, label: 'bcrypt passwords', sub: 'Secrets never logged' },
  { icon: ShieldCheck, label: 'RBAC roles', sub: 'Platform → Volunteer' },
  { icon: Building2, label: 'Tenant isolation', sub: 'Org-scoped access' },
  { icon: ScrollText, label: 'Audit trail', sub: 'Governance logs' },
  { icon: Shield, label: 'HTTP hardening', sub: 'Helmet, CORS, limits' },
]

const devops = [
  { icon: GitBranch, label: 'GitHub Actions CI', sub: 'Lint, tests, build' },
  { icon: ScanSearch, label: 'Security scans', sub: 'Gitleaks, OSV, SAST, Trivy' },
  { icon: Container, label: 'Docker stack', sub: 'Web + API + Postgres' },
  { icon: Activity, label: 'Observability', sub: 'Health, metrics, Grafana' },
  { icon: DatabaseBackup, label: 'Backup & restore', sub: 'Proven recovery test' },
  { icon: FileJson2, label: 'validate:mvp', sub: 'One local launch gate' },
]

export function SecurityDevOpsSlide() {
  return (
    <Section id="security">
      <SectionTitle eyebrow="Hardening" title="Security & DevOps" />

      <motion.p
        className="mx-auto mb-8 max-w-2xl text-center font-body text-sm text-white/55 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.45 }}
      >
        App security from Software Engineering, plus the DevSecOps MVP launch
        path — CI, scans, containers, and operations.
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <motion.p
            className="mb-4 text-center font-body text-xs uppercase tracking-[0.28em] text-ieee-light sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            Application Security
          </motion.p>
          <div className="grid grid-cols-2 gap-3">
            {appSecurity.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-ieee/30 bg-ieee/10 p-4 text-center backdrop-blur-xl sm:p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-ieee/25 text-ieee-light">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <p className="font-display text-sm font-semibold leading-tight">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{item.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <motion.p
            className="mb-4 text-center font-body text-xs uppercase tracking-[0.28em] text-emerald-300 sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            DevSecOps MVP
          </motion.p>
          <div className="grid grid-cols-2 gap-3">
            {devops.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-center backdrop-blur-xl sm:p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.04 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <p className="font-display text-sm font-semibold leading-tight">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-emerald-200/55">{item.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
