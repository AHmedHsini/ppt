import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedCounter } from './AnimatedCounter'

type ProgressBarProps = {
  label: string
  value?: number
  status?: string
  delay?: number
  tone?: 'complete' | 'progress' | 'pending'
}

const barTone = {
  complete: 'from-ieee-dark via-ieee to-ieee-light',
  progress: 'from-ieee via-ieee-light to-amber-400',
  pending: 'from-white/20 to-white/10',
}

export function ProgressBar({
  label,
  value,
  status,
  delay = 0,
  tone = 'complete',
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.5 })
  const width = value ?? (status === 'In Progress' ? 55 : 0)

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-end justify-between gap-3">
        <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
          {label}
        </span>
        {status ? (
          <span
            className={`font-display text-sm font-bold sm:text-base ${
              tone === 'progress'
                ? 'text-amber-300'
                : tone === 'pending'
                  ? 'text-white/40'
                  : 'text-ieee-light'
            }`}
          >
            {status}
          </span>
        ) : (
          <AnimatedCounter
            value={value ?? 0}
            suffix="%"
            className="font-display text-lg font-bold text-ieee-light sm:text-xl"
          />
        )}
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${barTone[tone]}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${width}%` : 0 }}
          transition={{ duration: 0.75, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}
