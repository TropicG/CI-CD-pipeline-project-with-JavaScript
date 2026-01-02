// src/server.js
const express = require('express');
const { add, subtract } = require('./math');

const app = express();
const PORT = 3000;

const HOST = '0.0.0.0'; 

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes! The app is running.');
});

app.get('/add', (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.send(`Result: ${add(a, b)}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
