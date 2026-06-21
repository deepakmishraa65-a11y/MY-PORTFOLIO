import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="section-pad">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
        Selected <span className="gradient-text">Work</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-maroon-500 to-slate-400" />

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === c
                ? 'bg-gradient-to-r from-maroon-600 to-slate-600 text-white'
                : 'border border-slate-300 dark:border-slate-700 hover:border-maroon-500'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link !== '#' ? '_blank' : undefined}
            rel="noreferrer"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-medium text-maroon-300">{p.category}</span>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
