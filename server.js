const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB();

const requests = require('./routes/requests');
const users = require('./routes/users');
const admin = require('./routes/admin');

const app = express();

app.use(express.json());

app.use('/api/requests', requests);
app.use('/api/users', users);
app.use('/api/admin', admin); //auth route

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
