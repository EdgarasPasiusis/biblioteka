const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);

module.exports = app;
