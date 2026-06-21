import { useState } from 'react'
import { useSiteData } from '../../context/SiteDataContext'

const ADMIN_PASSWORD = 'deepak2026'
const AUTH_KEY = 'portfolio-admin-auth'

const TABS = [
  'Profile',
  'About',
  'Tech Stack',
  'Projects',
  'Services',
  'Experience',
  'Achievements',
]

function Field({ label, value, onChange, textarea }) {
  return (
    <label className="block mb-4">
      <span className="block text-xs font-semibold text-slate-400 mb-1">{label}</span>
      {textarea ? (
        <textarea
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  )
}

function Card({ children }) {
  return <div className="glass-card p-5 mb-5">{children}</div>
}

function ListEditor({ items, emptyItem, renderFields, onChange, addLabel }) {
  const update = (i, next) => {
    const copy = [...items]
    copy[i] = next
    onChange(copy)
  }
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i))
  const add = () => onChange([...items, { ...emptyItem }])

  return (
    <>
      {items.map((item, i) => (
        <Card key={i}>
          {renderFields(item, (next) => update(i, next))}
          <button
            onClick={() => remove(i)}
            className="mt-2 text-xs font-semibold text-red-400 hover:text-red-300"
          >
            Remove
          </button>
        </Card>
      ))}
      <button
        onClick={add}
        className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 hover:border-[rgb(var(--c1-rgb)/0.6)] hover:text-[rgb(var(--c1-rgb))] transition"
      >
        + {addLabel}
      </button>
    </>
  )
}

function ProfileTab({ data, updateData }) {
  const p = data.profile
  const set = (key, value) => updateData('profile', { ...p, [key]: value })
  const setSocial = (key, value) => updateData('profile', { ...p, socials: { ...p.socials, [key]: value } })
  return (
    <Card>
      <Field label="Name" value={p.name} onChange={(v) => set('name', v)} />
      <Field label="Role" value={p.role} onChange={(v) => set('role', v)} />
      <Field label="Headline" value={p.headline} onChange={(v) => set('headline', v)} textarea />
      <Field label="Tagline" value={p.tagline} onChange={(v) => set('tagline', v)} textarea />
      <Field label="Location" value={p.location} onChange={(v) => set('location', v)} />
      <Field label="Email" value={p.email} onChange={(v) => set('email', v)} />
      <Field label="Resume URL" value={p.resumeUrl} onChange={(v) => set('resumeUrl', v)} />
      <Field label="GitHub" value={p.socials.github} onChange={(v) => setSocial('github', v)} />
      <Field label="LinkedIn" value={p.socials.linkedin} onChange={(v) => setSocial('linkedin', v)} />
      <Field label="Twitter" value={p.socials.twitter} onChange={(v) => setSocial('twitter', v)} />
      <Field label="Instagram" value={p.socials.instagram} onChange={(v) => setSocial('instagram', v)} />
    </Card>
  )
}

function RolesTab({ data, updateData }) {
  return (
    <Card>
      <span className="block text-xs font-semibold text-slate-400 mb-2">
        Rotating roles (typewriter text) — one per line
      </span>
      <textarea
        className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
        rows={4}
        value={data.roles.join('\n')}
        onChange={(e) => updateData('roles', e.target.value.split('\n'))}
      />
    </Card>
  )
}

function AboutTab({ data, updateData }) {
  const a = data.about
  const set = (key, value) => updateData('about', { ...a, [key]: value })
  return (
    <Card>
      <Field label="Heading" value={a.heading} onChange={(v) => set('heading', v)} />
      <Field
        label="Paragraphs (one per line)"
        value={a.paragraphs.join('\n')}
        onChange={(v) => set('paragraphs', v.split('\n'))}
        textarea
      />
      <Field label="Philosophy quote" value={a.philosophy} onChange={(v) => set('philosophy', v)} textarea />
      <ListEditor
        items={a.stats}
        emptyItem={{ label: '', value: '' }}
        addLabel="Add Stat"
        onChange={(stats) => set('stats', stats)}
        renderFields={(item, update) => (
          <>
            <Field label="Label" value={item.label} onChange={(v) => update({ ...item, label: v })} />
            <Field label="Value" value={item.value} onChange={(v) => update({ ...item, value: v })} />
          </>
        )}
      />
    </Card>
  )
}

function TechStackTab({ data, updateData }) {
  const stack = data.techStack
  const setCategory = (category, value) =>
    updateData('techStack', { ...stack, [category]: value.split(',').map((s) => s.trim()).filter(Boolean) })
  const removeCategory = (category) => {
    const next = { ...stack }
    delete next[category]
    updateData('techStack', next)
  }
  const [newCategory, setNewCategory] = useState('')

  return (
    <Card>
      {Object.entries(stack).map(([category, items]) => (
        <div key={category} className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-400">{category}</span>
            <button onClick={() => removeCategory(category)} className="text-xs text-red-400 hover:text-red-300">
              Remove category
            </button>
          </div>
          <input
            className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
            value={items.join(', ')}
            onChange={(e) => setCategory(category, e.target.value)}
          />
        </div>
      ))}
      <div className="flex gap-2 mt-3">
        <input
          className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          onClick={() => {
            if (!newCategory.trim()) return
            updateData('techStack', { ...stack, [newCategory.trim()]: [] })
            setNewCategory('')
          }}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 hover:border-[rgb(var(--c1-rgb)/0.6)] hover:text-[rgb(var(--c1-rgb))] transition"
        >
          + Add
        </button>
      </div>
    </Card>
  )
}

function ProjectsTab({ data, updateData }) {
  return (
    <ListEditor
      items={data.projects}
      emptyItem={{
        title: '',
        tagline: '',
        category: '',
        image: '',
        tech: [],
        problem: '',
        impact: '',
        demoUrl: '#',
        githubUrl: '#',
      }}
      addLabel="Add Project"
      onChange={(items) => updateData('projects', items)}
      renderFields={(item, update) => (
        <>
          <Field label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
          <Field label="Tagline" value={item.tagline} onChange={(v) => update({ ...item, tagline: v })} />
          <Field label="Category" value={item.category} onChange={(v) => update({ ...item, category: v })} />
          <Field label="Image URL" value={item.image} onChange={(v) => update({ ...item, image: v })} />
          <Field
            label="Tech (comma separated)"
            value={item.tech.join(', ')}
            onChange={(v) => update({ ...item, tech: v.split(',').map((s) => s.trim()).filter(Boolean) })}
          />
          <Field label="Problem" value={item.problem} onChange={(v) => update({ ...item, problem: v })} textarea />
          <Field label="Impact" value={item.impact} onChange={(v) => update({ ...item, impact: v })} textarea />
          <Field label="Demo URL" value={item.demoUrl} onChange={(v) => update({ ...item, demoUrl: v })} />
          <Field label="GitHub URL" value={item.githubUrl} onChange={(v) => update({ ...item, githubUrl: v })} />
        </>
      )}
    />
  )
}

function ServicesTab({ data, updateData }) {
  return (
    <ListEditor
      items={data.services}
      emptyItem={{ icon: '✨', title: '', desc: '' }}
      addLabel="Add Service"
      onChange={(items) => updateData('services', items)}
      renderFields={(item, update) => (
        <>
          <Field label="Icon (emoji)" value={item.icon} onChange={(v) => update({ ...item, icon: v })} />
          <Field label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
          <Field label="Description" value={item.desc} onChange={(v) => update({ ...item, desc: v })} textarea />
        </>
      )}
    />
  )
}

function ExperienceTab({ data, updateData }) {
  return (
    <ListEditor
      items={data.experience}
      emptyItem={{ year: '', title: '', org: '', desc: '' }}
      addLabel="Add Experience"
      onChange={(items) => updateData('experience', items)}
      renderFields={(item, update) => (
        <>
          <Field label="Year / Duration" value={item.year} onChange={(v) => update({ ...item, year: v })} />
          <Field label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
          <Field label="Organization" value={item.org} onChange={(v) => update({ ...item, org: v })} />
          <Field label="Description" value={item.desc} onChange={(v) => update({ ...item, desc: v })} textarea />
        </>
      )}
    />
  )
}

function AchievementsTab({ data, updateData }) {
  return (
    <ListEditor
      items={data.achievements}
      emptyItem={{ label: '', value: '' }}
      addLabel="Add Achievement"
      onChange={(items) => updateData('achievements', items)}
      renderFields={(item, update) => (
        <>
          <Field label="Label" value={item.label} onChange={(v) => update({ ...item, label: v })} />
          <Field label="Value" value={item.value} onChange={(v) => update({ ...item, value: v })} />
        </>
      )}
    />
  )
}

function Login({ onSuccess }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, '1')
      onSuccess()
    } else {
      setError('Wrong password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-space px-6">
      <form onSubmit={submit} className="glass-card glow-border p-8 w-full max-w-sm">
        <h1 className="text-xl font-bold text-white mb-1">Admin Login</h1>
        <p className="text-sm text-slate-400 mb-6">Enter password to edit portfolio content.</p>
        <input
          type="password"
          autoFocus
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[rgb(var(--c1-rgb))]"
          placeholder="Password"
        />
        {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
        <button type="submit" className="btn-primary mt-5 w-full justify-center">
          Unlock
        </button>
        <a href="/" className="block text-center text-xs text-slate-500 hover:text-slate-300 mt-4">
          ← Back to site
        </a>
      </form>
    </div>
  )
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1')
  const [tab, setTab] = useState('Profile')
  const { data, updateData, resetData } = useSiteData()
  const [saved, setSaved] = useState(false)

  if (!authed) return <Login onSuccess={() => setAuthed(true)} />

  const flashSaved = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const tabProps = { data, updateData: (...args) => { updateData(...args); flashSaved() } }

  return (
    <div className="min-h-screen bg-space text-slate-200">
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-space/80 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-lg font-bold gradient-text">Portfolio Admin</h1>
        <div className="flex items-center gap-4">
          {saved && <span className="text-xs text-emerald-400">Saved ✓</span>}
          <button
            onClick={() => {
              if (confirm('Reset all content to defaults?')) resetData()
            }}
            className="text-xs font-semibold text-red-400 hover:text-red-300"
          >
            Reset to defaults
          </button>
          <a href="/" className="text-xs font-semibold text-slate-300 hover:text-white">
            View site →
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                tab === t
                  ? 'bg-[rgb(var(--c1-rgb))] text-white'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Profile' && (
          <>
            <ProfileTab {...tabProps} />
            <RolesTab {...tabProps} />
          </>
        )}
        {tab === 'About' && <AboutTab {...tabProps} />}
        {tab === 'Tech Stack' && <TechStackTab {...tabProps} />}
        {tab === 'Projects' && <ProjectsTab {...tabProps} />}
        {tab === 'Services' && <ServicesTab {...tabProps} />}
        {tab === 'Experience' && <ExperienceTab {...tabProps} />}
        {tab === 'Achievements' && <AchievementsTab {...tabProps} />}
      </div>
    </div>
  )
}
