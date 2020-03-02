const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const requests = require('./routes/requests');

const app = express();

app.use('/api/requests', requests);

const PORT = process.env.PORT || 5000;

//app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
