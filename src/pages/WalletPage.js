import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Sidebar, TransactionForm, Wallet } from '../components';

export const WalletPage = ({ setTransactions, transactions, wallet, wallets }) => {
  const { name } = useParams();

  const currentWallet = wallets.find((wallet) => wallet.name === name);

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.walletName === name,
  );

  const total = filteredTransactions.reduce((acc, val) => acc + val.amount, currentWallet.balance);

  return (
    <div className='flex h-screen antialiased'>
      <div className='flex-1 px-6 py-12 overflow-y-auto'>
        <Navbar />
        <div className='flex items-center max-w-6xl gap-4 mx-auto my-20'>
          <img src='https://img.icons8.com/color/96/000000/wallet--v2.png' alt='wallet' />
          <div>
            <div className='text-4xl font-medium text-blue-500'>{currentWallet.name}</div>
            <div className='text-xl font-medium text-gray-400'>{currentWallet.description}</div>
          </div>
        </div>
        <div className='max-w-6xl mx-auto'>
          <TransactionForm currentWallet={currentWallet} setTransactions={setTransactions} />
          <Wallet
            filteredTransactions={filteredTransactions}
            currentWallet={currentWallet}
            total={total}
            wallet={wallet}
          />
        </div>
      </div>
      <Sidebar wallets={wallets} />
    </div>
  );
};
