import styled, { keyframes } from 'styled-components'
import { PALLETE } from '../pages/invites/party-time/styles'

const bounce = keyframes`
  0% {
    top: -15rem;
    left: 0;
		-webkit-animation-timing-function: ease-in;
    transform: rotate(0deg);
	}
	40% {
    left: 0.5rem;
  }
	50% {
    top: -3rem;
		height: 3rem;
    width: 3rem;
    left: 0.5rem;
    border-radius: 100%;
		-webkit-animation-timing-function: ease-out;
    transform: rotate(180deg);
	}
	55% {
    top: -6rem;
    left: 0.5rem;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
		-webkit-animation-timing-function: ease-in;
  }
	65% {
    top: -10rem;
    height: 5rem;
    left: 0;
		-webkit-animation-timing-function: ease-out;
    border-radius: 30%;
  }
	100% {
    top: -15rem;
    left: 0;
		-webkit-animation-timing-function: ease-in;
    transform: rotate(360deg);
	}
`

const shadow = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(1);
	}
	40% {
    opacity: 0;
    transform: translateX(-50%) scale(1);
  }
  45% {
    opacity: 0;
    transform: translateX(-50%) scale(1);
  }
  48% {
    opacity: 0;
    transform: translateX(-50%) scale(1);
  }
  51% {
    opacity: 1;
    transform: scale(1) translateX(-50%);
	}
	55% {
    opacity: 1;
    transform: scale(1) translateX(-50%);
	}
	64% {
    opacity: 0.5;
    transform: translateX(-50%) scale(1.5);
  }
	65% {
    opacity: 0.2;
    transform: translateX(-50%) scale(2);
  }
	100% {
    opacity: 0;
    transform: translateX(-50%) scale(2.5);
	}
`

const HorizonBase = styled.span`
	position: relative;
	width: 5rem;
	height: 0.1rem;
`

const Ball = styled.span`
	width: 5rem;
	height: 5rem;
	position: absolute;
	top: -13rem;
	animation: ${bounce} 1s infinite;
`

const Shadow = styled.span`
	width: 10rem;
	height: 2rem;
	border-radius: 100%;
	background: rgba(0, 0, 0, 0.3);
	position: absolute;
	opacity: 0;
	bottom: -0.5rem;
	left: 50%;
	transform: translateX(-50%) scale(1);
	animation: ${shadow} 1s linear infinite;
`

const BounceBall = ({ color = PALLETE.pink }) => {
	return (
		<HorizonBase className="bounce-ball">
			<Ball style={{ background: color }} />
			<Shadow />
		</HorizonBase>
	)
}

export default BounceBall
