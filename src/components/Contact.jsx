import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-maroon-500/10 to-slate-400/10 p-10 md:p-16 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Let's create something <span className="gradient-text">amazing</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
          ✉️ {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium">
          {Object.entries(profile.socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 dark:border-slate-700 px-5 py-2 capitalize hover:border-maroon-500 hover:text-maroon-500 transition"
            >
              {name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
