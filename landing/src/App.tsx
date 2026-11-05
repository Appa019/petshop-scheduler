import { lazy, Suspense, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Analysis from './sections/Analysis'
import Schedule from './sections/Schedule'
import Stack from './sections/Stack'
import Footer from './sections/Footer'

// The slide deck is heavy and rarely opened, so it loads on demand
const Presentation = lazy(() => import('./presentation/Presentation').then(m => ({ default: m.Presentation })))

export default function App() {
  const [showPresentation, setShowPresentation] = useState(false)
  const openPresentation = () => setShowPresentation(true)

  return (
    <MotionConfig reducedMotion="user">
      <div className="landing min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Analysis />
          <Schedule />
          <Stack onOpenPresentation={openPresentation} />
        </main>
        <Footer />
      </div>

      {showPresentation && (
        <Suspense fallback={null}>
          <Presentation onClose={() => setShowPresentation(false)} />
        </Suspense>
      )}
    </MotionConfig>
  )
}
