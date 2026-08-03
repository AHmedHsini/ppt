import { motion, AnimatePresence } from 'framer-motion'

type LoadingScreenProps = {
  visible: boolean
}

export function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-ieee shadow-[0_0_40px_rgba(0,98,155,0.5)]"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="font-display text-xl font-bold">IEEE</span>
          </motion.div>
          <motion.p
            className="font-display text-2xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Event Check-in
          </motion.p>
          <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-ieee to-ieee-light"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
