import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from "react";
import TelaInicial from "./pages/telaInicialPage";
import AboutUs from "./pages/quemSomosNosPage";
import BlockchainPage from "./pages/blockchainPage";
import CreditoDeCarbonoPage from "./pages/creditoDeCarbonoPage";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '0x86C6F40Ec68Baf5Eeb327eD99e91Ce866b70D540',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

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

