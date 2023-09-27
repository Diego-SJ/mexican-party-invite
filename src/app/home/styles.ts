import styled from 'styled-components'
import { PALLETE } from '../pages/party-time/styles'

export const TemporaryBg = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	max-height: 100vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	padding-top: 30%;
	top: 0;
	left: 0;
	z-index: 1;

	#tsparticles {
		position: absolute;
		top: 0;
		left: 0;
	}

	img {
		width: 40rem;
		transition: all 0.2s ease-in-out;
		margin-bottom: 3rem;
	}

	@media screen and (min-width: 600px) {
		justify-content: center;
		padding-top: 0%;
	}
`

export const Button = styled.button`
	width: min-content;
	padding: 1rem 4rem;
	border-radius: 10rem;
	outline: none;
	background-color: #7c0d84;
	color: #ffffff;
	font-size: 2rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	border: 0.5rem solid #ffffff;
	box-shadow: 0 0 1.5rem 0rem rgba(0, 0, 0, 0.3);
	cursor: pointer;
	font-family: 'Lithos';

	&:hover {
		transform: scale(1.1);
		background-color: #5cbe00;
	}
`

export const MediaButtons = styled.div`
	display: flex;
	gap: 2rem;
	padding: 4rem 2rem;
`

export const MediaBtn = styled.button`
	min-width: 7rem;
	max-width: 7rem;
	min-height: 7rem;
	max-height: 7rem;
	border-radius: 7rem;
	outline: none;
	background-color: #7c0d84;
	color: #ffffff;
	font-size: 4rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	border: 0.5rem solid #ffffff;
	box-shadow: 0 0 1.5rem 0rem rgba(0, 0, 0, 0.3);
	cursor: pointer;
	display: grid;
	place-content: center;

	&:hover {
		transform: scale(1.1);
		background-color: #5cbe00;

		&.facebook {
			background-color: #0866ff;
		}

		&.instagram {
			background-color: ${PALLETE.pink};
		}

		&.tiktok {
			background-color: ${PALLETE.dark};
		}
	}
`

export const TitleContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: min-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.h1`
	font-size: 4rem;
	color: #fff;
`
