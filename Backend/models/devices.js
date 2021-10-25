const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		required: [true, 'Please enter device serial number'],
		maxLength: [100, 'Product name cannot exceed 100 characters'],
	},
	_id: false,
	manufacturer: {
		type: String,
		required: [true, 'Please enter device manufacture name'],
		trim: true,
		maxLength: [100, 'Product name cannot exceed 100 characters'],
	},
	model: {
		type: String,
		required: [true, 'Please enter device model'],
		maxLength: [100, 'Product name cannot exceed 100 characters'],
	},

	deviceCategory: {
		type: String,
		default: '',
	},

	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},

	isReported: {
		type: Boolean,
		default: false,
	},
	isLost: {
		type: Boolean,
		default: false,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Device', deviceSchema);
