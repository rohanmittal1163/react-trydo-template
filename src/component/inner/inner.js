import React from 'react';
import Slider from 'react-slick';
import Card from '../home-demo/card';

export default function inner() {
	var settings = {
		dots: true,
		infinite: true,
		centerMode: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1600,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<React.Fragment>
			<div
				className="demos"
				style={{
					backgroundColor: 'ghostwhite',
					gap: '30px',
					marginBottom: '2%',
					width: '94%',
				}}
			>
				<h2>Inner Pages</h2>
				<p>
					Choose one of styles or cutomize easily your site following your ideas
				</p>
				<Slider {...settings}>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/service.png"
						heading="Main Demo"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/service-details.png"
						heading="Main Demo — Dark Version"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/about.png"
						heading="Interactive Agency"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/blog-list.png"
						heading="Personal Portfolio"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/blog-details.png"
						heading="Creative Agency"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/portfolio.png"
						heading="Corporate Business"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/portfolio-details.png"
						heading="Corporate Business"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/contact.png"
						heading="Corporate Business"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/404.png"
						heading="Corporate Business"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/service.png"
						heading="Corporate Business"
					></Card>
					<Card
						src="http://trydo.rainbowit.net/assets/images/preview/service-details.png"
						heading="Corporate Business"
					></Card>
				</Slider>
			</div>
		</React.Fragment>
	);
}
