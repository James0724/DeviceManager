import React from 'react';
import DashboardLayout from '../Layout/DashboardLayout';

const Dashboard = () => {
	return (
		<DashboardLayout>
			<div className="container">
				<article className="content dashboard-page">
					<h1>WELCOME</h1>
					<h2>About The Service</h2>
					<p>
						Basically a small intro fit best here about this app below is some
						dummy text that i will use every where cause we need to think even
						of the contect deeply Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</article>
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
