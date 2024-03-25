import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/index.css'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import ScrollToAnchor from './components/ScrollToTop/ScrollToTop.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
      <App />
      <ScrollToAnchor />
    </BrowserRouter>
  </StrictMode>

)
