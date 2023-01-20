import React from 'react';
import './greet.css';
export default function greet() {
	return (
		<React.Fragment>
			<div className="greet">
				<div className="greet-cont">
					<h1>Say Hello To Trydo Elements</h1>
					<p>Our Fantastic Trydo Template Elements</p>
				</div>
				<img
					alt="error"
					src="http://trydo.rainbowit.net/assets/images/bg/gallery.png"
				></img>
			</div>
		</React.Fragment>
	);
}
