import axios from 'axios';

import {
	ALL_DEVICES_REQUEST,
	ALL_DEVICES_SUCCESS,
	ALL_DEVICES_FAIL,
	ADMIN_DEVICES_REQUEST,
	ADMIN_DEVICES_SUCCESS,
	ADMIN_DEVICES_FAIL,
	NEW_DEVICE_REQUEST,
	NEW_DEVICE_SUCCESS,
	NEW_DEVICE_FAIL,
	DELETE_DEVICE_REQUEST,
	DELETE_DEVICE_SUCCESS,
	DELETE_DEVICE_FAIL,
	UPDATE_DEVICE_REQUEST,
	UPDATE_DEVICE_SUCCESS,
	UPDATE_DEVICE_FAIL,
	DEVICE_DETAILS_REQUEST,
	DEVICE_DETAILS_SUCCESS,
	DEVICE_DETAILS_FAIL,
	CLEAR_ERRORS,
} from '../Constants/deviceConstants';

export const getDevices = async (dispatch) => {
	try {
		dispatch({ type: ALL_DEVICES_REQUEST });

		let link = `/api/v1/devices?keyword=${keyword}&page=${currentPage}`;

		// if (category) {
		// 	link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
		// }

		const { data } = await axios.get(link);

		dispatch({
			type: ALL_DEVICES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_DEVICES_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const newDevice = (formData) => async (dispatch) => {
	try {
		dispatch({ type: NEW_DEVICE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(`/api/v1/device/new`, formData, config);

		dispatch({
			type: NEW_DEVICE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEW_DEVICE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Delete product (Admin)
export const deleteDevice = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_DEVICE_REQUEST });

		const { data } = await axios.delete(`/api/v1/device/${id}`);

		dispatch({
			type: DELETE_DEVICE_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: DELETE_DEVICE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Update Product (ADMIN)
export const updateProduct = (id, deviceInfo) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_DEVICE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.put(
			`/api/v1/device/:id${id}`,
			deviceInfo,
			config
		);

		dispatch({
			type: UPDATE_DEVICE_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_DEVICE_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const getDeviceDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: DEVICE_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/v1/device/${id}`);

		dispatch({
			type: DEVICE_DETAILS_SUCCESS,
			payload: data.device,
		});
	} catch (error) {
		dispatch({
			type: DEVICE_DETAILS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const getAllDevices = () => async (dispatch) => {
	try {
		dispatch({ type: ADMIN_DEVICES_REQUEST });

		const { data } = await axios.get(`/api/v1/admin/devices`);

		dispatch({
			type: ADMIN_DEVICES_SUCCESS,
			payload: data.devices,
		});
	} catch (error) {
		dispatch({
			type: ADMIN_DEVICES_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
