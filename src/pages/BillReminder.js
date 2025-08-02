// src/pages/BillReminder.js
// BillReminder.js
import React, { useState } from 'react';

function BillReminder() {
  const [bills, setBills] = useState([]);
  const [billName, setBillName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddBill = () => {
    const newBill = {
      billName,
      amount: parseFloat(amount),
      dueDate,
    };
    setBills([...bills, newBill]);
    setBillName('');
    setAmount('');
    setDueDate('');
  };
  

  return (
    <div>
      <h1>Bill Reminder</h1>
      <input
        type="text"
        placeholder="Bill Name"
        value={billName}
        onChange={(e) => setBillName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddBill}>Add Bill</button>

      <h2>Upcoming Bills</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            <strong>{bill.billName}</strong> - ₹{bill.amount} - Due on: {bill.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BillReminder;
