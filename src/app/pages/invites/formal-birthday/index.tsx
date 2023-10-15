import {
	FORMAL_THEME,
	AstroPartyContent,
	AstroPartyRoot,
	BodyText,
	HeaderContainer,
	HeaderImage,
	TitleText,
	TimerContainer,
	TimerItem
} from './styles'
import Space from '../../../components/space'
import ConfirmationForm from '../../../components/confirmation-form'
import Number5 from './assets/number-5.png'
import Number0 from './assets/number-0.png'
import { Fade } from 'react-awesome-reveal'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useTimer from '../../../../hooks/useTimer'

const validInvites = ['antonio-juarez']

const FormalBirthday = () => {
	const { inviteId } = useParams()
	const time = useTimer('2023-10-22T14:00:00')
	const navigation = useNavigate()

	useEffect(() => {
		if (!inviteId || !validInvites.includes(inviteId)) navigation('/')
	}, [inviteId])

	return (
		<AstroPartyRoot className="invite-layout">
			<HeaderImage />

			<AstroPartyContent className="invite-content">
				<Fade cascade damping={0.3}>
					<HeaderContainer>
						<div className="age-container">
							<img className="number number-left" src={Number5} alt="globo 5" />
							<img className="number number-right" src={Number0} alt="globo 0" />
						</div>
						<h5 className="header header-subtitle">años</h5>
					</HeaderContainer>
				</Fade>
				<Fade cascade damping={0.3}>
					<Space height="2rem" />
					<BodyText>Acompañanos a celebrar el cumpleaños número 50 de</BodyText>
					<Space height="5rem" />
					<TitleText>Antonio Juárez</TitleText>
					<Space height="3rem" />
					<BodyText>22 de Octubre</BodyText>
					<BodyText>a partir de las 2:00 pm</BodyText>
					<Space height="5rem" />
					<BodyText>Faltan</BodyText>
					<Space height="2rem" />
					<TimerContainer>
						<TimerItem>
							<span className="number">{time.days}</span>
							<span className="text">días</span>
						</TimerItem>
						<TimerItem>
							<span className="number">{time.hours}</span>
							<span className="text">horas</span>
						</TimerItem>
						<TimerItem>
							<span className="number">{time.minutes}</span>
							<span className="text">minutos</span>
						</TimerItem>
						<TimerItem>
							<span className="number">{time.seconds}</span>
							<span className="text">segundos</span>
						</TimerItem>
					</TimerContainer>
				</Fade>

				<Space height="7rem" />
				<Fade cascade damping={0.2}>
					<TitleText>¡Te esperamos!</TitleText>
					<Space height="5rem" />
					<BodyText>Confirma tu asistencia</BodyText>

					<ConfirmationForm
						margin={{ top: '5rem' }}
						font="Raleway"
						locationUrl="https://maps.google.com/?q=20.297544,-99.176628"
						inviteId={inviteId || ''}
						textShadow={false}
						colors={{ secondary: FORMAL_THEME.secondary, primary: FORMAL_THEME.primary }}
					/>
				</Fade>
			</AstroPartyContent>
			<HeaderImage className="footer" />
		</AstroPartyRoot>
	)
}

export default FormalBirthday
