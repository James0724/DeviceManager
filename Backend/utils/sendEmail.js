const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
	let text = req.body;

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMPT_USERNAME,
			password: process.env.SMTP_PASSWORD,
		},
	});

	const message = {
		from: `${process.env.SMTP_FROM_NAME} < ${process.env.SMTP_FROM_EMAIL}>`,
		to: 'test@email.com',
		subject: 'test mail',
		message: text,
	};

	await transporter.sendMail(message);
	res.status(200).json({
		success: true,
		message: 'Email sent',
	});
};

module.exports = sendEmail;
