const express = require('express');
const router = express.Router();

const { sendMail } = require('../utils/sendEmail');

router.route('/send_mail').post(sendMail);

module.exports = router;
