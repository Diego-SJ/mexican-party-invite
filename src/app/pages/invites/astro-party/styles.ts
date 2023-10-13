import styled from 'styled-components'
import StoneImg from './assets/stone.svg'

export const ASTRO_THEME = {
	primary: '#03045e',
	secondary: '#ffb703',
	tertiary: '#f15533',
	white: '#ffffff'
}

export const AstroPartyRoot = styled.div`
	background: radial-gradient(circle, rgba(30, 29, 124, 1) 1%, rgba(18, 2, 37, 1) 100%);
`

export const AstroPartyContent = styled.div`
	/* background-color: rgba(255, 255, 255, 0.1); */
	z-index: 2;

	.powered-by {
		.title {
			color: #fff !important;
		}
	}
`

export const HeaderContainer = styled.div`
	margin-top: 7rem;
	width: 40rem;
	height: 37rem;
	background-repeat: no-repeat;
	background-image: url('${StoneImg}');
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	.header {
		margin-top: -0rem;
		line-height: 1.2;
		text-align: center;
		font-family: 'Nasa';
		font-weight: bold;
		text-transform: uppercase;
		z-index: 3;

		&-title {
			font-size: 30rem;
			color: ${ASTRO_THEME.white};
		}

		&-subtitle {
			font-size: 5rem;
			color: ${ASTRO_THEME.white};
		}
	}

	@media screen and (min-width: 600px) {
		width: 35rem;
		height: 35rem;
		min-height: 35rem;

		.header {
			&-title {
				font-size: 25rem;
			}

			&-subtitle {
				font-size: 10rem;
			}
		}
	}
`

export const BodyText = styled.p`
	font-family: 'Nasa';
	font-size: 2rem;
	text-align: center;
	color: ${ASTRO_THEME.white};
	font-weight: 200;
	max-width: 22ch;
	z-index: 4;
`

export const TitleText = styled.h3`
	font-family: 'Nasa';
	font-size: 3.5rem;
	text-align: center;
	color: ${ASTRO_THEME.secondary};
	font-weight: 600;
	max-width: 14ch;
	z-index: 4;
	line-height: 1;

	&.name {
		font-size: 12rem;
		font-weight: bold;
	}
`

export const Image = styled.img`
	&.alien {
		position: absolute;
		width: 10rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: -0rem;
		left: 1rem;
		transform: rotate(-40deg);
	}

	&.planet-1 {
		position: absolute;
		width: 15rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: 25rem;
		right: -13rem;
		transform: rotate(5deg);
	}

	&.planet-2 {
		position: absolute;
		width: 15rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: 60rem;
		right: -8rem;
		transform: rotate(5deg);
	}

	&.astronaut-1 {
		position: absolute;
		width: 24rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: 37rem;
		left: -13rem;
		transform: rotate(5deg);
	}

	&.planets {
		position: absolute;
		width: 28rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: 80rem;
		left: -5rem;
		transform: rotate(5deg);
	}

	&.astronaut-2 {
		position: absolute;
		width: 40rem;
		filter: drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.4));
		top: 80rem;
		right: -10rem;
		transform: rotate(5deg);
	}

	&.astronaut-3 {
		position: relative;
		min-width: 100vw;
		max-width: 100vw;
		filter: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.4));
		bottom: -15rem;
		z-index: -2;
	}
`
