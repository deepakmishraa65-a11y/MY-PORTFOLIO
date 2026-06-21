import { useMemo } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import TechStack from './components/TechStack'
import ColorPicker from './components/ColorPicker'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 3}s`,
      })),
    []
  )

  return (
    <div className="relative overflow-x-hidden bg-space">
      {/* Starfield */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Animated gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[rgb(var(--c2-rgb)/0.15)] blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-[rgb(var(--c1-rgb)/0.15)] blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[rgb(var(--c3-rgb)/0.10)] blur-3xl animate-blob [animation-delay:8s]" />
      </div>

      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechStack />
        <ColorPicker />
        <Services />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
