import React from 'react';
import Slider from 'react-slick';
import CardF from './card';
import './feedback.css';
export default function feedback() {
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
			<div className="cust-feed">
				<h1>Our Customer Feedback</h1>
				<p>Our Fantastic Envato Customers Reviews</p>
				<div>
					<Slider {...settings}>
						<CardF
							title="The4"
							head="Design Quality"
							cont="The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!"
						></CardF>
						<CardF
							title="The4"
							head="Design Quality"
							cont="The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!"
						></CardF>
						<CardF
							title="The4"
							head="Design Quality"
							cont="The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!"
						></CardF>
						<CardF
							title="The4"
							head="Design Quality"
							cont="The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!"
						></CardF>
						<CardF
							title="The4"
							head="Design Quality"
							cont="The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!"
						></CardF>
					</Slider>
				</div>
			</div>
		</React.Fragment>
	);
}
