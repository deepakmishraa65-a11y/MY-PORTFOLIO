import { motion } from 'framer-motion'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          {about.heading}
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-lg text-slate-600 dark:text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-6 text-center"
              >
                <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-2 text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
