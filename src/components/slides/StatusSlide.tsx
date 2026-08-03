import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { ProgressBar } from '../ui/ProgressBar'

const progress = [
  { label: 'Backend Foundation', value: 100, tone: 'complete' as const },
  { label: 'Authentication', value: 100, tone: 'complete' as const },
  { label: 'RBAC', value: 100, tone: 'complete' as const },
  { label: 'Events Backend', value: 100, tone: 'complete' as const },
  { label: 'Sessions Backend', value: 100, tone: 'complete' as const },
  { label: 'Participants Backend', value: 100, tone: 'complete' as const },
  { label: 'QR Backend', value: 100, tone: 'complete' as const },
  { label: 'Scanner Backend', value: 100, tone: 'complete' as const },
  {
    label: 'Frontend Business Modules',
    status: 'In Progress',
    tone: 'progress' as const,
  },
  {
    label: 'Reports',
    status: 'Not Started',
    tone: 'pending' as const,
  },
]

export function StatusSlide() {
  return (
    <Section id="status">
      <SectionTitle eyebrow="Metrics" title="Current Status" />
      <div className="mx-auto grid max-w-5xl gap-5 sm:gap-6 md:grid-cols-2">
        {progress.map((item, i) => (
          <ProgressBar
            key={item.label}
            label={item.label}
            value={item.value}
            status={item.status}
            tone={item.tone}
            delay={i * 0.05}
          />
        ))}
      </div>
    </Section>
  )
}
