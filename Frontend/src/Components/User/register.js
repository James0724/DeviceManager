import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RegisterSvg from '../../Assets/Svg/undraw_unlock_24mb.svg';

import { useDispatch } from 'react-redux';
import { register } from '../../Actions/userActions';

const RegisterModal = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const formData = new FormData();
	formData.set('name', name);
	formData.set('email', email);
	formData.set('password', password);

	const dispatch = useDispatch();
	const submitRegister = (e) => {
		e.preventDefault();
		dispatch(register(name, email, password));
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					create account
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form
					encType="multipart/form-data"
					method="post"
					onSubmit={submitRegister}>
					<div className="row">
						<div className="col-sm-6">
							<label className="p-2" htmlFor="name">
								{' '}
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder=" Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<label className="p-2" htmlFor="email">
								email
							</label>
							<input
								type="text"
								className="form-control"
								id="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<label className="p-2" htmlFor="password">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="col-sm-6 mt-3">
							<img src={RegisterSvg} alt="Svg" class="img-fluid" />
						</div>
						<Button className="p-3 mt-3" type="submit" onClick={submitRegister}>
							submit
						</Button>
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default RegisterModal;
