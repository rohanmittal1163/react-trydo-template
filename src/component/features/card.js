import React from 'react';

export default function card(props) {
	return (
		<React.Fragment>
			<div className="cards">
				{props.icon}
				<h3>{props.heading}</h3>
				<p>{props.content}</p>
			</div>
		</React.Fragment>
	);
}
