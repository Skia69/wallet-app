import { TransactionList } from './TransactionList';

export const Wallet = ({ filteredTransactions, currentWallet, total }) => {
  const { currency } = currentWallet;
  return (
    <>
      <div className='flex mb-8'>
        <div className='flex-1 text-3xl font-medium text-gray-700'>January 27 2021</div>
        {/* <div className="mr-12 text-xl font-medium text-gray-400">
          Number of transactions: 21
        </div> */}
        <div className='text-xl font-medium text-gray-400'>
          Value: {currency === 'USD' ? '$ ' : 'LBP '} {total ? total.toFixed(2) : 0.0}
        </div>
      </div>
      <TransactionList currency={currency} filteredTransactions={filteredTransactions} />
    </>
  );
};
