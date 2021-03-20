import { Transaction } from './Transaction';

export const TransactionList = ({ currency, filteredTransactions }) => {
  return (
    <div className='container max-w-6xl mx-auto space-y-8'>
      {filteredTransactions.length ? (
        filteredTransactions.map((t, idx) => <Transaction currency={currency} t={t} key={idx} />)
      ) : (
        <div className='mx-auto'>
          <div className='text-2xl font-semibold text-center text-gray-600'>
            No Transactions as of yet
          </div>
          <img
            className='mx-auto'
            src='https://img.icons8.com/fluent/120/000000/nothing-found.png'
            alt='not found'
          />
        </div>
      )}
    </div>
  );
};
