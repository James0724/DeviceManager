const express = require('express');
const router = express.Router();

const {
	getUserDevices,
	getAllDevices,
	newDevice,
	getSingleDevice,
	updateDevice,
	deleteDevice,
} = require('../controllers/deviceController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/devices/:userid').get(isAuthenticatedUser, getUserDevices);
router.route('/device/:id').get(getSingleDevice);
router.route('/device/new').post(isAuthenticatedUser, newDevice);
router.route('/device/:id').put(updateDevice).delete(deleteDevice);
router
	.route('/admin/devices')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllDevices);
module.exports = router;
