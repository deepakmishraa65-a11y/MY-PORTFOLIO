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
        <h2 className="section-heading">{about.heading}</h2>
        <div className="section-divider" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-lg text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="glass-card px-5 py-4 italic text-[rgb(var(--c1-rgb))] border-l-2 border-[rgb(var(--c1-rgb))]">
              "{about.philosophy}"
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div key={s.label} className="glass-card glow-border p-6 text-center">
                <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-2 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
