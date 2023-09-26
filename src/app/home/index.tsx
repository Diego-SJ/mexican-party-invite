import { Button, TemporaryBg } from './styles'
import Particles from 'react-particles'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import HappyHopLogo from '../../assets/images/happy-hop.png'

const LadingPage = () => {
	const particlesInit = useCallback(async (engine: any) => {
		console.log(engine)
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container)
	}, [])

	const onClick = () => {
		window.open('https://www.google.com', '_blank')
	}

	return (
		<>
			<TemporaryBg>
				<img src={HappyHopLogo} alt="happy hop" />
				{/* <TitleContainer>
					<Title>¡Bienvenido a Happy Hop!</Title>
				</TitleContainer> */}
				<Button onClick={onClick}>¡Contactanos!</Button>
			</TemporaryBg>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				style={{ zIndex: 2 }}
				options={{
					fpsLimit: 120,
					interactivity: {
						detectsOn: 'canvas',
						events: {
							resize: true,
							onHover: {
								enable: true,
								mode: 'bubble'
							}
						},
						modes: {
							bubble: {
								distance: 200,
								duration: 2,
								size: 45
							}
						}
					},
					particles: {
						color: {
							value: [
								'#3998D0',
								'#2EB6AF',
								'#A9BD33',
								'#FEC73B',
								'#F89930',
								'#F45623',
								'#D62E32',
								'#EB586E',
								'#9952CF'
							]
						},
						move: {
							attract: {
								enable: true,
								rotate: {
									x: 600,
									y: 1200
								},
								distance: 250
							},
							direction: 'none',
							enable: true,
							outModes: {
								default: 'out'
							},
							random: false,
							speed: 2,
							size: true,
							straight: false,
							trail: {
								fillColor: '#fff',
								enable: true,
								length: 5
							}
						},
						number: {
							density: {
								enable: true,
								area: 800
							},
							value: 100
						},
						opacity: {
							value: 0.5
						},
						shape: {
							type: ['circle', 'square']
						},
						rotate: {
							value: 0,
							direction: 'random',
							animation: {
								enable: true,
								speed: 10
							}
						},
						size: {
							random: {
								enable: true,
								minimumValue: 5
							},
							animation: {
								enable: true,
								speed: 6,
								minimumValue: 5
							},
							value: 15
						}
					},
					detectRetina: true
				}}
			/>
		</>
	)
}

export default LadingPage
