import styled from 'styled-components'

export const MainLayout = styled.main`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
	overflow-x: hidden;

	position: relative;
	margin: 0;
	padding: 0 10rem 20rem;

	@media screen and (max-width: 700px) {
		padding: 0 5rem 20rem;
	}
`

export const CutPapper = styled.img`
	max-width: 50rem;
	object-fit: cover;
	-webkit-filter: drop-shadow(5px 5px 5px #222222);
	filter: drop-shadow(5px 5px 5px #222222);
`

export const Title = styled.h1`
	font-family: 'MexicanTequila';
	margin: 0;
	font-size: 15rem;
	color: #fdfcf9;
	line-height: 0.8;
	text-align: center;
	font-weight: 700;
	margin-bottom: 2rem;
	text-shadow: ${({ theme }) => theme.shadow.lg};

	@media screen and (max-width: 700px) {
		font-size: 10rem;
		line-height: 1;
	}
`

export const Chili = styled.img`
	width: 15rem;
	position: absolute;
	left: 0;
	z-index: 0;

	@media screen and (max-width: 700px) {
		width: 8rem;
	}

	&.v2 {
		top: 100rem;
	}
`

export const Cactus = styled.img`
	width: 18rem;
	position: absolute;
	right: 0;
	top: 50rem;

	@media screen and (max-width: 700px) {
		width: 8rem;
	}

	&.v2 {
		top: 160rem;
		width: 10rem;
	}
`

export const Hat = styled.img`
	width: 18rem;
	position: absolute;
	left: 0;
	top: 250rem;

	@media screen and (max-width: 700px) {
		width: 8rem;
	}

	&.v2 {
		position: absolute;
		right: 0 !important;
		top: 300rem;
	}
`

export const Maracas = styled.img`
	width: 18rem;
	position: absolute;
	position: absolute;
	right: 0 !important;
	top: 300rem;

	@media screen and (max-width: 700px) {
		width: 8rem;
	}
`

export const Slogan = styled.p`
	margin: 0;
	font-size: 5rem;
	color: #fff;
	font-family: 'Chango';
	text-align: center;
	max-width: 20ch;
	text-shadow: ${({ theme }) => theme.shadow.lg};

	@media screen and (max-width: 700px) {
		font-size: 4rem;
	}

	span {
		color: #fff;
		font-size: 2rem;
		text-shadow: none;
		display: block;
		margin-top: 1rem;

		&.ad {
			margin-top: 10rem;
			font-size: 1.5rem;
		}

		@media screen and (max-width: 700px) {
			font-size: 1.5rem;
		}
	}

	a,
	a:visited,
	a:active {
		font: inherit;
		color: inherit;
	}
`

export const Date = styled.p`
	margin: 0;
	font-size: 5rem;
	color: #fff;
	font-family: 'Chango';
	text-align: center;
	max-width: 20ch;
	text-shadow: ${({ theme }) => theme.shadow.lg};
`

export const Ballons = styled.img`
	width: 35rem;
	margin: 6rem 0 4rem;
`

export const Calendar = styled.img`
	width: 25rem;
	margin: 6rem 0 4rem;
`

export const TimerText = styled.p`
	font-size: 7rem;
	margin-top: 2rem;
	line-height: 1;
	font-family: 'Chango';
	text-align: center;
	text-shadow: ${({ theme }) => theme.shadow.lg};
`

export const Trophy = styled.img`
	width: 30rem;
	margin: 6rem 0 4rem;
`

export const CatusDance = styled.img`
	width: 35rem;
	margin: 6rem 0 4rem;
`

export const Button = styled.button`
	font-family: 'Chango';
	font-weight: 700;
	font-size: 4rem;
	color: white;
	border-radius: 1.5rem;
	background-color: #d59c34;
	border: none;
	padding: 2rem 4rem;
	min-width: 40rem;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
		transition: all 0.2s linear;
		box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.2);
	}

	&:disabled {
		opacity: 0.8;
		transform: scale(1);
		transition: all 0.2s linear;
		box-shadow: none;
	}
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-top: 5rem;

	width: 100%;
	max-width: 50rem;

	button {
		font-size: 3.5rem;
		margin-top: 1rem;
	}
`

export const Confetti = styled.div`
	position: relative;
	transform: translateX(50%);
`
