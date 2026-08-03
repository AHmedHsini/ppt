import { motion } from 'framer-motion'

type TeamPhotoProps = {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  objectPosition?: string
  className?: string
  animate?: boolean
}

const sizes = {
  sm: 'h-12 w-12 sm:h-14 sm:w-14',
  md: 'h-28 w-28 sm:h-32 sm:w-32',
  lg: 'h-36 w-36 sm:h-40 sm:w-40',
}

export function TeamPhoto({
  src,
  alt,
  size = 'lg',
  objectPosition = 'center 20%',
  className = '',
  animate = true,
}: TeamPhotoProps) {
  return (
    <motion.div
      className={`relative shrink-0 rounded-full ${sizes[size]} ${className}`}
      whileHover={animate ? { scale: 1.03 } : undefined}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            '0 0 0 3px rgba(0, 98, 155, 0.55), 0 0 28px rgba(0, 98, 155, 0.45), 0 12px 28px rgba(0, 0, 0, 0.35)',
        }}
      />
      <div className="absolute inset-[3px] overflow-hidden rounded-full bg-surface-2">
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
          whileHover={animate ? { scale: 1.08 } : undefined}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}
