// TransactionHistory.js
import React from 'react';

function TransactionHistory({ transactions }) {
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              <span>{transaction.description}</span>
              <span>₹{transaction.amount}</span>
              <span>{transaction.type === 'income' ? '+' : '-'}</span>
            </li>
          ))
        ) : (
          <p>No transactions to display</p>
        )}
      </ul>
    </div>
  );
}

export default TransactionHistory;
