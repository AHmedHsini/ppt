import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { BrowserFrame } from '../ui/BrowserFrame'

const mockups = [
  {
    id: 'landing',
    label: 'Landing',
    title: 'ieee-checkin.app',
    src: '/mockups/landing.png',
    caption: 'Landing Page',
  },
  {
    id: 'organizer',
    label: 'Organizer',
    title: 'ieee-checkin.app / organizer',
    src: '/mockups/organizer.png',
    caption: 'Organizer Workspace',
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    title: 'ieee-checkin.app / volunteer',
    src: '/mockups/volunteer.png',
    caption: 'Volunteer Check-in',
  },
]

export function MockupsSlide() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockups.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [])

  const current = mockups[index]

  return (
    <Section id="mockups">
      <SectionTitle eyebrow="Product Design" title="UI Mockups" />

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {mockups.map((mockup, i) => (
          <button
            key={mockup.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-all duration-300 ${
              index === i
                ? 'bg-ieee text-white shadow-[0_8px_24px_rgba(0,98,155,0.35)]'
                : 'bg-white/5 text-white/50 hover:bg-white/10'
            }`}
          >
            {mockup.label}
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={current.src}
                  alt={current.caption}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
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

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {mockups.map((mockup, i) => (
            <motion.button
              key={mockup.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`glass overflow-hidden rounded-xl text-left transition-all ${
                index === i ? 'ring-1 ring-ieee/50' : 'opacity-70 hover:opacity-100'
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={mockup.src}
                  alt={mockup.caption}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="px-3 py-2.5 font-display text-sm font-semibold">
                {mockup.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  )
}
