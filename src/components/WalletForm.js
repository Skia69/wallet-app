import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export const WalletForm = ({ setWallet, setWallets }) => {
  const [currency, setCurrency] = useState('LBP');
  const formRef = useRef();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, balance, description } = formRef.current;

    let wallet = {
      name: name.value,
      balance: +balance.value,
      description: description.value,
      currency: currency,
      transactions: [],
    };

    setWallet(wallet);
    setWallets((prevWallets) => [...prevWallets, wallet]);
    history.push(`/wallet/${wallet.name}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-6 mx-auto mt-32 w-96'
        ref={formRef}>
        <div className='inline-flex items-center pb-4 text-3xl text-center text-gray-700 border-b-2 justify-evenly'>
          Let's get<span className='-ml-3 text-blue-500'>started</span>
          <img src='https://img.icons8.com/cute-clipart/64/000000/lol.png' alt='smiley' />
        </div>

        <label>
          <span className='text-xl font-semibold text-gray-700'>Name</span>
          <input
            type='text'
            name='name'
            required
            className='block w-full p-2 mt-1 bg-gray-200 border-transparent rounded-md shadow-inner focus:border-gray-500 focus:bg-white focus:ring-0'
          />
        </label>

        <label>
          <span className='block text-xl font-semibold text-gray-700'>Balance</span>
          <input
            type='number'
            name='balance'
            min='0'
            defaultValue='0'
            className='p-2 bg-gray-200 border-transparent rounded shadow-inner focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500'
            required
          />
        </label>
        <div>
          <div className='flex items-center mr-4'>
            <input id='radio1' type='radio' name='radio' className='hidden' />
            <label
              Htmlfor='radio1'
              onClick={() => setCurrency('LBP')}
              className={
                currency === 'LBP'
                  ? 'text-blue-500 flex items-center text-xl cursor-pointer'
                  : 'text-gray-500 flex items-center text-xl cursor-pointer'
              }>
              <span
                className={
                  currency === 'LBP'
                    ? 'bg-blue-500 inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                    : 'bg-gray-200 shadow-inner inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                }></span>
              Lebanese Pound
            </label>
          </div>
          <div className='flex items-center mr-4'>
            <input id='radio1' type='radio' name='radio' className='hidden' />
            <label
              Htmlfor='radio1'
              onClick={() => setCurrency('USD')}
              className={
                currency === 'USD'
                  ? 'text-blue-500 flex items-center text-xl cursor-pointer'
                  : 'text-gray-500 flex items-center text-xl cursor-pointer'
              }>
              <span
                className={
                  currency === 'USD'
                    ? 'bg-blue-500 inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                    : 'bg-gray-200 shadow-inner inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                }></span>
              US Dollar
            </label>
          </div>
        </div>
        <label>
          <span className='text-xl font-semibold text-gray-700'>Description</span>
          <textarea
            name='description'
            className='block w-full p-2 mt-1 bg-gray-200 border-transparent rounded-md shadow-inner focus:border-gray-500 focus:bg-white focus:ring-0'
            rows='3'
            required></textarea>
        </label>
        <button className='p-2 text-lg font-semibold text-white bg-blue-500 rounded' type='submit'>
          Create Wallet
        </button>
      </form>
    </>
  );
};
