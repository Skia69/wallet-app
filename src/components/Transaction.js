const icons = {
  'Restaurant & Cafe': {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        />
      </svg>
    ),
    color: 'text-blue-600',
    background: 'bg-blue-100',
  },
  'Clothes & Shopping': {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
        />
      </svg>
    ),
    color: 'text-pink-600',
    background: 'bg-pink-100',
  },
  'Credit & Loans': {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    color: 'text-purple-600',
    background: 'bg-purple-100',
  },
  'Gifts Card': {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    color: 'text-yellow-600',
    background: 'bg-yellow-100',
  },
  Salary: {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    color: 'text-green-600',
    background: 'bg-green-100',
  },
  Donations: {
    svg: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
    ),
    color: 'text-red-600',
    background: 'bg-red-100',
  },
};

export const Transaction = ({ currency, t }) => {
  const { type, amount } = t;
  console.log('t', type);

  return (
    <div className='flex items-center p-10 bg-white rounded-lg shadow-sm'>
      <div
        className={`${icons[type].color} ${icons[type].background} p-2 font-semibold rounded-lg`}>
        {icons[type].svg}
      </div>
      <div className='flex-1 ml-4'>
        <div className='text-2xl font-semibold leading-5 text-gray-700'>{type}</div>
        <div className='text-xl font-medium text-gray-400'>27 January 2021</div>
      </div>
      <div className='text-2xl font-semibold text-gray-700'>
        {currency === 'USD' ? '$ ' : 'LBP '}
        {amount.toFixed(2)}
      </div>
    </div>
  );
};
