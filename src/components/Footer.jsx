import { useSiteData } from '../context/SiteDataContext'

export default function Footer() {
  const { profile } = useSiteData().data
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with ❤️ & AI.
        </p>
        <a href="#home" className="hover:text-[rgb(var(--c1-rgb))] transition">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
