const items = [
  'Branding', 'UI / UX', 'Illustration', 'Motion', 'AI Art',
  'Figma', 'Photoshop', 'Creative Direction', 'Web Design',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-slate-200/60 dark:border-slate-800/60 py-6 bg-gradient-to-r from-violet-500/5 to-pink-500/5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-2xl md:text-3xl font-display font-bold text-slate-400/70 dark:text-slate-600/70 whitespace-nowrap"
          >
            {item}
            <span className="text-violet-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
