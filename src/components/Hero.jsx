import { motion } from 'framer-motion'
import { profile, roles } from '../data'
import TypewriterText from './TypewriterText'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-pad pt-28 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--c1-rgb)/0.30)] bg-white/[0.03] px-4 py-1.5 text-sm text-[rgb(var(--c1-rgb))] mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to AI & Full Stack opportunities
          </p>

          <h2 className="text-lg md:text-xl font-medium text-slate-400 mb-3">
            I'm a{' '}
            <TypewriterText words={roles} className="text-[rgb(var(--c1-rgb))] font-semibold" />
          </h2>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] text-white">
            {profile.headline}
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-md">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#work" className="btn-primary">
              View My Work →
            </MagneticButton>
            <MagneticButton href="#contact" className="btn-ghost">
              Let's Talk
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96 animate-float">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-[rgb(var(--c2-rgb)/0.20)] via-[rgb(var(--c1-rgb)/0.20)] to-[rgb(var(--c3-rgb)/0.10)] blur-3xl animate-gradient bg-[length:200%_200%]" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-[rgb(var(--c1-rgb)/0.30)] animate-spin-slow" />
            <div className="absolute inset-2 rounded-[2.2rem] glass-card flex items-center justify-center text-7xl shadow-glow">
              🧠
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">✨</span>
              <span className="absolute top-1/2 -right-4 -translate-y-1/2 text-2xl">⚡</span>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl">💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
