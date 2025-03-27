import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <div className="dark:bg-gray-900 dark:text-white">
    <App />
    </div>
    </BrowserRouter>
  </StrictMode>,
)
