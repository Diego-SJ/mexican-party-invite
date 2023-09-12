import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	max-width: 50rem;
	border: 0.6rem solid #d59c34;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 1.5rem;
	padding: 2rem;
	font-size: 4rem;
	font-weight: 500;
	font-family: 'Chango';
	outline: none;
	color: #fff;

	&:focus {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}

	&::placeholder {
		font-weight: 500;
		font-family: 'Chango';
		outline: none;
		color: #fff;
	}
`
