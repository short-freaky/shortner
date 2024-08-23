const express = require('express');
const urlRoutes = require('./routes/urlRoutes');
const connectDB = require('./config/db');
const path = require('path'); 

const app = express();
app.use(express.json());

connectDB();
app.use('/', urlRoutes);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
