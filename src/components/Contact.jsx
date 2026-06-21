import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'Portfolio Visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-pad">
      <h2 className="section-heading">
        Let's Build Something <span className="gradient-text">Amazing</span>
      </h2>
      <div className="section-divider" />
      <p className="mt-5 text-center text-slate-400 max-w-xl mx-auto">
        Have an idea, a role, or a project in mind? My inbox is always open.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card glow-border mt-10 max-w-xl mx-auto p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[rgb(var(--c1-rgb)/0.60)] transition"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[rgb(var(--c1-rgb)/0.60)] transition"
          />
          <textarea
            required
            rows={4}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[rgb(var(--c1-rgb)/0.60)] transition resize-none"
          />
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message →
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium pt-6 border-t border-white/10">
          {Object.entries(profile.socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 capitalize text-slate-300 hover:border-[rgb(var(--c1-rgb)/0.60)] hover:text-[rgb(var(--c1-rgb))] transition"
            >
              {name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
