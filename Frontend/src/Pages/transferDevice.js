import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DashboardLayout from '../Layout/DashboardLayout';

const TransferDevice = () => {
	const [newusername, setNewusername] = useState('');
	return (
		<DashboardLayout>
			<div className="container">
				<article className="content Transfer-page">
					<div className="transer-device">
						<h3>Select device to transfer</h3>
					</div>
					<div className="transfer-table">
						<form encType="multipart/form-data" method="post">
							<div className="row">
								<label className="p-2" htmlFor="newusername">
									{' '}
									New User
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									placeholder=" New User Name"
									value={newusername}
									onChange={(e) => setNewusername(e.target.value)}
								/>
								<label className="p-2" htmlFor="email">
									message
								</label>
								<input
									type="text-area"
									className="form-control"
									id="message"
									placeholder="Reason for Transfer"
								/>
								<Button className="p-3 mt-3" type="submit">
									Transfer
								</Button>
							</div>
						</form>
					</div>
				</article>
			</div>
		</DashboardLayout>
	);
};

export default TransferDevice;
