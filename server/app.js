const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use('/api/v1/auth', authRoutes);

module.exports = app;
