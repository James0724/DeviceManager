import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './register';
import loginImg from '../../Assets/Svg/heroSection.svg';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../Actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ history }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [modalShow, setModalShow] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	const { isAuthenticated, error } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/dashboardHome');
		}

		if (error) {
			toast.warning(error);
			dispatch(clearErrors());
		}
	}, [dispatch, isAuthenticated, error, history]);

	return (
		<>
			<div className="content">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-6">
							<img src={loginImg} alt="svg" className="img-fluid" />
						</div>
						<div className="col-md-6 section-login">
							<div className="row justify-content-center">
								<div className="col-md-8">
									<div className="mb-4">
										<h3>Sign In / log In</h3>
									</div>
									<form onSubmit={submitHandler}>
										<div className="form-group first">
											<label for="username">Email</label>
											<input
												type="text"
												className="form-control"
												id="Email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-group last mb-4">
											<label for="password">Password</label>
											<input
												type="password"
												className="form-control"
												id="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>

										<div className="caption d-flex justify-content-between pb-3">
											<div onClick={() => setModalShow(true)}>Register </div>

											<RegisterModal
												show={modalShow}
												onHide={() => setModalShow(false)}
											/>

											<Link to="/password/forgot">Forgot Password</Link>
										</div>

										<input
											type="submit"
											value="Log In"
											onSubmit={submitHandler}
											className="btn btn-block btn-primary w-100"
										/>
										<span className="d-block text-left my-4 text-muted">
											— or login with —
										</span>
										<div className="social-login">
											<a href="!#" className="facebook">
												<FaFacebook />
											</a>

											<a href="!#" className="google">
												<FcGoogle />
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer autoClose={3000} />
			</div>
		</>
	);
};

export default Login;
