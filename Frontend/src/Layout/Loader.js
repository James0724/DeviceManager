import React from 'react';
import gif from '../Assets/Loader/loader.gif';

const Loader = () => {
	return (
		<div className="loader">
			<img src={gif} alt="loader" />
		</div>
	);
};

export default Loader;
