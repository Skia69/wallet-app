import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, WalletPage, About } from './pages';

function App() {
  const initialState = {
    name: '',
    balance: null,
    description: '',
    currency: '',
  };

  const [wallet, setWallet] = useState(initialState);
  const [transactions, setTransactions] = useState([{ walletName: '', type: '', amount: null }]);
  const [wallets, setWallets] = useState([]);

  return (
    <div className='bg-gray-100'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage wallets={wallets} setWallet={setWallet} setWallets={setWallets} />
          </Route>
          <Route exact path='/wallet/:name'>
            <WalletPage
              setTransactions={setTransactions}
              transactions={transactions}
              wallet={wallet}
              wallets={wallets}
            />
          </Route>
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
