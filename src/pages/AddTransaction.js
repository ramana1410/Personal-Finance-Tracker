// AddTransaction.js
import React, { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const [type, setType] = useState('income'); // Default to income
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(), // Unique ID for each transaction
      type,
      amount: parseFloat(amount),
      description,
    };
    onAddTransaction(transaction);
    // Reset form fields
    setType('income');
    setAmount('');
    setDescription('');
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
