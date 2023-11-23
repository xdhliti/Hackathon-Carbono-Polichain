import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BolsaVerdePage from './pages/BolsaVerdePage';
import BlockchainPage from './pages/BlockchainPage';
import CreditoDeCarbonoPage from './pages/CreditoDeCarbonoPage';
import DoacoesSustentaveisPage from './pages/DoacoesSustentaveisPage';
import NoMatch from './pages/NoMatch';
import QuemSomosNosPage from './pages/QuemSomosNosPage';
import PerfilPage from './pages/PerfilPage';
import FaleConoscoPage from './pages/FaleConoscoPage';
import LoginPage from './pages/LoginPage';
import TelaInicialPage from './pages/TelaInicialPage';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/" element={<TelaInicialPage />} > TelaInicialPage  </Link>
        <Link to="/quemSomosNos" element={<QuemSomosNosPage />} > QuemSomosNosPage  </Link>
        <Link to="/blockchain" element={<BlockchainPage />} > BlockchainPage  </Link>
        <Link to="/faleConosco" element={<FaleConoscoPage />} > FaleConoscoPage  </Link>
        <Link to="/creditoDeCarbono" element={<CreditoDeCarbonoPage />} > CreditoDeCarbonoPage  </Link>
        <Link to="/bolsaVerde" element={<BolsaVerdePage />} > BolsaVerdePage  </Link>
        <Link to="/doacoesSustentaveis" element={<DoacoesSustentaveisPage />} > DoacoesSustentaveisPage  </Link>
        <Link to="/login" element={<LoginPage />} > LoginPage  </Link>
        <Link to="/perfil" element={<PerfilPage />} > PerfilPage  </Link>
        <Link to="*" element={<NoMatch />} > NoMatch  </Link>
      </nav>
      <Routes>
        <Route path="/" element={<TelaInicialPage />} />
        <Route path="quemSomosNos" element={<QuemSomosNosPage />} />
        <Route path="blockchain" element={<BlockchainPage />} />
        <Route path="faleConosco" element={<FaleConoscoPage />} />
        <Route path="creditoDeCarbono" element={<CreditoDeCarbonoPage />} />
        <Route path="bolsaVerde" element={<BolsaVerdePage />} />
        <Route path="doacoesSustentaveis" element={<DoacoesSustentaveisPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
