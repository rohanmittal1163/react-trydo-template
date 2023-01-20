import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { BsHeadphones } from 'react-icons/bs';
import './faq.css';
import '../media/media640.css';
import '../media/media768.css';
import '../media/media1024.css';
import '../media/media1280.css';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `0px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: '1px solid gray',
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(255, 255, 255, 1)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '2px solid rgba(249, 0, 77, 1)',
}));
export default function Faq() {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<React.Fragment>
			<div className="faq">
				<div className="faq-l">
					<h1>
						Have a <span>Question?</span>
					</h1>
					<p>Check out our FAQ section to see if we can help.</p>
					<div>
						<Accordion
							expanded={expanded === 'panel1'}
							onChange={handleChange('panel1')}
						>
							<AccordionSummary
								aria-controls="panel1d-content"
								id="panel1d-header"
							>
								<Typography>What is tryDo ? How does it work?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Welcome to TryDO React Creative Agency, React Portfolio and
									Corporate Multi Purpose Template Built With React JS. NO
									jQuery!. It works too much faster loading speed and you can
									works too much comfortability.Trydo create your website so
									much faster, use to use and Well Documented Codes for your
									customization.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel2'}
							onChange={handleChange('panel2')}
						>
							<AccordionSummary
								aria-controls="panel2d-content"
								id="panel2d-header"
							>
								<Typography>How can I run trydo react template?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									You can run trydo easily. First You'll need to have node and
									npm on your machine. So Please open your command prompt then
									check your node -v and npm -v Version. Goes To Your your
									command prompt: then First: <b>yarn install</b>
									<br></br>
									At Last: <b>yarn start</b>. By the following way you can be
									run your project easily.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel3'}
							onChange={handleChange('panel3')}
						>
							<AccordionSummary
								aria-controls="panel3d-content"
								id="panel3d-header"
							>
								<Typography>
									How can I change my demo page instead of splash page?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									You can be presenting any home page instead of splash page.
									http://localhost:3000 you can showing any page as your you are
									like. First you have to go index.js page then:
									<br></br>
									<br></br>
									First Step (replace your choose demo page): Example: import
									Demo form './home/MainDemo' Instead of
									'./home/PortfolioLanding'
									<br></br>
									<br></br>
									Example:
									https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel4'}
							onChange={handleChange('panel4')}
						>
							<AccordionSummary
								aria-controls="panel4d-content"
								id="panel4d-header"
							>
								<Typography> How can I get the customer support?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									After purchasing the product need you any support you can be
									share with us with sending mail to rainbowit10@gmail.com.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel5'}
							onChange={handleChange('panel5')}
						>
							<AccordionSummary
								aria-controls="panel5d-content"
								id="panel5d-header"
							>
								<Typography>
									{' '}
									Can I get update regularly and For how long do I get updates?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Yes, We will get update the Trydo. And you can get it any
									time. Next time we will comes with more feature. You can be
									get update for unlimited times. Our dedicated team works for
									update.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel6'}
							onChange={handleChange('panel6')}
						>
							<AccordionSummary
								aria-controls="panel1d-content"
								id="panel6d-header"
							>
								<Typography> Can I change any component as I like?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Welcome to TryDO React Creative Agency, React Portfolio and
									Corporate Multi Purpose Template Built With React JS. NO
									jQuery!. It works too much faster loading speed and you can
									works too much comfortability.Trydo create your website so
									much faster, use to use and Well Documented Codes for your
									customization.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === 'panel7'}
							onChange={handleChange('panel7')}
						>
							<AccordionSummary
								aria-controls="panel7d-content"
								id="panel1d-header"
							>
								<Typography>
									Can I build a complete project with this template?
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Yes, Why not. You can build a project and complete website as
									you are like. More component are available include in this
									templete. And you can be use it following documentation.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
				<div className="faq-r">
					<div className="faq-c">
						<HiOutlineDocumentAdd className="ico" />
						<h2>Online Documentation</h2>
						<p>Well organized and up to date</p>
						<button>online documentation</button>
					</div>
					<div className="faq-c">
						<BsHeadphones className="ico" />
						<h2>Dedicated Support</h2>
						<p>
							Need support ? Submit a ticket. We will be happy to assist you.
						</p>
						<button>get support</button>
						<p>Support Time: Monday – Friday</p>
						<p>Response Time: Maximum 24 hours</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
