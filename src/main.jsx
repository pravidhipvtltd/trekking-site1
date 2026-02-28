import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
} else {
  document.body.innerHTML = '<div style="padding:2rem;color:red;">Root element not found. Ensure index.html has &lt;div id="root"&gt;&lt;/div&gt;</div>'
}
