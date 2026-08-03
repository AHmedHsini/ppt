import { motion } from 'framer-motion'

export function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-ieee/30 blur-[120px]"
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-ieee-light/20 blur-[110px]"
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[300px] w-[500px] rounded-full bg-ieee-dark/40 blur-[100px]"
        animate={{ x: [0, 40, -40, 0], opacity: [0.4, 0.7, 0.5, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
