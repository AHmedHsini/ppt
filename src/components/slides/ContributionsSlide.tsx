import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

const contributions = [
  {
    name: 'Ahmed Hsini',
    role: 'Full Stack Developer',
    items: [
      'Project Management',
      'Architecture',
      'User Backend Development',
      'RBAC',
      'Integration',    ],
  },
  {
    name: 'Emna Missaoui',
    role: 'Full Stack Developer',
    items: ['Backend', 'Event Management', 'Session Management'],
  },
  {
    name: 'Yosr Samali',
    role: 'Full Stack Developer',
    items: [
      'Backend',
      'Participant Management',
      'QR Code Management',
      'Check-in Scanner',
    ],
  },
]

export function ContributionsSlide() {
  return (
    <Section id="contributions">
      <SectionTitle eyebrow="Impact" title="Team Contributions" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-ieee via-ieee-light to-transparent md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{ originY: 0 }}
        />

        <div className="space-y-5">
          {contributions.map((person, i) => (
            <motion.div
              key={person.name}
              className="relative md:pl-14"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <motion.span
                className="absolute left-5 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-ieee-light shadow-[0_0_14px_#1a8bc4] md:block"
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
              />
              <div className="glass-strong rounded-3xl p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {person.name}
                  </h3>
                  <span className="text-sm text-ieee-light">{person.role}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {person.items.map((item, j) => (
                    <motion.span
                      key={item}
                      className="rounded-lg bg-white/5 px-3 py-1.5 font-body text-sm text-white/75"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.35, delay: i * 0.08 + j * 0.03 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
