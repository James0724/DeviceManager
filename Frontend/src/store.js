import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	myDevicesReducer,
	addDeviceReducer,
	deviceReducer,
	deviceDetailsReducer,
} from './Reducers/deviceReducer';
import {
	authReducer,
	userReducer,
	forgotPasswordReducer,
	allUsersReducer,
	userDetailsReducer,
} from './Reducers/userReducer';

const reducer = combineReducers({
	devices: myDevicesReducer,
	device: deviceReducer,
	devicesDetails: deviceDetailsReducer,
	newDevice: addDeviceReducer,
	auth: authReducer,
	user: userReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
	forgotPassword: forgotPasswordReducer,
});

const middlware = [thunk];
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
