import React from 'react';

function Dashboard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card">Total Balance: ₹{balance}</div>
      <div className="card">Total Income: ₹{income}</div>
      <div className="card">Total Expenses: ₹{expenses}</div>
    </div>
  );
}

export default Dashboard;
