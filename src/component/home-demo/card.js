import React from 'react';
import './home-demo.css';

export default function card(props) {
	return (
		<React.Fragment>
			<div className="demo1">
				<img alt="error" src={props.src}></img>
				{props.type != null ? <span>{props.type}</span> : null}
				<div className="demo-content">
					<h3>{props.heading}</h3>
					<p>{props.desc}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
