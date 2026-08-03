import { motion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`mb-12 sm:mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <motion.p
          className="mb-3 font-body text-xs font-medium uppercase tracking-[0.28em] text-ieee-light sm:text-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
    </div>
  )
}
