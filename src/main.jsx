import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/school-website/">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)

reportWebVitals();