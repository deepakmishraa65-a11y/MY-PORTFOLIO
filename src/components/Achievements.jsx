import { motion } from 'framer-motion'
import { achievements } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <h2 className="section-heading">
        By The <span className="gradient-text">Numbers</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card glow-border p-8 text-center"
          >
            <div className="font-display text-4xl font-bold gradient-text">{a.value}</div>
            <div className="mt-2 text-sm text-slate-400">{a.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
