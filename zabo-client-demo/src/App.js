import ZaboLoader from './components/ZaboLoader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import './App.css';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import BalanceList from './components/BalanceList';
import ConnectWallet from './components/ConnectWallet';
import Taskbar from './components/Taskbar';
import { useState } from 'react';
import Info from './components/Info';
import TransactionList from './components/TransactionList';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const [balances, setBalances] = useState([]);
  const [connected, setConnected] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <ZaboLoader>
          <ConnectWallet
            setConnected={setConnected}
            setBalances={setBalances}
            connected={connected}
          />
          <Info />
          <BalanceList setBalances={setBalances} balances={balances} />
          <TransactionList connected={connected} />
        </ZaboLoader>
        <Taskbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
