import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DashboardLayout from '../Layout/DashboardLayout';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { myDevices, clearErrors } from '../Actions/deviceActions';

const MyDevices = () => {
	const [devicename, setDevicename] = useState('');
	const [company, setCompany] = useState('');
	const [serial, setSerial] = useState('');

	const dispatch = useDispatch();
	const { loading, error, devices } = useSelector((state) => state.devices);
	useEffect(() => {
		dispatch(myDevices());
		if (error) {
			toast.warning(error);
			dispatch(clearErrors());
		}
	}, [dispatch, error]);

	const setDevices = devices.map(
		({ deviceCategory, manufacturer, model, _id }, i) => (
			<div key={i} className="card">
				<div className="card-body">
					<h3>{model}</h3>
					<h4>{deviceCategory}</h4>
					<h5>{manufacturer}</h5>
					<h5>{_id}</h5>
				</div>
			</div>
		)
	);

	console.log('devices is ', devices);
	return (
		<>
			<DashboardLayout>
				<div className="container">
					<article className="content device-page">
						<div className="row mt-2">
							<div className="col-md-6 mt-3">
								<h2>list Of ur devices</h2>
								<div className="mydevices">{setDevices}</div>
							</div>
							<div className="col-md-6 mt-3 p-2 ">
								<div className="add-device">
									<form
										className="w-75"
										encType="multipart/form-data"
										method="post">
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
												value={devicename}
												onChange={(e) => setDevicename(e.target.value)}
											/>
											<label className="p-2" htmlFor="company">
												Company
											</label>
											<input
												type="text"
												className="form-control"
												id="company"
												placeholder="company"
												value={company}
												onChange={(e) => setCompany(e.target.value)}
											/>

											<label className="p-2" htmlFor="serial number">
												serialnumber
											</label>
											<input
												type="serial number"
												className="form-control"
												id="serialnumber"
												placeholder="Enter device serial number"
												value={serial}
												onChange={(e) => setSerial(e.target.value)}
											/>

											{/* <div className="col-sm-6 mt-3">
										<img src={RegisterSvg} alt="Svg" class="img-fluid" />
									</div> */}
											<Button className="p-3 mt-3" type="submit">
												submit
											</Button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</article>
				</div>
			</DashboardLayout>
		</>
	);
};

export default MyDevices;
