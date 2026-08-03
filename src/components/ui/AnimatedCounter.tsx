import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  className = '',
  duration = 0.7,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(Math.round(latest))
  })

  useEffect(() => {
    if (!inView) {
      motionValue.set(0)
      setDisplay(0)
      return
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })
    return controls.stop
  }, [inView, value, duration, motionValue])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
