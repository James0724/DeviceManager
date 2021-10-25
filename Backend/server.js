const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

//setting config file
dotenv.config({ path: 'Backend/config/config.env' });

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION')
	require('dotenv')
		.config({ path: 'Backend/config/config.env' })
		.config({ path: 'Backend/config/config.env' });
// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
	console.log(
		`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
	);
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection', (err) => {
	console.log(`ERROR: ${err.stack}`);
	console.log('Shutting down the server due to Unhandled Promise rejection');
	server.close(() => {
		process.exit(1);
	});
});
