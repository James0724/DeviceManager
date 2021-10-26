import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { HiTemplate } from 'react-icons/hi';
import { BiDevices } from 'react-icons/bi';

const Sidebar = () => {
	// const [show, setShow] = useState(true);

	// const handleClick = () => {
	// 	setShow(!show);
	// };

	return (
		<>
			<aside class="sidebar">
				<div class="sidebar-container">
					{/* <div class="sidebar-header">
                            <div class="brand">
                                <div class="logo">
                                    <span class="l l1"></span>
                                    <span class="l l2"></span>
                                    <span class="l l3"></span>
                                    <span class="l l4"></span>
                                    <span class="l l5"></span>
                                </div> Modular Admin
                            </div>
                        </div> */}
					<nav class="menu mt-5">
						<ul class="sidebar-menu metismenu" id="sidebar-menu">
							<li class="active">
								<Link to="/dashboardHome">
									<IoHome /> Dashboard{' '}
								</Link>
							</li>
							<li class="active">
								<Link to="/mydevices">
									<IoHome /> My Devices
								</Link>
							</li>
							<li>
								<Link
									to="#collapseMenu"
									data-bs-toggle="collapse"
									aria-expanded="false"
									aria-controls="collapseMenu">
									<HiTemplate /> Device Manager{' '}
								</Link>
								<ul class="sidebar-nav collapse" id="collapseMenu">
									<li>
										<Link to="/transferdevice"> Transfer Device </Link>
									</li>
									<li>
										<Link to="/addDevice"> Add Device </Link>
									</li>
									<li>
										<Link to="/update/status"> Update Status </Link>
									</li>
									<li>
										<Link to="/update/report"> Report Device </Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									to="#collapseMenu1"
									data-bs-toggle="collapse"
									aria-expanded="false"
									aria-controls="collapseMenu1">
									<BiDevices /> History{' '}
								</Link>
								<ul class="sidebar-nav collapse" id="collapseMenu1">
									<li>
										<Link to="/update/user"> Transfered Device </Link>
									</li>
									<li>
										<Link to="/update/status"> lost Devices </Link>
									</li>
								</ul>
							</li>
							<li class="active">
								<Link to="/mydevices">
									<IoHome /> Status
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</aside>
			{/* <div className="sidebar-wrapper">
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
			</div> */}
		</>
	);
};

export default Sidebar;
