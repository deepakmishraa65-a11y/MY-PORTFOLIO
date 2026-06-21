import { useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold gradient-text">
          {profile.name.split(' ')[0]}.
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-violet-500 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="rounded-full p-2 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden rounded-full p-2 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium border-t border-slate-200/60 dark:border-slate-800/60">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-violet-500 transition"
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
