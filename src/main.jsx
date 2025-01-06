import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
import { ThemeProvider } from './components/Home/DarkModeToggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider>

      <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
