import React from 'react';
import {
	AiOutlineMobile,
	AiOutlineTablet,
	AiOutlineDesktop,
} from 'react-icons/ai';
import './device.css';
export default function device() {
	return (
		<React.Fragment>
			<div className="device">
				<div className="cont-device">
					<h1>Trydo works perfectly on any device.</h1>
					<p>
						Trydo site works seamlessly on any device without a single
						compromise, will always looks cool and great on any mobile device or
						browsers. Its easily adapt your content for mobile, tablet and so
						on.
					</p>
					<div className="resp">
						<div className="resp-1">
							<AiOutlineMobile size="40px" color="#94a3b8" />
							<p>Phone</p>
						</div>
						<div className="resp-1">
							<AiOutlineTablet size="40px" color="#94a3b8" />
							<p>Tablet</p>
						</div>
						<div className="resp-1">
							<AiOutlineDesktop size="40px" color="#94a3b8" />
							<p>Desktop</p>
						</div>
					</div>
					<p>- Separate Options for Each Screen Size</p>
				</div>
			</div>
		</React.Fragment>
	);
}
