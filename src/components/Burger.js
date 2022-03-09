import React from 'react';
import Container from './Container';

export default function Burger() {
	return (
		<Container
			id='burger'
			onMouseOver={(e) => e.target.classList.add('burgerActive')}
			onMouseOut={(e) => e.target.classList.remove('burgerActive')}
			onTouchStart={(e) => e.target.classList.add('burgerActive')}
			onTouchEnd={(e) => e.target.classList.remove('burgerActive')}
			flexDown
			mainBetween
			hSize='1.7rem'
			vSize='1rem'>
			<div
				id='bar1'
				onMouseOver={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onMouseOut={(e) =>
					e.target.parentElement.classList.remove('burgerActive')
				}
				onTouchStart={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onTouchEnd={(e) => {
					setTimeout(() => {
						e.target.parentElement.classList.remove('burgerActive');
					}, 500);
				}}
				className='bar'></div>
			<div
				id='bar2'
				onMouseOver={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onMouseOut={(e) =>
					e.target.parentElement.classList.remove('burgerActive')
				}
				onTouchStart={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onTouchEnd={(e) => {
					setTimeout(() => {
						e.target.parentElement.classList.remove('burgerActive');
					}, 500);
				}}
				className='bar'></div>
			<div
				id='bar3'
				onMouseOver={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onMouseOut={(e) =>
					e.target.parentElement.classList.remove('burgerActive')
				}
				onTouchStart={(e) =>
					e.target.parentElement.classList.add('burgerActive')
				}
				onTouchEnd={(e) => {
					setTimeout(() => {
						e.target.parentElement.classList.remove('burgerActive');
					}, 500);
				}}
				className='bar'></div>
		</Container>
	);
}