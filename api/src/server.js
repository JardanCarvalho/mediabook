require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDataBase = require('./database');
const routes = require('./routes');

connectToDataBase();

const app = express();
const port = 3333;

app.use(routes);

app.listen(port, () => {
  console.log(`💡 Backend started at http://localhost:${port}`);
}
);
