import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PageProvider } from './context/pageContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
     <PageProvider>
      <App />
    </PageProvider>,
  </StrictMode>,
)
