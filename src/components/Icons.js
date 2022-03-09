import React from 'react';
import Container from './Container';

export default function Icon(props) {
	return (
		<Container className='icons' crossCenter mainCenter hSize={40} vSize={13}>
			{props.children}
		</Container>
	);
}
