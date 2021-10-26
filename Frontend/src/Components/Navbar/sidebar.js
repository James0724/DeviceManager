import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { HiTemplate } from 'react-icons/hi';
import { BiDevices } from 'react-icons/bi';
import { ImSearch } from 'react-icons/im';
import { AiOutlineUser, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdImportantDevices } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/userActions';

const Sidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		localStorage.clear();
		dispatch(logout());
		console.log('loggedout');
		toast.success('Logged out successfully.');
	};

	const onClickMobileMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div
				className={`toggle-menu d-sm-block d-md-none ${
					menuOpen ? 'opened' : ''
				}`}
				onClick={onClickMobileMenu}>
				<svg width="40" height="40" viewBox="0 0 100 100">
					<path
						class="line line1"
						d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
					/>
					<path class="line line2" d="M 20,50 H 80" />
					<path
						class="line line3"
						d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
					/>
				</svg>
			</div>
			<aside
				className={`sidebar ${menuOpen ? 'sidebar-active' : 'sidebar-closed'}`}>
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
			<nav
				className={`dashboard-nav ${
					menuOpen ? 'dashboard-half' : 'dashboard-full'
				}`}>
				<div className="header-block search-box">
					<button className="btn-search">
						<ImSearch />
					</button>
					<input
						type="text"
						className="input-search"
						placeholder="Type to Search..."
					/>
				</div>
				<div class="header-block user-nav">
					<ul class="nav-profile">
						<li class="profile dropdown">
							<a
								class="nav-link dropdown-toggle"
								id="dropdownMenuButton"
								data-bs-toggle="dropdown"
								role="button"
								aria-expanded="false">
								{/* <div class="img">
									<img
										src={`url("https://avatars3.githubusercontent.com/u/3959008?v=3&amp;s=40")`}
									/>
								</div> */}
								<span class="name">{user.name}</span>
							</a>
							<div
								class="dropdown-menu profile-dropdown-menu"
								aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="!#">
									<AiOutlineUser /> Profile{' '}
								</a>
								<a class="dropdown-item" href="!#">
									<MdImportantDevices /> Device Manager{' '}
								</a>
								<a class="dropdown-item" href="!#">
									<AiFillSetting /> Settings{' '}
								</a>
								<div class="dropdown-divider"></div>
								<span class="dropdown-item" onClick={logoutHandler}>
									<AiOutlineLogout /> Logout{' '}
								</span>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;
