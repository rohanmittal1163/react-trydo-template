//js
import React from 'react';
//css
import './banner.css';

export default function banner() {
	return (
		<React.Fragment>
			<div className="banner">
				<div className="box1">
					<img
						alt="error loading"
						src="http://trydo.rainbowit.net/assets/images/logo/logo-all-dark.png"
					/>
					<p>
						Welcome to TryDO React Creative Agency, React Portfolio and
						Corporate Multi Purpose Template Built With React JS. NO jQuery!
					</p>
					<div className="btn-group">
						<button> Buy Now </button>
						<button> view demos</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
