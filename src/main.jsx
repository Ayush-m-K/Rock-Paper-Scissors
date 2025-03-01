import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RPS2 from './rps2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RPS2 />
  </StrictMode>,
)
