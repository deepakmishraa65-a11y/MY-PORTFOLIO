import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const presets = [
  { name: 'Cosmic', c1: '139 92 246', c2: '59 130 246', c3: '34 211 238' },
  { name: 'Crimson', c1: '239 68 68', c2: '190 24 93', c3: '249 115 22' },
  { name: 'Emerald', c1: '16 185 129', c2: '5 150 105', c3: '132 204 22' },
  { name: 'Sunset', c1: '249 115 22', c2: '219 39 119', c3: '253 224 71' },
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
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

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

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleSelect = (preset) => {
    applyTheme(preset)
    setActive(preset.name)
    localStorage.setItem(STORAGE_KEY, preset.name)
  }

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-card glow-border mb-3 p-4 w-56"
          >
            <p className="text-xs font-semibold text-slate-400 mb-3">Theme color</p>
            <div className="grid grid-cols-3 gap-3">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => handleSelect(preset)}
                  aria-label={`Switch to ${preset.name} theme`}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      active === preset.name ? 'border-white' : 'border-white/20 hover:border-white/60'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, rgb(${preset.c2}), rgb(${preset.c1}), rgb(${preset.c3}))`,
                    }}
                  />
                  <span className="text-[10px] text-slate-400">{preset.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open theme color picker"
        className="h-12 w-12 rounded-full glass-card glow-border flex items-center justify-center text-xl shadow-glow"
      >
        🎨
      </motion.button>
    </div>
  )
}
