const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');

const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors');

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION')
	require('dotenv')
		.config({ path: 'Backend/config/config.env' })
		.config({ path: 'backend/config/config.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Import all routes
const auth = require('./routes/auth');
const device = require('./routes/device');

//Routes
app.use('/api/v1', auth);
app.use('/api/v1', device);

// if (process.env.NODE_ENV === 'PRODUCTION') {
app.use(express.static(path.join(__dirname, '../Frontend/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../Frontend/build/index.html'));
});

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
