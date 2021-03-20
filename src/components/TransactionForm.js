import { useState, useRef } from 'react';

export const TransactionForm = ({ setTransactions, currentWallet }) => {
  const [transactionType, setTransactionType] = useState('income');
  const formRef = useRef();
  console.log(currentWallet.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { select, amount } = formRef.current;
    let parsedAmount = +amount.value;
    let transaction = {
      walletName: currentWallet.name,
      type: select.value,
      amount: transactionType === 'income' ? parsedAmount : -1 * parsedAmount,
    };
    console.log(transaction.amount);
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);

    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-end gap-12 mb-20' ref={formRef}>
      <label className='block'>
        <span className='text-lg font-medium text-gray-700'>Type of transaction?</span>
        <select
          name='select'
          className='block w-full mt-1 text-gray-700 bg-gray-200 border-transparent rounded-md shadow-inner focus:border-gray-500 focus:bg-white focus:ring-0'>
          <option selected hidden>
            Select an option
          </option>
          <option value='Restaurant & Cafe'>Restaurant & Cafe</option>
          <option value='Clothes & Shopping'>Clothes & Shopping</option>
          <option value='Credit & Loans'>Credit & Loans</option>
          <option value='Gifts Card'>Gifts Card</option>
          <option value='Salary'>Salary</option>
          <option value='Donations'>Donations</option>
        </select>
      </label>

      <div>
        <span className='text-lg font-medium text-gray-700'>Amount?</span>
        <input
          type='number'
          min='0'
          defaultValue='0'
          name='amount'
          className='block w-full p-2 mt-1 bg-gray-200 border-transparent rounded-md shadow-inner focus:border-gray-500 focus:bg-white focus:ring-0'
          placeholder=''
        />
      </div>

      <div>
        <div className='flex items-center mb-2'>
          <input id='radio1' type='radio' name='radio' className='hidden' />
          <label
            htmlFor='radio1'
            onClick={() => setTransactionType('income')}
            className={
              transactionType === 'income'
                ? 'text-green-500 flex items-center text-xl cursor-pointer'
                : 'text-gray-400 flex items-center text-xl cursor-pointer'
            }>
            <span
              className={
                transactionType === 'income'
                  ? 'bg-green-500 inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                  : 'bg-gray-200 shadow-inner inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
              }></span>
            Income
          </label>
        </div>
        <div className='flex items-center'>
          <input id='radio1' type='radio' name='radio' className='hidden' />
          <label
            htmlFor='radio1'
            onClick={() => setTransactionType('expense')}
            className={
              transactionType === 'expense'
                ? 'text-red-500 flex items-center text-xl cursor-pointer'
                : 'text-gray-400 flex items-center text-xl cursor-pointer'
            }>
            <span
              className={
                transactionType === 'expense'
                  ? 'bg-red-500 inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
                  : 'bg-gray-200 shadow-inner inline-block w-6 h-6 mr-2 border rounded-full border-grey flex-no-shrink'
              }></span>
            Expense
          </label>
        </div>
      </div>

      <button
        className='px-4 py-3 text-lg font-medium text-white bg-green-500 rounded-md shadow-md'
        type='submit'>
        Insert Transaction
      </button>
    </form>
  );
};
