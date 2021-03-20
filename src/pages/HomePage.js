import React from 'react';
import { Navbar, Sidebar, WalletForm } from '../components';

export const HomePage = ({ wallets, setWallet, setWallets }) => {
  return (
    <div className='flex h-screen antialiased bg-gray-100'>
      <div className='flex-1 p-12'>
        <Navbar />
        <WalletForm setWallet={setWallet} setWallets={setWallets} />
      </div>
      <Sidebar wallets={wallets} />
    </div>
  );
};
