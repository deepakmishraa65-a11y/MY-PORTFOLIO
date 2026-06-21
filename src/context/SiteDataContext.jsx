import { createContext, useContext, useState } from 'react'
import {
  profile,
  roles,
  about,
  techStack,
  projects,
  services,
  experience,
  achievements,
} from '../data'

const STORAGE_KEY = 'portfolio-site-data'
// Bump this whenever the content/copy in data.js changes meaningfully, so
// stale localStorage edits from before the change don't silently override it.
const DATA_VERSION = 2

const defaultData = {
  profile,
  roles,
  about,
  techStack,
  projects,
  services,
  experience,
  achievements,
}

function loadInitialData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return defaultData
    const parsed = JSON.parse(saved)
    if (parsed.__version !== DATA_VERSION) return defaultData
    return { ...defaultData, ...parsed.data }
  } catch {
    return defaultData
  }
}

const SiteDataContext = createContext(null)

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(loadInitialData)

  const updateData = (key, value) => {
    setData((prev) => {
      const next = { ...prev, [key]: value }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ __version: DATA_VERSION, data: next }))
      return next
    })
  }

  const resetData = () => {
    localStorage.removeItem(STORAGE_KEY)
    setData(defaultData)
  }

  return (
    <SiteDataContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </SiteDataContext.Provider>
  )
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext)
  if (!ctx) throw new Error('useSiteData must be used within SiteDataProvider')
  return ctx
}
