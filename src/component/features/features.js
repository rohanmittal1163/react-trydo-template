import React from 'react';
import Cards from './card';

//icons
import { FaReact } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsCode, BsDownload, BsHeadphones, BsBootstrap } from 'react-icons/bs';
import { DiSass } from 'react-icons/di';
import { GiModernCity } from 'react-icons/gi';

//css
import './feature.css';

export default function features() {
	return (
		<React.Fragment>
			<div className="features">
				<div className="head-features">
					<h1>Awesome Feature</h1>
					<p>
						Trydo are designed for everyone. It doesn’t matter if you’re a React
						Guru or just a complete beginner.
					</p>
				</div>

				<div className="card-awesome">
					<Cards
						icon={<FaReact className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<AiOutlineMobile className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<BsCode className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<DiSass className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<BsDownload className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<GiModernCity className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<BsHeadphones className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
					<Cards
						icon={<BsBootstrap className="ico" />}
						heading="Latest React 16.8+"
						content="We used latest react vertion ^16.8.6.Its a awesome design made by react."
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
