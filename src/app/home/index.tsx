import { Button, MediaBtn, MediaButtons, TemporaryBg, TitleContainer } from './styles'
import Particles from 'react-particles'
import { useCallback } from 'react'
import { loadSlim } from 'tsparticles-slim'
import HappyHopLogo from '../../assets/images/happy-hop.png'
import { FacebookSvg, InstagramSvg, TiktokSvg, WhatsappSvg } from './icons'

const LadingPage = () => {
	const particlesInit = useCallback(async (engine: any) => {
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container)
	}, [])

	const onClick = (path: string) => {
		window.open(path, '_blank')
	}

	return (
		<TemporaryBg>
			<TitleContainer>
				<img src={HappyHopLogo} alt="happy hop" />
				<Button
					onClick={() =>
						onClick(
							'https://api.whatsapp.com/send/?phone=527731718702&text=¡Hola!+Me+gustaria+saber+más+sobre+el+servicio'
						)
					}
				>
					¡Contactanos!
				</Button>
				<MediaButtons>
					<MediaBtn
						className="facebook"
						onClick={() => onClick('https://www.facebook.com/profile.php?id=61551806553265')}
					>
						<FacebookSvg />
					</MediaBtn>
					<MediaBtn
						className="instagram"
						onClick={() => onClick('https://instagram.com/happy_hop_inflable')}
					>
						<InstagramSvg />
					</MediaBtn>
					<MediaBtn
						className="tiktok"
						onClick={() => onClick('https://www.tiktok.com/@happy.hop4')}
					>
						<TiktokSvg />
					</MediaBtn>
					<MediaBtn
						onClick={() =>
							onClick(
								'https://api.whatsapp.com/send/?phone=527731718702&text=¡Hola!+Me+gustaria+saber+más+sobre+el+servicio'
							)
						}
					>
						<WhatsappSvg />
					</MediaBtn>
				</MediaButtons>
			</TitleContainer>
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
								'#9952CF',
								'#f8f8f8'
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
		</TemporaryBg>
	)
}

export default LadingPage
