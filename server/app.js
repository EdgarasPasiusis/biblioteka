const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const favoritiesController = require('./routes/favoritesRoutes');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categorys', categoryRoutes);
app.use('/api/v1/reservations', reservationRoutes);
app.use('/api/v1/favorites', favoritiesController);

module.exports = app;
