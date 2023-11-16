import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header.jsx'
import BlockchainPage from './pages/blockchainPage.jsx'
import BolsaVerdePage from './pages/bolsaVerdePage.jsx'
import QuemSomosNos from './pages/quemSomosNosPage.jsx'
import DoacoesSustentaveisPage from './pages/doacoesSustentaveisPage.jsx'
import TelaInicial from './pages/telaInicialPage.jsx'
import CreditoDeCarbonoPage from './pages/creditoDeCarbonoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <div>
        <Header />
        <Switch>
          <Route path="/telaInicial" exact pages={TelaInicial} />
          <Route path="/sobreNos" pages={QuemSomosNos} />
          <Route path="/oQueEBlockchain" pages={BlockchainPage} />
          <Route path="/creditoDeCarbono" pages={CreditoDeCarbonoPage} />
          <Route path="/bolsaVerde" pages={BolsaVerdePage} />
          <Route path="/doacoesSustentaveis" pages={DoacoesSustentaveisPage} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
)
