import {
  Boxes,
  KeyRound,
  ShieldCheck,
  Building2,
  Settings2,
  Users,
  MailPlus,
  LayoutDashboard,
  LogIn,
  Route,
  FileJson,
  FlaskConical,
} from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'

const features = [
  { icon: Boxes, label: 'Core Platform' },
  { icon: KeyRound, label: 'Authentication' },
  { icon: ShieldCheck, label: 'Authorization (RBAC)' },
  { icon: Building2, label: 'Multi-Tenant Organizations' },
  { icon: Settings2, label: 'Organization Management' },
  { icon: Users, label: 'Memberships' },
  { icon: MailPlus, label: 'Invitations' },
  { icon: LayoutDashboard, label: 'Admin Dashboard' },
  { icon: LogIn, label: 'Frontend Authentication' },
  { icon: Route, label: 'Protected Routes' },
  { icon: FileJson, label: 'Swagger' },
  { icon: FlaskConical, label: 'Testing' },
]

export function Sprint1Slide() {
  return (
    <Section id="sprint1">
      <SectionTitle eyebrow="Core Platform" title="Sprint 1" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <GlassCard key={feature.label} delay={i * 0.04} className="!p-4 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className="font-display text-sm font-semibold leading-tight sm:text-[15px]">
                {feature.label}
              </p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
