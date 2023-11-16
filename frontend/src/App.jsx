import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from "react";
import TelaInicial from "./pages/telaInicialPage";
import AboutUs from "./pages/quemSomosNosPage";
import BlockchainPage from "./pages/blockchainPage";
import CreditoDeCarbonoPage from "./pages/creditoDeCarbonoPage";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TelaInicial />} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="blockchainPage" element={<BlockchainPage/>} />
          <Route path="creditoDeCarbono" element={<CreditoDeCarbonoPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Tela Inicial</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blockchainPage">Blockchain</Link>
          </li>
          <li>
            <Link to="/creditoDeCarbono">Credito de Carbono</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
