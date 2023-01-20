import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
export default function Button() {
	const [visible, setVisible] = useState(false);
	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});
	});
	return (
		<div>
			{visible ? (
				<button
					style={{
						width: '40px',
						aspectRatio: '1/1',
						position: 'fixed',
						bottom: '20px',
						right: '20px',
						cursor: 'pointer',
						backgroundColor: 'red',
						borderRadius: '100%',
						border: '3px solid red',
						outline: 'none',
					}}
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}
				>
					<FaAngleUp color="white" size="25px" />
				</button>
			) : null}
		</div>
	);
}
