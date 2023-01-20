import React from 'react';
import { NavLink } from 'react-router-dom';
export default function option() {
	const categories = [
		{
			name: 'all demo',
			to: '/',
		},
		{
			name: 'agency',
			to: '/agency',
		},
		{
			name: 'corporate',
			to: '/corporate',
		},
		{
			name: 'portfolio',
			to: '/portfolio',
		},
		{
			name: 'landing',
			to: '/landing',
		},
		{
			name: 'new',
			to: '/new',
		},
	];
	return (
		<React.Fragment>
			<ul>
				{categories.map((data) => {
					return (
						<li>
							<NavLink to={data.to}>{data.name}</NavLink>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
}
