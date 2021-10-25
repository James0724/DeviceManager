import React from 'react';
import { ImSearch } from 'react-icons/im';
import { AiOutlineUser, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdImportantDevices } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/userActions';

const Navbar = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		localStorage.clear();
		dispatch(logout());
		console.log('loggedout');
		toast.success('Logged out successfully.');
	};
	return (
		<>
			<nav className="navbar-container container-fluid d-flex justify-content-between navsec align-items-center">
				{/* <div className="navbar-logo" logo-theme="theme6">
                        <a href="index.html">
                            <img className="img-fluid" src="./files/assets/images/logo.png" alt="Theme-Logo">
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="#!">
                            <i className="feather icon-menu icon-toggle-right"></i>
                        </a>
                        <a className="mobile-options waves-effect waves-light">
                            <i className="feather icon-more-horizontal"></i>
                        </a>
                    </div> */}

				<div className="nav-left d-flex">
					<div className="search-box">
						<button className="btn-search">
							<ImSearch />
						</button>
						<input
							type="text"
							className="input-search"
							placeholder="Type to Search..."
						/>
					</div>
				</div>

				<div className="nav-right ">
					<div className="user-details p-3">
						<AiOutlineUser />
					</div>
					<div className="user-details p3">
						<span>{user && user.name}</span>
					</div>
					<div className="dropdown p-3">
						<div
							className="dropdown-toggle"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"></div>

						<div
							className="dropdown-menu "
							aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="!#">
								<AiFillSetting /> Settings
							</a>

							<a className="dropdown-item" href="!#">
								<AiOutlineUser /> Profile
							</a>

							<a className="dropdown-item" href="!#">
								<MdImportantDevices /> My Device
							</a>

							<span className="dropdown-item" onClick={logoutHandler}>
								<AiOutlineLogout />
								Logout
							</span>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
