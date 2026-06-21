import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const presets = [
  { name: 'Cosmic', c1: '139 92 246', c2: '59 130 246', c3: '34 211 238' },
  { name: 'Crimson', c1: '239 68 68', c2: '190 24 93', c3: '249 115 22' },
  { name: 'Emerald', c1: '16 185 129', c2: '5 150 105', c3: '132 204 22' },
  { name: 'Sunset', c1: '249 115 22', c2: '236 72 153', c3: '250 204 21' },
  { name: 'Ocean', c1: '6 182 212', c2: '37 99 235', c3: '34 211 238' },
  { name: 'Rose', c1: '244 63 94', c2: '168 85 247', c3: '236 72 153' },
]

const STORAGE_KEY = 'portfolio-theme'

function applyTheme(preset) {
  const root = document.documentElement
  root.style.setProperty('--c1-rgb', preset.c1)
  root.style.setProperty('--c2-rgb', preset.c2)
  root.style.setProperty('--c3-rgb', preset.c3)
}

export default function ColorPicker() {
  const [active, setActive] = useState('Cosmic')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const preset = presets.find((p) => p.name === saved)
      if (preset) {
        applyTheme(preset)
        setActive(preset.name)
      }
    }
  }, [])

  const handleSelect = (preset) => {
    applyTheme(preset)
    setActive(preset.name)
    localStorage.setItem(STORAGE_KEY, preset.name)
  }

  return (
    <section id="theme" className="section-pad">
      <h2 className="section-heading">
        Pick Your <span className="gradient-text">Vibe</span>
      </h2>
      <div className="section-divider" />
      <p className="mt-6 text-center text-slate-400 text-sm">
        Click a color to change the site's theme — it's saved for next time.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        {presets.map((preset) => (
          <motion.button
            key={preset.name}
            onClick={() => handleSelect(preset)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${preset.name} theme`}
            className="group flex flex-col items-center gap-2"
          >
            <span
              className={`h-12 w-12 rounded-full border-2 transition ${
                active === preset.name
                  ? 'border-white shadow-glow-lg'
                  : 'border-white/20 group-hover:border-white/60'
              }`}
              style={{
                background: `linear-gradient(135deg, rgb(${preset.c2}), rgb(${preset.c1}), rgb(${preset.c3}))`,
              }}
            />
            <span
              className={`text-xs font-medium transition ${
                active === preset.name ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
              }`}
            >
              {preset.name}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
