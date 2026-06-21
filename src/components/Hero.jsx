import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-pad pt-28">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 dark:border-violet-700/50 px-4 py-1.5 text-sm text-violet-600 dark:text-violet-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance work
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400">
            {profile.role}
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-md">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-ghost">Let's Talk</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96 animate-float">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 rotate-6" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-pink-600 -rotate-6 opacity-60 blur-sm" />
            <div className="absolute inset-2 rounded-[2.2rem] bg-white/10 backdrop-blur-sm flex items-center justify-center text-8xl">
              🎨
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
