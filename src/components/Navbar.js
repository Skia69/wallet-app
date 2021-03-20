import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => (
  <header>
    <nav className='flex items-center max-w-6xl mx-auto'>
      <Link className='inline-flex items-center' exact to='/'>
        <img src='https://img.icons8.com/cute-clipart/64/000000/wallet-app.png' alt='wallet logo' />
        <span className='ml-4 text-3xl font-semibold text-gray-700'>Budget ツ</span>
      </Link>
      <NavLink
        className='ml-auto text-2xl font-medium text-gray-400 cursor-pointer'
        activeStyle={{ color: '#1F2937', borderBottom: '2px solid #1F2937' }}
        exact
        to='/'>
        New Wallet
      </NavLink>
      <NavLink
        className='ml-10 text-2xl font-medium text-gray-400 cursor-pointer'
        activeStyle={{ color: '#1F2937', borderBottom: '2px solid #1F2937' }}
        exact
        to='/about'>
        About
      </NavLink>
    </nav>
  </header>
);
