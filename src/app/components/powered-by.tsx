import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoPng from '../../assets/images/happy-hop.png'
import { PALLETE } from '../pages/party-time/styles'

const PoweredByRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 10;
	padding: 10rem 5rem;

	p.title {
		font-size: 2rem;
		font-family: 'Manrope';
		font-weight: 800;
		text-align: center;
		color: ${PALLETE.dark};
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
`

const Logo = styled.img`
	&.powered-by_logo {
		width: 15rem;
		height: 15rem;
		display: inline-block;
		margin: 0;
	}
`

const PoweredBy = () => {
	return (
		<PoweredByRoot>
			<p className="title">Powered by</p>
			<Link to="/">
				<Logo className="powered-by_logo" src={LogoPng} alt="happy hop" />
			</Link>
		</PoweredByRoot>
	)
}

export default PoweredBy
