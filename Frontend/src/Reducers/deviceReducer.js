import {
	ALL_DEVICES_REQUEST,
	ALL_DEVICES_SUCCESS,
	ALL_DEVICES_FAIL,
	ADMIN_DEVICES_REQUEST,
	ADMIN_DEVICES_SUCCESS,
	ADMIN_DEVICES_FAIL,
	NEW_DEVICE_REQUEST,
	NEW_DEVICE_RESET,
	NEW_DEVICE_SUCCESS,
	NEW_DEVICE_FAIL,
	DELETE_DEVICE_RESET,
	DELETE_DEVICE_REQUEST,
	DELETE_DEVICE_SUCCESS,
	DELETE_DEVICE_FAIL,
	UPDATE_DEVICE_RESET,
	UPDATE_DEVICE_REQUEST,
	UPDATE_DEVICE_SUCCESS,
	UPDATE_DEVICE_FAIL,
	DEVICE_DETAILS_REQUEST,
	DEVICE_DETAILS_SUCCESS,
	DEVICE_DETAILS_FAIL,
	CLEAR_ERRORS,
} from '../Constants/deviceConstants';

export const devicesReducer = (state = { devices: [] }, action) => {
	switch (action.type) {
		case ALL_DEVICES_REQUEST:
		case ADMIN_DEVICES_REQUEST:
			return {
				loading: true,
				devices: [],
			};

		case ALL_DEVICES_SUCCESS:
			return {
				loading: false,
				devices: action.payload.devices,
				//deicesCount: action.payload.devicesCount,
			};

		case ADMIN_DEVICES_SUCCESS:
			return {
				loading: false,
				devices: action.payload,
			};

		case ALL_DEVICES_FAIL:
		case ADMIN_DEVICES_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const newDeviceReducer = (state = { device: {} }, action) => {
	switch (action.type) {
		case NEW_DEVICE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case NEW_DEVICE_SUCCESS:
			return {
				loading: false,
				success: action.payload.success,
				device: action.payload.device,
			};

		case NEW_DEVICE_FAIL:
			return {
				...state,
				error: action.payload,
			};

		case NEW_DEVICE_RESET:
			return {
				...state,
				success: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const deviceReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_DEVICE_REQUEST:
		case UPDATE_DEVICE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case DELETE_DEVICE_SUCCESS:
			return {
				...state,
				loading: false,
				isDeleted: action.payload,
			};

		case UPDATE_DEVICE_SUCCESS:
			return {
				...state,
				loading: false,
				isUpdated: action.payload,
			};

		case DELETE_DEVICE_FAIL:
		case UPDATE_DEVICE_FAIL:
			return {
				...state,
				error: action.payload,
			};

		case DELETE_DEVICE_RESET:
			return {
				...state,
				isDeleted: false,
			};

		case UPDATE_DEVICE_RESET:
			return {
				...state,
				isUpdated: false,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const deviceDetailsReducer = (state = { device: {} }, action) => {
	switch (action.type) {
		case DEVICE_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case DEVICE_DETAILS_SUCCESS:
			return {
				loading: false,
				device: action.payload,
			};

		case DEVICE_DETAILS_FAIL:
			return {
				...state,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
