import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

export function DemoSlide() {
  return (
    <Section id="demo">
      <SectionTitle eyebrow="Live Product" title="Feature Demo" />
      <motion.p
        className="mx-auto mb-6 max-w-2xl text-center font-body text-sm text-white/50 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        Walkthrough of landing, dashboards, events, check-in, attendance,
        analytics, audit logs, and platform admin.
      </motion.p>
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.55 }}
      >
        <video
          className="aspect-[16/10] w-full bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          poster=""
        >
          <source src="/demo/ieee-checkin-feature-demo.mp4" type="video/mp4" />
          <source src="/demo/ieee-checkin-feature-demo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </Section>
  )
}
