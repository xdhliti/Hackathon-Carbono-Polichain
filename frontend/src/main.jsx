import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './pages/quemSomosNos.jsx'
import BlockchainPage from './pages/blockchainPage.jsx'
import BolsaVerdePage from './pages/bolsaVerdePage.jsx'
import DoacoesSustentaveisPage from './pages/doacoesSustentaveis.jsx'
import CreditoDeCarbonoPage from './pages/creditoDeCarbonoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <CreditoDeCarbonoPage />
    </Router>
  </React.StrictMode>
)
