// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import TransactionHistory from './pages/TransactionHistory';
import Navbar from './components/Navbar';
import BillReminder from './pages/BillReminder';
import TaxCalculation from './pages/TaxCalculation';
import DebtTracking from './pages/DebtTracking';



function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard transactions={transactions} />} />
          <Route
            path="/add-transaction"
            element={<AddTransaction onAddTransaction={handleAddTransaction} />}
          />
          <Route
            path="/transaction-history"
            element={<TransactionHistory transactions={transactions} />}
          />
           <Route path="/bills" element={<BillReminder />} />
           <Route path="/tax" element={<TaxCalculation />} />
           <Route path="/debts" element={<DebtTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
