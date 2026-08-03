import { motion } from 'framer-motion'
import { teamMembers } from '../../data/team'
import { Particles } from '../ui/Particles'
import { TeamPhoto } from '../ui/TeamPhoto'

const sprints = [
  { name: 'Sprint 0', mark: '✅', tone: 'text-emerald-300' },
  { name: 'Sprint 1', mark: '✅', tone: 'text-emerald-300' },
  { name: 'Sprint 2', mark: '🚧', tone: 'text-amber-300' },
]

export function ThankYouSlide() {
  return (
    <section
      id="thanks"
      className="snap-section relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-20"
    >
      <Particles count={48} />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ieee/20 via-transparent to-ieee/30"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-ieee-light sm:text-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Current Progress
        </motion.p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {sprints.map((sprint, i) => (
            <motion.div
              key={sprint.name}
              className="glass rounded-2xl px-5 py-3 sm:px-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="font-display text-lg font-bold sm:text-xl">
                {sprint.name}{' '}
                <span className={sprint.tone}>{sprint.mark}</span>
              </span>
            </motion.div>
          ))}
        </div>


        <motion.h2
          className="font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="text-gradient">Thank You For Your Attention</span>
        </motion.h2>

        <motion.p
          className="mt-6 font-display text-3xl font-semibold text-white/80 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          Questions?
        </motion.p>

        
        <motion.div
          className="mt-12 flex items-center justify-center gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: i * 0.35,
                ease: 'easeInOut',
              }}
            >
              <TeamPhoto
                src={member.photo}
                alt={member.name}
                size="sm"
                objectPosition={member.objectPosition}
                animate={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
