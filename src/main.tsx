import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Global from './styles/global'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global/>
    <App />
  </StrictMode>,
)
