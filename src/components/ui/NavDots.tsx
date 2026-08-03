import { motion } from 'framer-motion'

type NavDotsProps = {
  sections: { id: string; label: string }[]
  active: string
  onNavigate: (id: string) => void
}

export function NavDots({ sections, active, onNavigate }: NavDotsProps) {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:right-6"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = active === section.id
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onNavigate(section.id)}
            className="group relative flex items-center justify-end"
            aria-label={section.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="pointer-events-none mr-3 translate-x-2 rounded-md bg-white/10 px-2 py-1 font-body text-[10px] uppercase tracking-wider text-white/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {section.label}
            </span>
            <motion.span
              className={`block rounded-full transition-colors ${
                isActive ? 'h-2.5 w-2.5 bg-ieee-light' : 'h-2 w-2 bg-white/30'
              }`}
              animate={isActive ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </button>
        )
      })}
    </nav>
  )
}
