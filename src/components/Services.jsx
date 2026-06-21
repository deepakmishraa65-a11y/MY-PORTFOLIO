import { motion } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
        What I <span className="gradient-text">Do</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 p-8 hover:border-violet-500 hover:-translate-y-1 transition"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
