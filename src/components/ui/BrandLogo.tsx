import type { SimpleIcon } from 'simple-icons'

type BrandLogoProps = {
  icon: SimpleIcon
  title?: string
  size?: number
  className?: string
}

/** Relative luminance of a hex color (0–1). */
function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  const lin = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

export function BrandLogo({
  icon,
  title,
  size = 40,
  className = '',
}: BrandLogoProps) {
  const hex = `#${icon.hex}`
  const needsLightPlate = luminance(hex) < 0.18

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={
        needsLightPlate
          ? {
              background: 'rgba(255, 255, 255, 0.92)',
              borderRadius: 12,
              padding: 8,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            }
          : undefined
      }
      title={title ?? icon.title}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label={title ?? icon.title}
        className="block shrink-0"
      >
        <title>{title ?? icon.title}</title>
        <path d={icon.path} fill={hex} />
      </svg>
    </span>
  )
}
