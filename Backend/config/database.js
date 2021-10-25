const mongoose = require('mongoose');

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((con) => {
			console.log(
				`MongoDB Database connected with HOST: ${con.connection.host}`
			);
		})
		.catch((error) => {
			console.error(error);
		});
};

module.exports = connectDatabase;
