import {
	Ballons,
	Button,
	Cactus,
	Calendar,
	CatusDance,
	Chili,
	Confetti,
	CutPapper,
	Form,
	Hat,
	MainLayout,
	Maracas,
	Slogan,
	Title,
	Trophy
} from './styles'
import HatAndMustache from '../assets/images/hat-and-mustache.png'
import ChiliImg from '../assets/images/chili.png'
import CactusImg from '../assets/images/cactus-plant.png'
import BallonsImg from '../assets/images/mexican-balloon-party.png'
import CalendarImg from '../assets/images/calendar.png'
import TrophyImg from '../assets/images/grand-prix-trophy.png'
import LocationPinImg from '../assets/images/location-pin.png'
import PinataImg from '../assets/images/donkey-pinatas.png'
import TacoImg from '../assets/images/mexican-taco-food-icon.png'
import CactusDanceImg from '../assets/images/cactus-playing-guitar.png'
import MaracasImg from '../assets/images/mexico-traditional-culture.png'
import CactusAndChiliImg from '../assets/images/cactus-and-red-chili-playing-music.png'
import TacoAvocadoImg from '../assets/images/taco-and-avocado-food.png'
import HatImg from '../assets/images/sombrero-hat.png'
import Timer from './timer'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Input } from './components/input'
import ConfettiExplosion from 'react-confetti-explosion'
import sountrack from '../assets/audio/soundtrack.mp3'
import { User, getUsers, saveUser } from '../firebase/app'

const confetti = {
	force: 0.8,
	duration: 15000,
	particleCount: 1000,
	width: 2000,
	height: 3000
}

const Home = () => {
	const [showForm, setShowForm] = useState(false)
	const [informationSaved, setInformationSaved] = useState(false)
	const [storedUsers, setStoredUsers] = useState<User[]>([])
	const [formData, setFormData] = useState({ name: '', phone: '' })
	const [loading, setLoading] = useState(false)
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
		setLoading(false)
	}

	return (
		<>
			{/* <audio id="player" autoPlay loop>
				<source src={sountrack} type="audio/mp3" />
			</audio> */}
			<MainLayout>
				<Chili className="img-shadow" src={ChiliImg} alt="chili" />
				<Cactus className="img-shadow" src={CactusImg} alt="cactus" />
				<CutPapper src={HatAndMustache} alt="mustache" />
				<Title>
					Peda
					<br /> Mexicana
				</Title>
				<Slogan>¡Borrachos al grito de peda!</Slogan>
				<Ballons src={BallonsImg} alt="ballons" />
				<Chili className="img-shadow v2" src={PinataImg} alt="Piñata" />
				<Slogan>
					¿Cuando o qué? <br />
					Viernes 15 de Sep. <br /> 8:00 pm
				</Slogan>
				<Hat src={HatImg} alt="hat" />
				<Maracas className="v2" src={MaracasImg} alt="maracas" />
				<Cactus className="img-shadow v2" src={TacoImg} alt="Piñata" />
				<Calendar src={CalendarImg} alt="calendar" />
				<Slogan>
					¿Ya merito? <br />
					Faltan:
				</Slogan>
				<Timer />
				<Trophy src={TrophyImg} alt="Trofeo" />
				<Slogan>
					¿Y qué gano si me visto perron? <br />
					$1000.00 MXN al más mexa
				</Slogan>
				<Calendar src={TacoAvocadoImg} alt="TACOS" />
				<Slogan>
					¿Qué llevo? <br />
					Outfit chido, pisto, y ganas de pistear bien duro
				</Slogan>
				<Calendar src={LocationPinImg} alt="Location" />
				<Slogan>
					¿Onde' le caigo o qué pex? <br />
					Pachuca de Soto
					<span>* Podrás ver la ubicación al confirmar tu asistencia</span>
				</Slogan>
				<CatusDance
					src={informationSaved ? CactusAndChiliImg : CactusDanceImg}
					alt="Cantus dance"
				/>

				{informationSaved ? (
					<>
						<Confetti>
							<ConfettiExplosion {...confetti} />
						</Confetti>
						<Slogan>¡YA ESTÁS DENTRO!</Slogan>
						<Slogan className="link">
							<a
								href="https://goo.gl/maps/XNdGQiuPVFebpqmC8"
								target="_blank"
								referrerPolicy="no-referrer"
							>
								Ver ubicación
							</a>
						</Slogan>
					</>
				) : (
					<>
						<Slogan>{showForm ? '¡Anotate!' : '¿Jalas?'}</Slogan>
						{showForm ? (
							<Form>
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
								<Button
									onClick={onSubmit}
									className="mt-4"
									disabled={!Object.values(formData)?.every((i) => !!i?.length) || loading}
								>
									{loading ? 'Enviando...' : '¡Fierro pariente!'}
								</Button>
							</Form>
						) : (
							<Button onClick={() => setShowForm((prev) => !prev)} className="mt-4">
								Jalo!
							</Button>
						)}
					</>
				)}

				<Slogan>
					<span className="ad">
						¿Necesitas una invitación digital para cualquier evento?{' '}
						<a
							href="https://api.whatsapp.com/send?phone=527714152997"
							target="_blank"
							referrerPolicy="no-referrer"
						>
							¡Contactame!
						</a>
					</span>
				</Slogan>
			</MainLayout>
		</>
	)
}

export default Home
