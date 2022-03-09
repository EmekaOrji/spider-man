import React from 'react';
import './App.css';
import Container from './components/Container';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Video from './components/Video';
const videoImages = [
	'https://res.cloudinary.com/coderabbi/image/upload/v1646776693/spiderman/video-1_fhnvhh.jpg',
	'https://res.cloudinary.com/coderabbi/image/upload/v1646776693/spiderman/video-2_s5v64f.jpg',
	'https://res.cloudinary.com/coderabbi/image/upload/v1646776693/spiderman/video-3_ey0ks5.jpg',
	'https://res.cloudinary.com/coderabbi/image/upload/v1646776697/spiderman/video-4_zenrro.jpg',
];

function App() {
	return (
		<div id='app'>
			<Container id='upperContainer' flexDown hSize={100} vSize={100}>
				<Layout>
					<Hero />
				</Layout>
				<Container id='videoContainer'>
					<Video className='video' src={videoImages[0]} />
					<Video className='video' src={videoImages[1]} />
					<Video className='video' src={videoImages[2]} />
					<Video className='video' src={videoImages[3]} />
				</Container>
			</Container>
		</div>
	);
}

export default App;
