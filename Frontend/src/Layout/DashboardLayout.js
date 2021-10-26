import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Navbar/sidebar';

const DasboardLayout = (props) => {
	return (
		<>
			<Sidebar />
			{props.children}
		</>
	);
};

export default DasboardLayout;
