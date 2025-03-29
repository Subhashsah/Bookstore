import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <AuthProvider>
    <div className="dark:bg-gray-900 dark:text-white">
    <App />
    </div>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
