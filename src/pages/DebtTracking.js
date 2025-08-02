// DebtTracking.js
import React, { useState } from 'react';

function DebtTracking() {
  const [debts, setDebts] = useState([]);
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [totalDebt, setTotalDebt] = useState(0);

  const handleAddDebt = () => {
    // Parse input values as numbers
    const amountValue = parseFloat(amount);
    const interestRateValue = parseFloat(interestRate);
    
    // Create a new debt entry
    const newDebt = {
      id: new Date().getTime(), // Unique ID using current timestamp
      amount: amountValue,
      interestRate: interestRateValue,
      dueDate: dueDate,
      interest: calculateInterest(amountValue, interestRateValue), // Calculate interest on the amount
    };

    // Add the new debt entry to the debts array
    setDebts([...debts, newDebt]);

    // Clear input fields
    setAmount('');
    setInterestRate('');
    setDueDate('');
  };

  const calculateInterest = (amount, interestRate) => {
    // Simple interest calculation: Interest = (Principal * Rate * Time) / 100
    // Assuming 1 year for simplicity
    return (amount * interestRate * 1) / 100;
  };

  const calculateTotalDebt = () => {
    const total = debts.reduce((sum, debt) => sum + debt.amount + debt.interest, 0);
    setTotalDebt(total);
  };

  return (
    <div>
      <h1>Debt Tracking</h1>

      {/* Debt Entry Form */}
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={handleAddDebt}>Add Debt</button>
      </div>

      {/* Debt List */}
      <div>
        <h2>Debts</h2>
        <ul>
          {debts.map((debt) => (
            <li key={debt.id}>
              <strong>Amount:</strong> ₹{debt.amount} | 
              <strong> Interest:</strong> ₹{debt.interest} | 
              <strong> Due Date:</strong> {debt.dueDate}
            </li>
          ))}
        </ul>
      </div>

      {/* Total Debt */}
      <div>
        <button onClick={calculateTotalDebt}>Calculate Total Debt</button>
        <h2>Total Debt: ₹{totalDebt.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default DebtTracking;
