import { useRef } from 'react'
import { motion } from 'framer-motion'

// Wraps any link/button so it gently pulls toward the cursor on hover.
export default function MagneticButton({ as: Tag = 'a', className = '', children, ...props }) {
  const ref = useRef(null)
  const Motion = motion[Tag] ?? motion.a

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <Motion
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </Motion>
  )
}
