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
import useMediaQuery from '../../../../hooks/useMediaQueries'

const validInvites = ['antonio-juarez']

const FormalBirthday = () => {
	const { inviteId } = useParams()
	const time = useTimer('2023-10-22T14:00:00')
	const navigation = useNavigate()
	const { isTablet } = useMediaQuery()

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
						<h5 className="header header-subtitle">Antonio Juárez</h5>
					</HeaderContainer>
				</Fade>
				<Fade cascade damping={0.2}>
					<Space height={isTablet ? '3rem' : '8rem'} />
					<TitleText>El tiempo enriquece nuestras vidas con momentos preciosos.</TitleText>
					<Space height="5rem" />
					<BodyText>¡Acompáñanos para celebrar su 50º cumpleaños de recuerdos y amistad!</BodyText>
					<Space height="5rem" />
					<BodyText>Te esperamos el 22 de Octubre</BodyText>
					<Space height="5rem" />
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
					<TitleText>
						¡Te esperamos!
						<br />
						<br />
						Queremos hacer de este día un momento inolvidable.
					</TitleText>

					<ConfirmationForm
						margin={{ top: '5rem' }}
						font="Raleway"
						locationUrl="https://maps.google.com/?q=20.297544,-99.176628"
						inviteId={inviteId || ''}
						textShadow={false}
						hideTitles
						colors={{ secondary: FORMAL_THEME.secondary, primary: FORMAL_THEME.primary }}
					/>

					<Space height="8rem" />
					<BodyText>¡Acompáñanos para celebrar su 50º cumpleaños de recuerdos y amistad!</BodyText>
					<Space height="5rem" />
					<TitleText>Su amistad y amor son los mejores regalos que podría recibir.</TitleText>
					<Space height="5rem" />
				</Fade>
			</AstroPartyContent>
			<HeaderImage className="footer" />
		</AstroPartyRoot>
	)
}

export default FormalBirthday
