import { motion } from 'framer-motion'
import { Particles } from '../ui/Particles'

export function HeroSlide() {
  return (
    <section
      id="hero"
      className="snap-section relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8"
    >
      <Particles count={42} />
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.p
          className="mb-5 font-body text-xs font-medium uppercase tracking-[0.35em] text-ieee-light sm:text-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Final Internship Presentation
        </motion.p>

        <motion.h1
          className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gradient">IEEE Event</span>
          <br />
          <span className="text-white">Check-in Platform</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl font-body text-base text-white/55 sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          Multi-tenant QR check-in for IEEE Student Branches — delivered end to end.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-ieee to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        />

        <motion.div
          className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            In synergy with
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-5 sm:gap-8">
            <motion.div
              className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-md sm:h-[4.5rem] sm:px-6"
              whileHover={{ y: -3, borderColor: 'rgba(26, 139, 196, 0.45)' }}
              transition={{ duration: 0.25 }}
            >
              <img
                src="/logos/ieee-sac.png"
                alt="IEEE Tunisia Section Student Activities Committee"
                className="h-10 w-auto object-contain sm:h-12"
                draggable={false}
              />
            </motion.div>

            <span
              className="hidden h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent sm:block"
              aria-hidden
            />
            <span className="font-display text-lg font-semibold text-white/30 sm:hidden" aria-hidden>
              ×
            </span>

            <motion.div
              className="flex h-16 items-center justify-center overflow-hidden rounded-2xl border border-[#ff7900]/35 bg-[#ff7900]/10 p-1.5 shadow-[0_0_32px_rgba(255,121,0,0.12)] sm:h-[4.5rem] sm:p-2"
              whileHover={{ y: -3, borderColor: 'rgba(255, 121, 0, 0.65)' }}
              transition={{ duration: 0.25 }}
            >
              <img
                src="/logos/orange.png"
                alt="Orange"
                className="h-full w-auto rounded-xl object-contain"
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
