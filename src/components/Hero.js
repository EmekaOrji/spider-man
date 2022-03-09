import React from 'react';
import Container from './Container';
import moment from 'moment';
import Text from '../media/text.png';
const spidermanImage = 'https://res.cloudinary.com/coderabbi/image/upload/v1646776695/spiderman/spiderman_lcispn.png';

export default function Hero() {
	return (
		<Container vSize={80} id='hero'>
			<Container
				id='heroContent'
				flexDown
				crossEnd_self>
				<p id='date'>{moment().format('Do MMMM, YYYY')}</p>
				<Container id='spiderText'>
					<img src={Text} alt='SPIDERMAN' />
				</Container>
				<Container id='heroText'>
					Spiderman is an epic adventure-action movie. He is your friendly
					neighbour who was bitten by a radioactive spider, which became the
					basis for his arachnid-powers.
				</Container>
				<Container>
					<button
						onMouseDown={(e) => e.target.classList.add('pressed')}
						onMouseUp={(e) => e.target.classList.remove('pressed')}
						onTouchStart={(e) => e.target.classList.add('pressed')}
						onTouchEnd={(e) => e.target.classList.remove('pressed')}
						className='button'
						id='download'>
						<div className='slide'></div>
						Download Game
					</button>
					<button
						onMouseDown={(e) => e.target.classList.add('pressed')}
						onMouseUp={(e) => e.target.classList.remove('pressed')}
						onTouchStart={(e) => e.target.classList.add('pressed')}
						onTouchEnd={(e) => e.target.classList.remove('pressed')}
						className='button'
						id='details'>
						<div className='slide'></div>
						View More Details
					</button>
				</Container>
			</Container>
			<Container id='spiderman'>
				<img src={spidermanImage} />
			</Container>
		</Container>
	);
}
