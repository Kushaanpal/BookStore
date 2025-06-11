import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>{/*It wraps the whole app so that components like <Route> and <Link> can work. */}
  <AuthProvider>
   <App />
  </AuthProvider>
  
  </BrowserRouter>
  
  
)
