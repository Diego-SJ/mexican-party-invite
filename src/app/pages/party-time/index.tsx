import Particles from 'react-particles'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { loadSlim } from 'tsparticles-slim'
import {
	ActionsButtons,
	Button,
	Char,
	DateContainer,
	DateTimeContainer,
	Input,
	PALLETE,
	PartyTimeContainer,
	PartyTimeRoot,
	PartyTimeTitle,
	PrimaryCopy,
	SecondaryCopy,
	Form,
	ImagePartyPopper
} from './styles'
import BounceBall from '../../components/bounce-ball'
import PoweredBy from '../../components/powered-by'
import PartyPopperImg from '../../../assets/images/party-popper.png'
import { Bounce } from 'react-awesome-reveal'
import { User, getUsers, saveUser } from '../../../firebase/app'
import ConfettiExplosion from 'react-confetti-explosion'
import { Confetti } from '../../styles'

const confetti = {
	force: 0.8,
	duration: 4000,
	particleCount: 700,
	width: 2000,
	height: 1000
}

const PartyTime = () => {
	const [showForm, setShowForm] = useState(false)
	const [informationSaved, setInformationSaved] = useState(false)
	const [storedUsers, setStoredUsers] = useState<User[]>([])
	const [formData, setFormData] = useState({ name: '', phone: '' })
	const [loading, setLoading] = useState(false)
	const rendered = useRef<boolean>(false)
	const bottom = useRef<HTMLLabelElement>(null)

	useEffect(() => {
		if (!rendered.current) {
			;(async () => {
				rendered.current = true
				const result = await getUsers()
				setStoredUsers(result)
			})()
		}
	}, [])

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e?.target?.value || ''
		}))
	}

	const onSubmit = async () => {
		// send data
		setLoading(true)
		let userAlreadyExist = storedUsers?.find((i) => i?.phone === formData?.phone)
		if (userAlreadyExist) setInformationSaved(true)
		else {
			const success = await saveUser(formData)
			if (success) setInformationSaved(true)
		}
		bottom.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		setLoading(false)
	}

	const particlesInit = useCallback(async (engine: any) => {
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: any) => {
		console.log(await container)
	}, [])

	const onLocationClick = () => {
		window.open('https://maps.app.goo.gl/zdSUicChCjNbJbAJ8', '_blank')
	}

	return (
		<PartyTimeRoot>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 120,
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
								area: 500
							}
						},
						color: {
							value: ['#ff1067', '#00c1f3', '#5cbe00', '#ffca00', '#7c0d84']
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
								color: '#000000'
							},
							polygon: {
								sides: 5
							},
							image: {
								src: 'https://cdn.matteobruni.it/images/particles/github.svg',
								width: 100,
								height: 100
							}
						},
						opacity: {
							value: 0.1,
							random: false,
							animation: {
								enable: false,
								speed: 1,
								minimumValue: 0.08,
								sync: false
							}
						},
						size: {
							value: 10,
							random: { enable: true, minimumValue: 5 },
							animation: {
								enable: false,
								speed: 40,
								minimumValue: 5,
								sync: false
							}
						},
						lineLinked: {
							enable: false,
							distance: 150,
							color: '#ffffff',
							opacity: 0.4,
							width: 1
						},
						move: {
							collisions: true,
							enable: true,
							speed: 3,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'bounce',
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200
							}
						}
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onHover: {
								enable: false,
								mode: 'repulse',
								parallax: {
									enable: false,
									force: 60,
									smooth: 10
								}
							},
							onClick: {
								enable: true,
								mode: 'push'
							},
							resize: true
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1
								}
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 0.8,
								speed: 3
							},
							repulse: {
								distance: 200
							},
							push: {
								particles_nb: 4
							},
							remove: {
								particles_nb: 2
							}
						}
					},
					detectRetina: true,
					background: {
						color: 'transparent',
						image: '',
						position: '50% 50%',
						repeat: 'no-repeat',
						size: 'cover'
					}
				}}
			/>
			<PartyTimeContainer>
				<Bounce cascade damping={0.3}>
					<PartyTimeTitle className="rainbow-text">
						<Char idx={1}>¡</Char>
						<Char idx={2}>P</Char>
						<Char idx={3}>A</Char>
						<Char idx={4}>R</Char>
						<Char idx={5}>T</Char>
						<Char idx={6}>Y</Char> <Char idx={7}>T</Char>
						<Char idx={8}>I</Char>
						<Char idx={9}>M</Char>
						<Char idx={10}>E</Char>
						<Char idx={11}>!</Char>
					</PartyTimeTitle>

					<PrimaryCopy>
						¡Estamos <span className="pink">preparando</span> <span className="green">grandes</span>{' '}
						sorpresas <span className="blue">para</span> ti!
						<BounceBall color={PALLETE.green} />
					</PrimaryCopy>

					<DateTimeContainer>
						<DateContainer>
							{/* <img src={Calendar} alt="calendar" className="calendar" /> */}
							<span className="week-day">Sabado</span>
							<Bounce>
								<span className="day-number">26</span>
							</Bounce>
							<span className="month">Octubre</span>
						</DateContainer>
						<DateContainer>
							<span className="week-day">Hora</span>
							<Bounce>
								<span className="day-number">1</span>
							</Bounce>
							<span className="month">P.M.</span>
						</DateContainer>
						<BounceBall />
					</DateTimeContainer>

					{informationSaved ? (
						<>
							<Confetti>
								<ConfettiExplosion {...confetti} />
							</Confetti>
							<ImagePartyPopper src={PartyPopperImg} alt="party popper" />
							<SecondaryCopy className="pink mb-1">¡Ya estás dentro!</SecondaryCopy>
							<Button onClick={onLocationClick}>¡Ver ubicación!</Button>
						</>
					) : (
						<>
							{showForm ? (
								<Form>
									<SecondaryCopy className="mb-1">¡Anotate!</SecondaryCopy>
									<Input
										type="text"
										placeholder="Nombre"
										name="name"
										value={formData?.name}
										onChange={onFormChange}
									/>
									<Input
										type="tel"
										placeholder="Telefono"
										name="phone"
										maxLength={10}
										value={formData?.phone}
										onChange={onFormChange}
									/>
									<ActionsButtons>
										<Button
											onClick={onSubmit}
											className="bg-green"
											disabled={!Object.values(formData)?.every((i) => !!i?.length) || loading}
										>
											{loading ? 'Enviando...' : '¡Confirmar!'}
										</Button>
									</ActionsButtons>
								</Form>
							) : (
								<>
									<SecondaryCopy className="mb-1">
										¡No faltes!
										<BounceBall color={PALLETE.yellow} />
									</SecondaryCopy>
									<ActionsButtons>
										<Button onClick={() => setShowForm((prev) => !prev)}>
											¡Confirmar asistencia!
										</Button>
									</ActionsButtons>
								</>
							)}
						</>
					)}
				</Bounce>
				<span ref={bottom}></span>
				<PoweredBy />
			</PartyTimeContainer>
		</PartyTimeRoot>
	)
}

export default PartyTime
