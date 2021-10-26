import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Navbar/Sidebar';

const DasboardLayout = (props) => {
	return (
		<>
			<Navbar />
			<Sidebar />
			{props.children}
		</>
	);
};

export default DasboardLayout;
