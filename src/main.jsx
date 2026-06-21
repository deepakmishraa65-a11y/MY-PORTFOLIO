import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import { SiteDataProvider } from './context/SiteDataContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteDataProvider>
      <App />
      <Analytics />
    </SiteDataProvider>
  </React.StrictMode>,
)
