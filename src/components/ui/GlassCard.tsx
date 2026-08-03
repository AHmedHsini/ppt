import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type GlassCardProps = {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-5 sm:p-6 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
              borderColor: 'rgba(0, 98, 155, 0.55)',
              boxShadow: '0 20px 40px rgba(0, 98, 155, 0.18)',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
