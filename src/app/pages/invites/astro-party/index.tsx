import {
	ASTRO_THEME,
	AstroPartyContent,
	AstroPartyRoot,
	BodyText,
	HeaderContainer,
	Image,
	TitleText
} from './styles'
import PlanetSvg from './assets/astronaut.webp'
import Space from '../../../components/space'
import Lottie from 'react-lottie'
import StarsInSpace from './assets/stars-in-space.json'
import PlanetOrange from './assets/Planet_orange'
import Saturn from './assets/Saturn'
import Ufo from './assets/Ufo'
import Rocket from './assets/Rocket'
import CustomCanvas from './custom-canvas'
import useMediaQuery from '../../../../hooks/useMediaQueries'
import ConfirmationForm from '../../../components/confirmation-form'
import { Bounce } from 'react-awesome-reveal'

const AstroParty = () => {
	const { isTablet } = useMediaQuery()
	return (
		<AstroPartyRoot className="invite-layout">
			<Lottie
				speed={2}
				options={{
					loop: true,
					autoplay: true,

					animationData: StarsInSpace,
					rendererSettings: {
						preserveAspectRatio: 'xMidYMid slice'
					}
				}}
				height="100vh"
				width="100vw"
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 1
				}}
			/>
			<AstroPartyContent className="invite-content">
				<CustomCanvas
					left={isTablet ? -150 : -250}
					top={isTablet ? -100 : -20}
					autoRotateSpeed={5}
					fov={isTablet ? 80 : 60}
				>
					<Ufo />
				</CustomCanvas>
				<Bounce cascade damping={0.3}>
					<HeaderContainer>
						<h3 className="header header-title kalam">3</h3>
						{/* <h5 className="header header-subtitle kalam">años</h5> */}
					</HeaderContainer>
				</Bounce>
				<CustomCanvas
					right={isTablet ? -150 : -250}
					top={isTablet ? 90 : 230}
					autoRotateSpeed={14}
					fov={isTablet ? 60 : 40}
				>
					<Rocket />
				</CustomCanvas>
				<Bounce cascade damping={0.3}>
					<TitleText className="name">Diego</TitleText>
					<Space height="4rem" />
					<BodyText>Ven y celebra con nosotros una fiesta espacial</BodyText>
					<Space height="5rem" />
					<TitleText>El día 10 de octubre</TitleText>
					<Space height="5rem" />
					<BodyText>A partir de las 4:00 pm</BodyText>
					<Space height="5rem" />
					<TitleText>¡Te esperamos!</TitleText>
				</Bounce>
				<CustomCanvas
					right={isTablet ? -150 : -250}
					top={isTablet ? 580 : 780}
					autoRotateSpeed={8}
					fov={isTablet ? 60 : 30}
				>
					<Saturn />
				</CustomCanvas>

				<Space height="2rem" />
				<CustomCanvas
					left={isTablet ? -150 : -250}
					top={isTablet ? 380 : 600}
					autoRotateSpeed={10}
					fov={isTablet ? 60 : 30}
				>
					<PlanetOrange />
				</CustomCanvas>
				<Bounce cascade damping={0.3}>
					<BodyText>Confirmanos tu Astroasistencia</BodyText>

					<ConfirmationForm
						margin={{ top: '10rem' }}
						font="Nasa"
						locationUrl="https://maps.app.goo.gl/zdSUicChCjNbJbAJ8"
						inviteId="general_test"
						textShadow={false}
						colors={{ secondary: ASTRO_THEME.secondary, primary: ASTRO_THEME.secondary }}
					/>
				</Bounce>
				<Image src={PlanetSvg} alt="astronauta" className="astronaut-3" />
			</AstroPartyContent>
		</AstroPartyRoot>
	)
}

export default AstroParty
