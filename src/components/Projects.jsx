import { motion } from 'framer-motion'
import { useSiteData } from '../context/SiteDataContext'

export default function Projects() {
  const { projects } = useSiteData().data
  return (
    <section id="work" className="section-pad">
      <h2 className="section-heading">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <div className="section-divider" />

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glow-border overflow-hidden group flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/20 to-transparent" />
              <span className="absolute top-3 right-3 rounded-full bg-space/80 border border-white/10 px-3 py-1 text-xs font-medium text-[rgb(var(--c1-rgb))] backdrop-blur-sm">
                {p.category}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2 text-sm flex-1">
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-300">Problem: </span>
                  {p.problem}
                </p>
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-300">Impact: </span>
                  {p.impact}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.demoUrl}
                  target={p.demoUrl !== '#' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full bg-gradient-to-r from-[rgb(var(--c2-rgb))] to-[rgb(var(--c1-rgb))] px-4 py-2 text-sm font-medium text-white hover:shadow-glow transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.githubUrl}
                  target={p.githubUrl !== '#' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 hover:border-[rgb(var(--c1-rgb)/0.60)] hover:text-[rgb(var(--c1-rgb))] transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
