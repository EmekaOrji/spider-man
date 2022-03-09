import React from 'react';
import Container from './Container';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';

export default function Layout(props) {
	return (
		<Container id='layout'>
			<SocialIcons />
			<Container id='heroCover' flexDown hSize={85} vSize={100}>
				<Navbar />
				{props.children}
			</Container>
		</Container>
	);
}
