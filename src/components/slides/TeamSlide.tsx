import { motion } from 'framer-motion'
import { teamMembers } from '../../data/team'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { TeamPhoto } from '../ui/TeamPhoto'

export function TeamSlide() {
  return (
    <Section id="team">
      <SectionTitle eyebrow="People" title="Meet the Team" />
      <div className="grid gap-5 md:grid-cols-3">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            className="glass-strong group relative flex flex-col items-center overflow-hidden rounded-3xl px-6 py-8 text-center"
            initial={{ opacity: 0, y: 48, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -10,
              borderColor: 'rgba(0, 98, 155, 0.65)',
              boxShadow: '0 28px 50px rgba(0, 98, 155, 0.28)',
            }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-ieee/20 blur-2xl" />

            <div className="relative mb-6">
              <TeamPhoto
                src={member.photo}
                alt={member.name}
                size="lg"
                objectPosition={member.objectPosition}
              />
            </div>

            <h3 className="relative font-display text-2xl font-bold sm:text-3xl">
              {member.name}
            </h3>
            <p className="relative mt-1 text-ieee-light">{member.role}</p>
            {member.subtitle && (
              <p className="relative mt-0.5 text-sm text-white/45">{member.subtitle}</p>
            )}

            <motion.div
              className="relative my-5 h-px w-16 bg-gradient-to-r from-transparent via-ieee to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            />

            <ul className="relative w-full space-y-2 text-left">
              {member.responsibilities.map((item, j) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2.5 font-body text-sm text-white/70"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.35, delay: i * 0.08 + j * 0.04 }}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ieee-light" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
