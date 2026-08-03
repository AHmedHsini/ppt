import { motion } from 'framer-motion'
import { Globe, Layers, Server, Database, HardDrive } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const layers = [
  { icon: Globe, label: 'Browser', detail: 'Client' },
  { icon: Layers, label: 'React', detail: 'Frontend' },
  { icon: Server, label: 'NestJS API', detail: 'Backend' },
  { icon: Database, label: 'Prisma', detail: 'ORM' },
  { icon: HardDrive, label: 'PostgreSQL', detail: 'Database' },
]

export function ArchitectureSlide() {
  return (
    <Section id="architecture">
      <SectionTitle eyebrow="System" title="Architecture" />
      <div className="mx-auto flex max-w-xl flex-col items-center gap-0">
        {layers.map((layer, i) => {
          const Icon = layer.icon
          return (
            <div key={layer.label} className="flex w-full flex-col items-center">
              <motion.div
                className="glass-strong relative z-10 flex w-full items-center gap-5 rounded-2xl px-6 py-5"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(0, 98, 155, 0.55)',
                  boxShadow: '0 16px 40px rgba(0, 98, 155, 0.2)',
                }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ieee/25 text-ieee-light">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-display text-xl font-bold sm:text-2xl">{layer.label}</p>
                  <p className="text-sm text-white/45">{layer.detail}</p>
                </div>
              </motion.div>

              {i < layers.length - 1 && (
                <motion.div
                  className="relative my-1 flex h-10 w-px flex-col items-center"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  style={{ originY: 0 }}
                >
                  <div className="h-full w-px bg-gradient-to-b from-ieee to-ieee-light" />
                  <motion.span
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ieee-light shadow-[0_0_12px_#1a8bc4]"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
