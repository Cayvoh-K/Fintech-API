const express = require('express');
const app = express();
app.use(express.json());

// Dummy transactions data
const transactions = [
  { id: 1, amount: 5000, type: 'card', date: '2025-05-19' },
  { id: 2, amount: 3000, type: 'mobile', date: '2025-05-19' }
];

// Transactions endpoint
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

// Expense endpoint
app.post('/expense', (req, res) => {
  const expense = req.body;
  // Simulate logging to file
  require('fs').appendFileSync('transactions.log', JSON.stringify(expense) + '\n');
  res.json({ status: 'Expense logged', data: expense });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => console.log('API running on port 3000'));
