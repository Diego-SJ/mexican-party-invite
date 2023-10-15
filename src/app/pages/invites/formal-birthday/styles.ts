import styled from 'styled-components'
import GoldenConfetti from './assets/confeti-dorado.svg'

export const FORMAL_THEME = {
	primary: '#dca71a',
	secondary: '#ffffff',
	tertiary: '#f15533',
	white: '#ffffff'
}

export const AstroPartyRoot = styled.div`
	background: radial-gradient(circle, rgba(32, 39, 106, 1) 1%, rgba(22, 26, 66, 1) 100%);
`

export const AstroPartyContent = styled.div`
	z-index: 2;

	.powered-by {
		.title {
			color: #fff !important;
		}
	}
`

export const HeaderImage = styled.div`
	width: 100%;
	height: 30rem;
	background-size: 140%;
	position: absolute;
	background-repeat: repeat-x;
	left: 0;
	top: 0;
	background-image: url('${GoldenConfetti}');
	filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.4));

	&.footer {
		min-width: 100vw;
		max-width: 100vw;
		min-height: 30rem;
		max-height: 30rem;
		position: relative;
		top: unset;
		bottom: 0;
		left: 0;
		transform: rotate(180deg);
	}

	&.v3 {
		height: 15rem;
		background-size: 80%;
	}

	@media screen and (min-width: 600px) {
		background-size: contain;

		&.v3 {
			height: 15rem;
			background-size: contain;
		}
	}
`

export const HeaderContainer = styled.div`
	margin: 0rem 0 4rem;
	width: 40rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	.header {
		text-align: center;
		font-family: 'Geraldin';
		z-index: 3;

		&-title {
			font-size: 30rem;
			font-weight: 600;
			line-height: 0.8;
			color: ${FORMAL_THEME.primary};
		}

		&-subtitle {
			font-size: 20rem;
			line-height: 0.5;
			color: ${FORMAL_THEME.primary};
		}
	}

	.age-container {
		display: flex;
		padding: 10rem 0 0;

		.number {
			width: 30rem;
			filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.4));

			&-left {
				margin-right: -3rem;
			}
			&-right {
				margin-left: -3rem;
			}
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
	font-family: 'Raleway';
	font-size: 3rem;
	text-align: center;
	color: ${FORMAL_THEME.white};
	font-weight: 200;
	max-width: 22ch;
	z-index: 4;
	line-height: 1.2;

	&.sm {
		font-size: 1.8rem;
		max-width: 30ch;
	}
`

export const TitleText = styled.h3`
	font-family: 'Geraldin';
	font-size: 8rem;
	text-align: center;
	color: ${FORMAL_THEME.secondary};
	max-width: 14ch;
	z-index: 4;
	line-height: 1;

	&.name {
		font-size: 12rem;
		font-weight: bold;
	}
`

export const TimerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 3rem;
`

export const TimerItem = styled.span`
	width: 18rem;
	height: 18rem;
	text-align: center;
	border: 0.4rem dashed ${FORMAL_THEME.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& .number {
		font-family: 'Raleway';
		font-size: 8rem;
		line-height: 1;
		margin-bottom: 2rem;
		color: ${FORMAL_THEME.primary};
	}

	& .text {
		font-family: 'Geraldin';
		font-size: 4rem;
		line-height: 0.8;
		padding-bottom: 2rem;
	}
`

/*
STYLES FOR CONFIRMATION LSIT
*/

export const UserList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-bottom: 10rem;
`

export const UserCard = styled.div`
	width: 45rem;
	padding: 2rem 3rem;
	border-radius: 2rem;
	background-color: rgba(255, 255, 255, 0.1);
	display: flex;
	align-items: center;
	box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	gap: 3rem;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);
	}
`

export const Avatar = styled.img`
	min-width: 5rem;
	max-width: 5rem;
	min-height: 5rem;
	max-height: 5rem;
	object-fit: cover;
	border-radius: 100%;
	overflow: hidden;
	border: 0.5rem solid ${FORMAL_THEME.primary};
	display: inline-block !important;
	margin: auto 0 !important;
`

export const UserCardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;

	h5.avatar-name {
		font-size: 2rem;
		font-weight: 600;
		font-family: 'Dela Gothic One';
		color: ${FORMAL_THEME.primary};
		text-transform: uppercase;
	}

	p.avatar-phone {
		font-size: 2rem;
		font-weight: 600;
		font-family: 'Dela Gothic One';
		color: ${FORMAL_THEME.secondary};
	}
`
