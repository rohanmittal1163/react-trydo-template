import React from 'react';
import Card from './card';

export default function landing() {
	return (
		<React.Fragment>
			<div className="all-demo">
				<Card
					src="http://trydo.rainbowit.net/assets/images/preview/dark-personal-portfolio-landing.png"
					type="hot"
					heading="Personal Portfolio 02 — One Page"
					desc="It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and Developer etc."
				></Card>
				<Card
					src="http://trydo.rainbowit.net/assets/images/preview/personal-portfolio-landing.png"
					type="new"
					heading="Personal Portfolio — One Page"
					desc="It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and Developer etc."
				></Card>
				<Card
					src="http://trydo.rainbowit.net/assets/images/preview/creative-landing.png"
					type="new"
					heading="Creative Agency 02 — One Page"
					desc="Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page."
				></Card>
				<Card
					src="http://trydo.rainbowit.net/assets/images/preview/interior-design.png"
					type="new"
					heading="Interior Design"
					desc="A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available."
				></Card>
				<Card
					src="http://trydo.rainbowit.net/assets/images/preview/homeparticles.png"
					type="new"
					heading="Home Particle — Landing Page"
					desc="Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added."
				></Card>
			</div>
		</React.Fragment>
	);
}
