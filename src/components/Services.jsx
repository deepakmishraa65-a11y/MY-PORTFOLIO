import { motion } from 'framer-motion'
import { useSiteData } from '../context/SiteDataContext'

export default function Services() {
  const { services } = useSiteData().data
  return (
    <section id="services" className="section-pad">
      <h2 className="section-heading">
        What I <span className="gradient-text">Do</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glow-border group p-8 hover:-translate-y-1 transition-transform"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            <p className="mt-3 text-slate-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
