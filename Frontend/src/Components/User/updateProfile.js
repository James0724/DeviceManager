import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../layout/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateProfile,
	loadUser,
	clearErrors,
} from '../../actions/userActions';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';

const UpdateProfile = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const alert = useAlert();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { error, isUpdated, loading } = useSelector((state) => state.user);

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success('User updated successfully');
			dispatch(loadUser());

			history.push('/me');

			dispatch({
				type: UPDATE_PROFILE_RESET,
			});
		}
	}, [dispatch, alert, error, history, user, isUpdated]);

	const submitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set('name', name);
		formData.set('email', email);

		dispatch(updateProfile(formData));
	};

	return (
		<Fragment>
			<div className="row wrapper">
				<div className="col-10 col-lg-5">
					<div className="container shadow bg mb-5">
						<form className="theme-form" onSubmit={submitHandler}>
							<div className="form-group">
								<label htmlFor="Name">Name</label>
								<input
									type="name"
									id="name_field"
									className="form-control"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									className="form-control"
									id="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="btn update-btn btn-block mt-4 mb-3"
								disabled={loading ? true : false}>
								Update
							</button>
						</form>
					</div>
					{/* <form
						className="shadow-lg"
						onSubmit={submitHandler}
						encType="multipart/form-data">
						<h1 className="mt-2 mb-5">Update Profile</h1>

						<div className="form-group">
							<label htmlFor="email_field">Name</label>
							<input
								type="name"
								id="name_field"
								className="form-control"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email_field">Email</label>
							<input
								type="email"
								id="email_field"
								className="form-control"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="avatar_upload">Avatar</label>
							<div className="d-flex align-items-center">
								<div>
									<figure className="avatar mr-3 item-rtl">
										<img
											src={avatarPreview}
											className="rounded-circle"
											alt="Avatar Preview"
										/>
									</figure>
								</div>
								<div className="custom-file">
									<input
										type="file"
										name="avatar"
										className="custom-file-input"
										id="customFile"
										accept="image/*"
										onChange={onChange}
									/>
									<label className="custom-file-label" htmlFor="customFile">
										Choose Avatar
									</label>
								</div>
							</div>
						</div>

						<button
							type="submit"
							className="btn update-btn btn-block mt-4 mb-3"
							disabled={loading ? true : false}>
							Update
						</button>
					</form> */}
				</div>
			</div>
		</Fragment>
	);
};

export default UpdateProfile;
