import React from 'react';
import Container from './Container';
import { FaPlay } from 'react-icons/fa';

export default function Video(props) {
	return (
		<Container {...props}>
			<img src={props.src}></img>
			<Container className='video_icon'>
				<FaPlay />
			</Container>
		</Container>
	);
}
