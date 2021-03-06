require('dotenv').config( { path: `ENV_VARIABLES/.env.${process.env.NODE_ENV}` } );

// console.log("PARSED KEY " + process.env.NODE_ENV);

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = 4848;

//console.log(process.env.NODE_ENV)

const getWeatherRoutes = require('./routes/get-weather');
const testRoutes = require('./routes/test-data');

// Allows the data being sent by the POST
// request to be read by the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// HTTP request logger
if (process.env.NODE_ENV !== "test") app.use(morgan('tiny'));

app.use('/api', getWeatherRoutes);
app.use('/test-data', testRoutes);

const server = app.listen(PORT, '127.0.0.1',console.log('Server is listening on PORT:', PORT));

module.exports = server;