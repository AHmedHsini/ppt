import { motion } from 'framer-motion'
import type { SimpleIcon } from 'simple-icons'
import {
  siDocker,
  siFastify,
  siFramer,
  siGit,
  siGithub,
  siLucide,
  siNestjs,
  siNodedotjs,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siSocketdotio,
  siSwagger,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siVite,
} from 'simple-icons'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { BrandLogo } from '../ui/BrandLogo'

type TechItem = {
  name: string
  icon: SimpleIcon
}

const stack: TechItem[] = [
  { name: 'React', icon: siReact },
  { name: 'Vite', icon: siVite },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'NestJS', icon: siNestjs },
  { name: 'Fastify', icon: siFastify },
  { name: 'Prisma', icon: siPrisma },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Docker', icon: siDocker },
  { name: 'Swagger', icon: siSwagger },
  { name: 'Socket.IO', icon: siSocketdotio },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Framer Motion', icon: siFramer },
  { name: 'Lucide', icon: siLucide },
  { name: 'pnpm', icon: siPnpm },
  { name: 'Turborepo', icon: siTurborepo },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Node.js', icon: siNodedotjs },
]

export function TechStackSlide() {
  return (
    <Section id="stack">
      <SectionTitle eyebrow="Engineering" title="Technology Stack" />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {stack.map((tech, i) => {
          const brandColor = `#${tech.icon.hex}`
          return (
            <motion.div
              key={tech.name}
              className="glass group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{
                y: -6,
                scale: 1.04,
                borderColor: `${brandColor}99`,
                boxShadow: `0 16px 32px ${brandColor}33`,
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${brandColor}28 0%, transparent 70%)`,
                }}
              />
              <motion.div
                className="relative z-10 mb-3"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.35 }}
              >
                <BrandLogo icon={tech.icon} title={tech.name} size={36} />
              </motion.div>
              <p className="relative z-10 px-2 text-center font-display text-sm font-semibold sm:text-[15px]">
                {tech.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
