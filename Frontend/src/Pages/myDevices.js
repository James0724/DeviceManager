import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Button from 'react-bootstrap/Button';

const MyDevices = () => {
	const [device, setDevice] = useState('');
	const [company, setCompany] = useState('');
	const [serial, setSerial] = useState('');
	return (
		<>
			<DashboardLayout>
				<div className="container">
					<article className="content device-page">
						<div className="row mt-2">
							<div className="col-md-6 mt-3">
								<h2>list Of ur devices</h2>
								<div className="mydevices"></div>
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
												value={device}
												onChange={(e) => setDevice(e.target.value)}
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
