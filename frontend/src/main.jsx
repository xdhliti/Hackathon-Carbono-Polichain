import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import BlockchainPage from './pages/blockchainPage.jsx';
import BolsaVerdePage from './pages/bolsaVerdePage.jsx';
import QuemSomosNos from './pages/quemSomosNosPage.jsx';
import DoacoesSustentaveisPage from './pages/doacoesSustentaveisPage.jsx';
import TelaInicial from './pages/telaInicialPage.jsx';
import CreditoDeCarbonoPage from './pages/creditoDeCarbonoPage.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
