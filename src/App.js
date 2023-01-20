//css
import './App.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

//js
import * as React from 'react';
import Banner from './component/banner/banner';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inner from './component/inner/inner';
import Features from './component/features/features';
import Perform from './component/performance/perform';
import Device from './component/device/device';
import Faq from './component/faq/faq';
import Greet from './component/greet/greet';
import Feedback from './component/feedback/feedback';
import Footer from './component/footer/footer';
import Option from './component/home-demo/option';
import HomeDemo from './component/home-demo/all-demo';
import Demo from './component/home-demo/demo';
import Agency from './component/home-demo/agency';
import Corporate from './component/home-demo/corporate';
import Portfolio from './component/home-demo/portfolio';
import Landing from './component/home-demo/landing';
import New from './component/home-demo/new';
import Button from './component/topButton/button';
function App() {
	return (
		<>
			<Banner />

			<BrowserRouter>
				<Demo />
				<div className="options">
					<Option></Option>
				</div>
				<div>
					<Routes>
						<Route path="/" element={<HomeDemo />} />
						<Route path="/agency" element={<Agency />} />
						<Route path="/corporate" element={<Corporate />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/landing" element={<Landing />} />
						<Route path="/new" element={<New />} />
						<Route path="/*" element={<Navigate to="/" />} />
					</Routes>
				</div>
			</BrowserRouter>

			<Inner />

			<Features />

			<Perform />

			<Device />

			<Faq />

			<Greet />

			<Feedback />

			<Footer />

			<Button />
		</>
	);
}

export default App;
