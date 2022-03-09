import React from 'react';
import {
	FaTiktok,
	FaYoutube,
	FaTwitter,
	FaFacebook,
	FaInstagram,
} from 'react-icons/fa';
import Container from './Container';
import Icon from "./Icons";

export default function SocialIcons() {
	return (
		<Container id='social' mainCenter crossCenter flexDown vSize={100}>
			<Icon>
				<FaTiktok />
			</Icon>
			<Icon>
				<FaYoutube />
			</Icon>
			<Icon>
				<FaTwitter />
			</Icon>
			<Icon>
				<FaFacebook />
			</Icon>
			<Icon>
				<FaInstagram />
			</Icon>
		</Container>
	);
}
