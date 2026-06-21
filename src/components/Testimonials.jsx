import { motion } from 'framer-motion'
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <h2 className="section-heading">
        What People <span className="gradient-text">Say</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glow-border p-6 flex flex-col"
          >
            <span className="text-3xl text-[rgb(var(--c1-rgb)/0.60)]">"</span>
            <p className="mt-2 text-slate-300 flex-1">{t.quote}</p>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="font-semibold text-white text-sm">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
