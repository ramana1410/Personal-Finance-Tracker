// TaxCalculation.js
import React, { useState } from 'react';

function TaxCalculation() {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [taxAmount, setTaxAmount] = useState(null);

  const handleCalculateTax = () => {
    // Parse input values as numbers
    const incomeValue = parseFloat(income);
    const deductionsValue = parseFloat(deductions);
    const taxRateValue = parseFloat(taxRate);

    // Calculate taxable income and tax
    const taxableIncome = incomeValue - deductionsValue;
    const tax = taxableIncome * (taxRateValue / 100);

    // Set the tax amount to display
    setTaxAmount(tax);
  };

  return (
    <div>
      <h1>Tax Calculation</h1>
      <input
        type="number"
        placeholder="Total Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tax Rate (%)"
        value={taxRate}
        onChange={(e) => setTaxRate(e.target.value)}
      />
      <button onClick={handleCalculateTax}>Calculate Tax</button>

      {taxAmount !== null && (
        <div>
          <h2>Calculated Tax: ₹{taxAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default TaxCalculation;
