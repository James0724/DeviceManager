import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { addDevice } from '../Actions/deviceActions';

const AddDevice = () => {
	const [model, setModel] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const [serialNo, setSerialNo] = useState('');

	const dispatch = useDispatch();
	const submitNewDevice = (e) => {
		e.preventDefault();
		console.log(manufacturer, serialNo, model);
		dispatch(addDevice(manufacturer, serialNo, model));
	};

	return (
		<DashboardLayout>
			<div className="container">
				<article className="content dashboard-page">
					<div className="add-device">
						<form className="w-75" encType="multipart/form-data" method="post">
							<div className="row">
								<label className="p-2" htmlFor="device">
									{' '}
									Device Model
								</label>
								<input
									type="text"
									className="form-control"
									id="device"
									placeholder=" device"
									value={model}
									onChange={(e) => setModel(e.target.value)}
								/>
								<label className="p-2" htmlFor="company">
									Company
								</label>
								<input
									type="text"
									className="form-control"
									id="company"
									placeholder="company"
									value={manufacturer}
									onChange={(e) => setManufacturer(e.target.value)}
								/>

								<label className="p-2" htmlFor="serial number">
									serialnumber
								</label>
								<input
									type="serial number"
									className="form-control"
									id="serialnumber"
									placeholder="Enter device serial number"
									value={serialNo}
									onChange={(e) => setSerialNo(e.target.value)}
								/>

								<Button className="p-3 mt-3" onClick={submitNewDevice}>
									submit
								</Button>
							</div>
						</form>
					</div>
				</article>
			</div>
			<ToastContainer autoClose={3000} />
		</DashboardLayout>
	);
};

export default AddDevice;
