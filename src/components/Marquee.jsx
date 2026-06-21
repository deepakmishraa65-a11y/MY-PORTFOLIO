const items = [
  'AI Engineering', 'Full Stack', 'React', 'Next.js', 'LLMs',
  'Node.js', 'Python', 'Product Thinking', 'Startups',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6 bg-gradient-to-r from-electric-500/5 to-cosmic-500/5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-space to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-space to-transparent" />

      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-2xl md:text-3xl font-display font-bold text-slate-600/70 whitespace-nowrap"
          >
            {item}
            <span className="text-cosmic-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
