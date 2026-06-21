import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
    else setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="relative overflow-x-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-maroon-500/20 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-slate-500/20 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-400/15 blur-3xl animate-blob [animation-delay:8s]" />
      </div>

      <ScrollProgress />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
