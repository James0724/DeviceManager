import React from 'react';
import Sidebar from '../Components/Navbar/Sidebar';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-3">
						<Sidebar />
					</div>

					<div className="col-12 col-md-9">
						<h1>content</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
