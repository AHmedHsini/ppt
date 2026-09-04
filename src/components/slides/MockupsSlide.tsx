import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { BrowserFrame } from '../ui/BrowserFrame'

const screenshots = [
  {
    id: 'landing',
    label: 'Landing',
    title: 'ieee-checkin.app',
    src: '/screenshots/landing.png',
    caption: 'Public Landing — PESTGM 7.0',
  },
  {
    id: 'login',
    label: 'Login',
    title: 'ieee-checkin.app / login',
    src: '/screenshots/login.png',
    caption: 'Sign-in Workspace',
  },
  {
    id: 'org',
    label: 'Dashboard',
    title: 'ieee-checkin.app / dashboard',
    src: '/screenshots/org-dashboard.png',
    caption: 'Organization Dashboard',
  },
  {
    id: 'events',
    label: 'Events',
    title: 'ieee-checkin.app / events',
    src: '/screenshots/events.png',
    caption: 'Events & Sessions',
  },
  {
    id: 'checkin',
    label: 'Check-in',
    title: 'ieee-checkin.app / check-in',
    src: '/screenshots/check-in.png',
    caption: 'QR Check-in Desk',
  },
  {
    id: 'attendance',
    label: 'Attendance',
    title: 'ieee-checkin.app / attendance',
    src: '/screenshots/attendance.png',
    caption: 'Live Attendance',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'ieee-checkin.app / analytics',
    src: '/screenshots/analytics.png',
    caption: 'Analytics & Charts',
  },
  {
    id: 'platform',
    label: 'Platform',
    title: 'ieee-checkin.app / platform',
    src: '/screenshots/platform.png',
    caption: 'Platform Administration',
  },
]

export function MockupsSlide() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [])

  const current = screenshots[index]

  return (
    <Section id="mockups">
      <SectionTitle eyebrow="Live Product" title="Platform Screenshots" />

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {screenshots.map((shot, i) => (
          <button
            key={shot.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full px-3 py-1.5 font-body text-sm transition-all duration-300 sm:px-4 ${
              index === i
                ? 'bg-ieee text-white shadow-[0_8px_24px_rgba(0,98,155,0.35)]'
                : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            {shot.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrowserFrame title={current.title}>
              <div className="flex max-h-[58vh] items-center justify-center bg-[#e8eef5] p-2 sm:p-3">
                <img
                  src={current.src}
                  alt={current.caption}
                  className="max-h-[54vh] w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </BrowserFrame>
            <motion.p
              className="mt-5 text-center font-display text-lg font-semibold text-white/70 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {current.caption}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((shot, i) => (
            <motion.button
              key={shot.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`glass overflow-hidden rounded-xl text-left transition-all ${
                index === i ? 'ring-1 ring-ieee/50' : 'opacity-70 hover:opacity-100'
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-[#e8eef5] p-1.5">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="px-3 py-2.5 font-display text-sm font-semibold">
                {shot.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  )
}
