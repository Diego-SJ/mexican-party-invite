import Particles from 'react-particles'
import { useCallback, useEffect, useRef, useState } from 'react'
import { loadSlim } from 'tsparticles-slim'
import {
	Avatar,
	Char,
	PALLETE,
	PartyTimeContainer,
	PartyTimeRoot,
	PartyTimeTitle,
	PrimaryCopy,
	UserCard,
	UserCardContent,
	UserList
} from './styles'
import BounceBall from '../../../components/bounce-ball'
import PoweredBy from '../../../components/powered-by'
import { User, getUsers } from '../../../../firebase/app'

const PartyTimeInviteList = () => {
	const [storedUsers, setStoredUsers] = useState<User[]>([])
	const rendered = useRef<boolean>(false)

	useEffect(() => {
		if (!rendered.current) {
			;(async () => {
				rendered.current = true
				const result = await getUsers()
				setStoredUsers(result)
			})()
		}
	}, [])

	const particlesInit = useCallback(async (engine: any) => {
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: any) => {
		console.log(await container)
	}, [])

	const onClick = (path: string) => {
		window.open(path, '_blank')
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
							value: 200,
							density: {
								enable: true,
								area: 800
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
				<>
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
						¡Aquí <span className="pink">tienes</span> tu <span className="blue">lista</span> de{' '}
						<span className="green">invitados</span> confirmados!
						<BounceBall color={PALLETE.green} />
					</PrimaryCopy>
					<PrimaryCopy>
						TOTAL: <span className="green">{storedUsers?.length}</span>
					</PrimaryCopy>

					<UserList>
						{storedUsers
							?.filter((i) => !!i?.phone)
							?.map((user) => (
								<UserCard
									key={user?.phone}
									onClick={() => onClick(`https://api.whatsapp.com/send/?phone=52${user?.phone}`)}
								>
									<Avatar
										src={`https://source.boringavatars.com/beam/120/${
											user?.name || 'No name'
										}?colors=7c0d84,00c1f3,5cbe00`}
										alt={user?.name}
									/>
									<UserCardContent>
										<h5 className="avatar-name">{user?.name || 'No name'}</h5>
										<p className="avatar-phone">{user?.phone}</p>
									</UserCardContent>
								</UserCard>
							))}
					</UserList>
				</>
				<PoweredBy />
			</PartyTimeContainer>
		</PartyTimeRoot>
	)
}

export default PartyTimeInviteList
