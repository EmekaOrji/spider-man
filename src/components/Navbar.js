import React from 'react';
import Container from './Container';
import Burger from './Burger';
import Logo from '../media/marvel-logo.svg';

export default function Navbar() {
	return (
		<Container id='nav' vSize={20} crossCenter >
			<Burger />
			<Container id='logo' hSize='5em'>
				<img src={Logo} alt='Logo' />
			</Container>
		</Container>
	);
}
