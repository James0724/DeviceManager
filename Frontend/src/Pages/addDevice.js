import React, { useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Button from 'react-bootstrap/Button';

const AddDevice = () => {
	const [device, setDevice] = useState('');
	const [company, setCompany] = useState('');
	const [serial, setSerial] = useState('');
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

								<Button className="p-3 mt-3" type="submit">
									submit
								</Button>
							</div>
						</form>
					</div>
				</article>
			</div>
		</DashboardLayout>
	);
};

export default AddDevice;
