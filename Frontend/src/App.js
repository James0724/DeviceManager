import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Routes/protectedRoutes';
import store from './store';
import './App.css';

// Admin pages
import Dashboard from './Pages/dashboard';
import Login from './Components/User/login';
import Register from './Components/User/register';
// import Profile from './Components/User/profile';
import { loadUser } from './Actions/userActions';
// import updateProfile from './Components/User/updateProfile';

function App() {
	const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			<Route path="/" component={Login} exact />
			<ProtectedRoute path="/dashboard" component={Dashboard} exact />
			{/* <Route path="/device/:id" component={ProductDevaice} exact /> */}

			<Route path="/register" component={Register} />
			{/* <ProtectedRoute path="/me" component={Profile} exact /> 
			<ProtectedRoute path="/me/update" component={UpdateProfile} exact /> */}
			{!loading && (!isAuthenticated || user.role !== 'admin')}
		</Router>
	);
}

export default App;
