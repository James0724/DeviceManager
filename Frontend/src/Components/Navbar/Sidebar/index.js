import React, { useState } from 'react';

const Sidebar = () => {
	const [show, setShow] = useState(true);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<div className="sidebar-wrapper">
			<div className="sidebar-title-menu" onClick={handleClick}>
				Devices
			</div>
			<div className={`sidebar-dropdown-items ${show ? 'show' : 'close'}`}>
				<div className="sidebar-item">
					<a href="#!">Add Device</a>
				</div>
				<div className="sidebar-item">
					<span className="sidebar-item" href="#">
						Tranfer Device
					</span>
				</div>
				<div className="sidebar-item">
					<span className="sidebar-item" href="auth-lock-screen.html">
						Report Device
					</span>
				</div>
				<div className="sidebar-item">
					<span className="sidebar-item" href="auth-sign-in-social.html">
						Recent Device
					</span>
				</div>
			</div>

			<div className="sidebar-title-menu">Search Device</div>
			<div className="sidebar-title-menu">Report Device</div>
			<div className="sidebar-title-menu">Status</div>
		</div>
	);
};

export default Sidebar;
