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
		toast.success('Logged out successfully.');
	};
	return (
		<>
			<nav className="dashboard-nav">
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

				{/* <div className="header-block user-nav">
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
				</div> */}
			</nav>
		</>
	);
};

export default Navbar;
