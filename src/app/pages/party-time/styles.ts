import styled, { keyframes } from 'styled-components'
export const PALLETE = {
	pink: '#ff1067',
	blue: '#00c1f3',
	green: '#5cbe00',
	yellow: '#ffca00',
	purple: '#7c0d84',
	dark: '#3b3a45'
}

const colors = [
	'#ff1067',
	'#00c1f3',
	'#5cbe00',
	'#ffca00',
	'#7c0d84',
	'#ff1067',
	'#00c1f3',
	'#5cbe00',
	'#ffca00',
	'#7c0d84',
	'#ff1067'
]

export const PartyTimeRoot = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10%;
	align-items: center;
	background-color: #ffffff;
	min-width: 100vw;
	max-width: 100vw;
	max-height: 100vh;
	min-height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;
	position: fixed;
	top: 0;
	left: 0;

	#tsparticles {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	img {
		width: 40rem;
		transition: all 0.2s ease-in-out;
		margin-bottom: 3rem;
		z-index: 5;
		display: none;
	}
`

const rainbow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 25%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const waviy = keyframes`
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
`

export const PartyTimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 10;

	.pink {
		color: ${PALLETE.pink} !important;
	}

	.green {
		color: ${PALLETE.green} !important;
	}

	.blue {
		color: ${PALLETE.blue} !important;
	}

	.yellow {
		color: ${PALLETE.yellow} !important;
	}

	.purple {
		color: ${PALLETE.purple} !important;
	}
`

export const PartyTimeTitle = styled.h1`
	/* background-image: repeating-linear-gradient(
		to left,
		violet,
		indigo,
		blue,
		green,
		yellow,
		orange,
		red
	);
	background-size: 800% 800%;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${rainbow} 8s ease-in-out infinite; */
	font-family: 'Lithos';
	font-size: 10rem;
	max-width: 5ch;
	line-height: 1;
	text-align: center;
	padding: 2rem 0;
	margin-bottom: 4rem;

	@media screen and (min-width: 600px) {
		font-size: 15rem;
	}
`

export const Char = styled.span<{ idx: number }>`
	position: relative;
	display: inline-block;
	text-transform: uppercase;
	animation: ${waviy} 1s infinite;
	animation-delay: calc(0.12s * ${({ idx }) => idx});
	color: ${({ idx }) => colors[idx - 1]};
	text-shadow: 0.5rem 0.5rem #ffffff, 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
	outline: 0.4rem solid;
`

export const PrimaryCopy = styled.h4`
	font-size: 3rem;
	font-family: 'Dela Gothic One';
	color: #3b3a45;
	line-height: 1.2;
	text-align: center;
	margin-bottom: 5rem;
	max-width: 25ch;
	text-shadow: 0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
	position: relative;

	.bounce-ball {
		position: absolute;
		right: -10%;
		bottom: 0rem;
		transform: scale(0.3);
	}
`

export const DateTimeContainer = styled.div`
	width: 44rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	font-family: 'Dela Gothic One';
	column-gap: 2rem;
	position: relative;
	margin-bottom: 5rem;

	.bounce-ball {
		position: absolute;
		left: -10%;
		bottom: -5rem;
		transform: scale(0.5);
	}
`

export const DateContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1;
	border: 0.4rem dashed ${PALLETE.dark};
	padding: 2rem;
	position: relative;

	img {
		&.calendar {
			width: 7rem;
			height: 7rem;
			position: absolute;
			top: -4rem;
			left: -3rem;
			display: inline-block;

			@media screen and (min-width: 600px) {
				width: 10rem;
				height: 10rem;
				top: -5rem;
				left: -5rem;
			}
		}
	}

	span {
		&.week-day {
			font-size: 3rem;
			color: ${PALLETE.dark};
		}

		&.day-number {
			font-size: 8rem;
			color: ${PALLETE.pink};
			text-shadow: 0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
			padding-top: -2rem !important;
		}

		&.month {
			font-size: 3rem;
			color: ${PALLETE.dark};
			margin-top: 2rem;
		}
	}
`

export const TimeContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1;

	.hour {
		font-size: 5rem;
		color: ${PALLETE.green};
	}

	.time-info {
		display: flex;
		flex-direction: column;

		&-type {
			font-size: 5rem;
		}

		&-text {
			font-size: 3rem;
		}
	}
`

export const SecondaryCopy = styled.p`
	font-size: 3rem;
	font-family: 'Dela Gothic One';
	color: ${PALLETE.dark};
	line-height: 1.2;
	text-align: center;
	margin-bottom: 6rem;
	max-width: 15ch;
	text-shadow: 0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
	position: relative;
	margin-left: auto;
	margin-right: auto;

	&.mb-1 {
		margin-bottom: 2rem !important;
	}

	.bounce-ball {
		position: absolute;
		right: -50%;
		bottom: -5rem;
		transform: scale(0.4);
	}
`

export const ActionsButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	z-index: 10;
`

export const Button = styled.button`
	font-family: 'Dela Gothic One';
	font-weight: 600;
	font-size: 2.5rem;
	color: #ffffff;
	border-radius: 1.5rem;
	background-color: ${PALLETE.pink};
	border: none;
	padding: 2rem 4rem;
	min-width: 40rem;
	line-height: 1;
	cursor: pointer;
	box-shadow: 0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2);

	&.bg-green {
		background-color: ${PALLETE.green};
		color: #ffffff;
	}

	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}

	&:disabled {
		opacity: 1;
		transform: scale(1);
		transition: all 0.2s linear;
		background-color: ${PALLETE.dark};
	}
`

export const Input = styled.input`
	width: 100%;
	border: 0.6rem solid ${PALLETE.green};
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2rem;
	padding: 1.2rem 4rem;
	font-size: 2.5rem;
	font-weight: 600;
	font-family: 'Dela Gothic One';
	outline: none;
	color: ${PALLETE.dark};
	text-transform: uppercase;
	transition: all 0.15s ease-in-out;

	&:focus {
		transition: all 0.15s ease-in-out;
		box-shadow: 0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
	}

	&::placeholder {
		font-weight: 600;
		font-family: 'Dela Gothic One';
		outline: none;
		color: ${PALLETE.dark};
		opacity: 0.5;
	}

	&:hover {
		transform: scale(1.02);
	}
`

export const Form = styled.div`
	width: 45rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const ImagePartyPopper = styled.img`
	width: 40rem;
	display: inline-block !important;
	margin: 0 0 1rem !important;
`

/*
STYLES FOR CONFIRMATION LSIT
*/

export const UserList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const UserCard = styled.div`
	width: 45rem;
	padding: 2rem 3rem;
	border-radius: 2rem;
	background-color: #ffffff;
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
	border: 0.5rem solid ${PALLETE.yellow};
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
		color: ${PALLETE.dark};
	}

	p.avatar-phone {
		font-size: 2rem;
		font-weight: 600;
		font-family: 'Dela Gothic One';
		color: ${PALLETE.pink};
	}
`
