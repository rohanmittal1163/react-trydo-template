import React from 'react';
export default function card(props) {
	return (
		<React.Fragment>
			<div className="cust-card">
				<div>
					<img
						alt="error"
						src="http://trydo.rainbowit.net/assets/images/icons/download.png"
					></img>
					<div>
						<p>{props.title}</p>
						<p>@{props.title}</p>
					</div>
				</div>
				<p>{props.head}</p>
				<p>{props.cont}</p>
				<img
					alt="error"
					src="http://trydo.rainbowit.net/assets/images/icons/rating.png"
				/>
			</div>
		</React.Fragment>
	);
}
