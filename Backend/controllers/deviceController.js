const Device = require('../models/devices');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

// Create new device   =>   /api/v1/user/device/new
exports.newDevice = catchAsyncErrors(async (req, res, next) => {
	const { manufacturer, _id, model } = req.body;
	const device = await Device.create({
		manufacturer,
		_id,
		model,
		createdAt: Date.now(),
		user: req.user._id,
	});

	res.status(201).json({
		success: true,
		device,
	});
});

// Get all user devices   =>   /api/v1/mydevices/:userId
exports.getUserDevices = catchAsyncErrors(async (req, res, next) => {
	const userDevices = await Device.find({ user: req.params.userId });

	if (!userDevices) {
		return next(new ErrorHandler('No Registered Device found', 404));
	}

	res.status(200).json({
		status: 'success',
		length: userDevices.length,
		data: {
			devices: userDevices,
		},
	});
});

// Get all devices in the system (Admin)  =>   /api/v1/admin/registerd-devices
exports.getAllDevices = catchAsyncErrors(async (req, res, next) => {
	const deviceCount = await Device.countDocuments();
	const devices = await Device.find();

	res.status(200).json({
		success: true,
		devices,
		deviceCount,
	});
});

// Get single device details   =>   /api/v1/device/:id
exports.getSingleDevice = catchAsyncErrors(async (req, res, next) => {
	const device = await Device.findById(req.params.id);

	if (!device) {
		return next(new ErrorHandler('Device not found', 404));
	}

	res.status(200).json({
		success: true,
		device,
	});
});

// Update device owner,status   =>   /api/v1/user/device/:id
exports.updateDevice = catchAsyncErrors(async (req, res, next) => {
	let device = await Device.findById(req.params.id);

	if (!device) {
		return next(new ErrorHandler('Device not found', 404));
	}

	device = await Device.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		Device,
	});
});

// Delete Device from the system   =>   /api/v1/user/product/:id
exports.deleteDevice = catchAsyncErrors(async (req, res, next) => {
	const device = await Device.findById(req.params.id);

	if (!device) {
		return next(new ErrorHandler('Device not found', 404));
	}

	await device.remove();

	res.status(200).json({
		success: true,
		message: 'Device is deleted.',
	});
});
