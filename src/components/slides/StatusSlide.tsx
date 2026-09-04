import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { ProgressBar } from '../ui/ProgressBar'

const progress = [
  { label: 'Backend Foundation', value: 100, tone: 'complete' as const },
  { label: 'Authentication & RBAC', value: 100, tone: 'complete' as const },
  { label: 'Events & Sessions', value: 100, tone: 'complete' as const },
  { label: 'Participants & QR', value: 100, tone: 'complete' as const },
  { label: 'Check-in Scanner', value: 100, tone: 'complete' as const },
  { label: 'Frontend Modules', value: 100, tone: 'complete' as const },
  { label: 'Attendance & Analytics', value: 100, tone: 'complete' as const },
  { label: 'Audit Logs', value: 100, tone: 'complete' as const },
  { label: 'CSV Reports', value: 100, tone: 'complete' as const },
  { label: 'Realtime WebSocket', value: 100, tone: 'complete' as const },
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
            tone={item.tone}
            delay={i * 0.05}
          />
        ))}
      </div>
    </Section>
  )
}
