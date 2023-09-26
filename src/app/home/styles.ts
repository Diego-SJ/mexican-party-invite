import styled from 'styled-components'

export const TemporaryBg = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	max-height: 100vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	img {
		width: 40rem;
		transition: all 0.2s ease-in-out;
		margin-bottom: 3rem;
	}
`

export const Button = styled.button`
	width: min-content;
	padding: 1rem 4rem;
	border-radius: 10rem;
	outline: none;
	background-color: #7c0d84;
	font-size: 4rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	border: 1rem solid #ffffff;
	box-shadow: 0 0 1.5rem 0rem rgba(0, 0, 0, 0.3);
	cursor: pointer;
	font-family: 'Chango';

	&:hover {
		transform: scale(1.1);
		background-color: #5cbe00;
	}
`

export const TitleContainer = styled.div`
	padding: 4rem 2rem;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 2rem;
	z-index: 4;
`

export const Title = styled.h1`
	font-size: 4rem;
	color: #fff;
`
