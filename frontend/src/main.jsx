import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './contex/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
