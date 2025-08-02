import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-transaction">Add Transaction</Link></li>
        <li><Link to="/transaction-history">Transaction History</Link></li>
        <li><Link to="/bills">Bill Reminder</Link></li>
        <li><Link to="/tax">Tax Calculation</Link></li>
        <li><Link to="/debts">Debt Tracking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; // Ensure there is a default export

