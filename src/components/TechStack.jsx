import { motion } from 'framer-motion'
import { techStack } from '../data'

const icons = {
  Frontend: '🎨',
  Backend: '⚙️',
  'AI / ML': '🤖',
  Databases: '🗄️',
  DevOps: '🔁',
  Cloud: '☁️',
}

export default function TechStack() {
  return (
    <section id="stack" className="section-pad">
      <h2 className="section-heading">
        Tech <span className="gradient-text">Stack</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(techStack).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card glow-border p-6 group hover:-translate-y-1 transition-transform"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
              {icons[category]}
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 hover:border-cosmic-400/50 hover:text-cosmic-300 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
