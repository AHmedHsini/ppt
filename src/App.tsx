import { useCallback, useEffect, useState } from 'react'
import { GradientBlobs } from './components/ui/GradientBlobs'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { NavDots } from './components/ui/NavDots'
import { HeroSlide } from './components/slides/HeroSlide'
import { GoalSlide } from './components/slides/GoalSlide'
import { TechStackSlide } from './components/slides/TechStackSlide'
import { ArchitectureSlide } from './components/slides/ArchitectureSlide'
import { ProgressSlide } from './components/slides/ProgressSlide'
import { Sprint0Slide } from './components/slides/Sprint0Slide'
import { Sprint1Slide } from './components/slides/Sprint1Slide'
import { Sprint2Slide } from './components/slides/Sprint2Slide'
import { MockupsSlide } from './components/slides/MockupsSlide'
import { StatusSlide } from './components/slides/StatusSlide'
import { TeamSlide } from './components/slides/TeamSlide'
import { ContributionsSlide } from './components/slides/ContributionsSlide'
import { NextSprintSlide } from './components/slides/NextSprintSlide'
import { ThankYouSlide } from './components/slides/ThankYouSlide'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'team', label: 'Team' },
  { id: 'goal', label: 'Goal' },
  { id: 'stack', label: 'Stack' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'progress', label: 'Progress' },
  { id: 'sprint0', label: 'Sprint 0' },
  { id: 'sprint1', label: 'Sprint 1' },
  { id: 'sprint2', label: 'Sprint 2' },
  { id: 'mockups', label: 'Mockups' },
  { id: 'status', label: 'Status' },
  { id: 'contributions', label: 'Contributions' },
  { id: 'next', label: 'Next' },
  { id: 'thanks', label: 'Thanks' },
]

function App() {
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActive(visible.target.id)
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [loading])

  const navigate = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (loading) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        !['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'PageDown', 'PageUp', ' '].includes(
          event.key,
        )
      ) {
        return
      }
      event.preventDefault()
      const index = sections.findIndex((s) => s.id === active)
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        const next = sections[Math.min(index + 1, sections.length - 1)]
        navigate(next.id)
      } else {
        const prev = sections[Math.max(index - 1, 0)]
        navigate(prev.id)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, loading, navigate])

  return (
    <>
      <LoadingScreen visible={loading} />
      <GradientBlobs />
      {!loading && (
        <NavDots sections={sections} active={active} onNavigate={navigate} />
      )}
      <main className="snap-container relative">
        <HeroSlide />
        <TeamSlide />
        <GoalSlide />
        <TechStackSlide />
        <ArchitectureSlide />
        <ProgressSlide />
        <Sprint0Slide />
        <Sprint1Slide />
        <Sprint2Slide />
        <MockupsSlide />
        <StatusSlide />
        <ContributionsSlide />
        <NextSprintSlide />
        <ThankYouSlide />
      </main>
    </>
  )
}

export default App
