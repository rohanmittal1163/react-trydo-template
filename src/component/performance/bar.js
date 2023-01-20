import React from 'react';

export default function bar(props) {
	return (
		<React.Fragment>
			<div className="range">
				<div className="info">
					<p>{props.title}</p>
					<p>{props.perc}</p>
				</div>
				<div className="bar"></div>
			</div>
		</React.Fragment>
	);
}
