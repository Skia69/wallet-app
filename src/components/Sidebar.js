import { Link } from 'react-router-dom';

const colors = [
  'bg-purple-500',
  'bg-yellow-500',
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
];

export const Sidebar = ({ wallets }) => (
  <aside className='flex-shrink-0 h-full p-12 overflow-auto border border-l border-gray-200 bg-gray-50 w-96'>
    <div className='my-4 text-2xl font-semibold text-gray-700'>Wallets</div>

    <ul className='flex flex-col gap-4 divide-y-2'>
      {wallets.length ? (
        wallets.map((wallet, idx) => (
          <Link to={`/wallet/${wallet.name}`}>
            <li className='flex items-center gap-4 pt-4'>
              <svg
                className={`p-2 text-white ${colors[idx]} rounded-md w-14 h-14`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                />
              </svg>
              <div>
                <div className='text-xl font-semibold text-gray-700'>{wallet.name}</div>
                <div className='font-medium text-gray-400'>
                  {wallet.currency} {wallet.balance.toFixed(2)}
                </div>
              </div>
            </li>
          </Link>
        ))
      ) : (
        <div className='self-center mt-64 text-center'>
          <img
            className='mx-auto'
            src='https://img.icons8.com/fluent/120/000000/nothing-found.png'
            alt='not found'
          />
          <div className='text-2xl font-semibold text-gray-600'>You don't have any wallet yet</div>
        </div>
      )}
    </ul>

    {console.log(wallets)}
  </aside>
);
