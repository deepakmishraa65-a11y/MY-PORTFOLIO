import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with ❤️ & React.
        </p>
        <a href="#home" className="hover:text-violet-500 transition">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
