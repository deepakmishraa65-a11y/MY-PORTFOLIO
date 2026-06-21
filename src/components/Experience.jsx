import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <h2 className="section-heading">
        Experience <span className="gradient-text">Timeline</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-14 relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-1 bottom-1 w-px bg-gradient-to-b from-[rgb(var(--c2-rgb))] via-[rgb(var(--c1-rgb))] to-[rgb(var(--c3-rgb)/0.20)]" />

        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 pl-12"
          >
            <span className="absolute left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-[rgb(var(--c1-rgb))] shadow-glow" />
            <div className="glass-card glow-border p-5">
              <span className="text-xs font-semibold text-[rgb(var(--c1-rgb))]">{item.year}</span>
              <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.org}</p>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
