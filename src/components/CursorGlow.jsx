import { useEffect, useRef } from 'react'

// Soft glow that follows the cursor — desktop only, ignored on touch devices.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    const handleMove = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[rgb(var(--c1-rgb)/0.10)] blur-[100px] transition-transform duration-300 ease-out hidden md:block"
    />
  )
}
