const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/alasdeangel/clientes', require('./routes/clientes'))
app.use('/api/alasdeangel/products', require('./routes/products'))
app.use('/api/alasdeangel/pedidos', require('./routes/pedidos'))
app.use('/api/alasdeangel/galerias', require('./routes/galerias'))

module.exports = app;