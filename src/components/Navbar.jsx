import { useState } from 'react'
import { useSiteData } from '../context/SiteDataContext'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#theme', label: 'Theme' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { profile } = useSiteData().data
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-space/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold gradient-text">
          {profile.name.split(' ')[0]}.
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            className="hidden sm:inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-slate-200 hover:border-[rgb(var(--c1-rgb)/0.60)] hover:text-[rgb(var(--c1-rgb))] transition"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden rounded-full p-2 hover:bg-white/10 transition text-slate-200"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium border-t border-white/10 text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-white transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
