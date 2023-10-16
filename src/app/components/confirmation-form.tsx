import styled from 'styled-components'
import useConfirmationForm from '../../hooks/useConfirmationForm'
import ConfettiExplosion from 'react-confetti-explosion'
import PartyPopperImg from '../../assets/images/party-popper.png'
import { PALLETE } from '../pages/invites/party-time/styles'
import Space from '../components/space'
import { atcb_action } from 'add-to-calendar-button'

type Props = {
	locationUrl?: string
	colors?: { primary?: string; secondary?: string; tertiary?: string }
	font?: string
	finalImageUrl?: string
	inviteId: string
	margin?: { top?: string; bottom?: string }
	textShadow?: boolean
	hideTitles?: boolean
	calendar?: {
		name: string
		startDate: string
		startTime: string
		endTime: string
	}
}

const ConfirmationForm = (props: Props) => {
	const { showConfetti, showForm, showButton, loading, form } = useConfirmationForm(props.inviteId)
	const { locationUrl, finalImageUrl, colors, font = 'Dela Gothic One', margin } = props
	const { primary = PALLETE.pink, secondary = PALLETE.green } = colors ?? {}
	const { textShadow = true, calendar } = props

	const onLocationClick = () => {
		window.open(locationUrl || 'https://maps.app.goo.gl/zdSUicChCjNbJbAJ8', '_blank')
	}

	const saveCalendarEvent = (e: any) => {
		let configuration = {
			name: calendar?.name || 'Fiesta de cumpleaños',
			location: locationUrl,
			description: `📍 Ubicaciön: ${locationUrl}[br][br]❤️ ¿Te gustaría una invitación como esta? Visita https://happy-hop.com para obtener más información.`,
			startDate: calendar?.startDate,
			startTime: calendar?.startTime,
			endTime: calendar?.endTime,
			options: ['Apple', 'Google', 'Outlook.com'],
			hideBackground: true,
			customLabels: { close: 'Cancelar' }
		}

		atcb_action(configuration, e.target)
	}

	return (
		<ConfirmationFormRoot>
			{!!margin?.top && <Space height={margin?.top} />}
			{showConfetti && (
				<>
					<Confetti>
						<ConfettiExplosion
							{...{
								force: 0.8,
								duration: 4000,
								particleCount: 700,
								width: 2000,
								height: 1000
							}}
						/>
					</Confetti>
					<ImagePartyPopper src={finalImageUrl || PartyPopperImg} alt="party popper" />
					<SecondaryCopy
						$textShadow={textShadow}
						$font={font}
						$secondary={secondary}
						className="pink mb-1"
					>
						¡Asistencia confirmada!
					</SecondaryCopy>
					<Button onClick={onLocationClick} $secondary={secondary} $primary={primary} $font={font}>
						Ver ubicación
					</Button>
					<Space height="4rem" />
					<Button
						onClick={saveCalendarEvent}
						$secondary={secondary}
						$primary={primary}
						$font={font}
					>
						Agregar al calendario
					</Button>
				</>
			)}

			{showForm && (
				<Form>
					<SecondaryCopy
						$textShadow={textShadow}
						$font={font}
						$secondary={secondary}
						className="mb-1"
						style={{ display: props?.hideTitles ? 'none' : 'block' }}
					>
						¡Anotate!
					</SecondaryCopy>
					<Input {...form.data.name} $font={font} $primary={primary} $secondary={secondary} />
					<Input {...form.data.phone} $font={font} $primary={primary} $secondary={secondary} />
					<ActionsButtons>
						<Button
							onClick={form.submit}
							disabled={form.disableButton || loading}
							$secondary={secondary}
							$primary={primary}
							$font={font}
						>
							{loading ? 'Enviando...' : '¡Confirmar!'}
						</Button>
					</ActionsButtons>
				</Form>
			)}

			{showButton && (
				<>
					<SecondaryCopy
						$textShadow={textShadow}
						$font={font}
						$secondary={secondary}
						className="mb-1"
						style={{ display: props?.hideTitles ? 'none' : 'block' }}
					>
						¡No faltes!
					</SecondaryCopy>
					<ActionsButtons>
						<Button onClick={form.open} $secondary={secondary} $primary={primary} $font={font}>
							Confirmar asistencia
						</Button>
					</ActionsButtons>
				</>
			)}
			{!!margin?.bottom && <Space height={margin?.bottom} />}
		</ConfirmationFormRoot>
	)
}

const ConfirmationFormRoot = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Confetti = styled.div`
	position: relative;
	transform: translateX(50%);
`

export const ActionsButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	z-index: 10;
`

export const Button = styled.button<{ $font?: string; $primary?: string; $secondary?: string }>`
	font-family: ${({ $font }) => $font};
	font-weight: bold;
	font-size: 2.5rem;
	color: #ffffff;
	border-radius: 1.5rem;
	border: none;
	padding: 2rem 4rem;
	min-width: 40rem;
	line-height: 1;
	cursor: pointer;
	background-color: ${({ $primary }) => $primary};
	box-shadow: 0 0.5rem rgba(0, 0, 0, 0.2), 1rem 1rem 1rem rgba(0, 0, 0, 0.2);

	&.bg-secondary {
		background-color: ${({ $secondary }) => $secondary};
		color: #ffffff;
	}

	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}

	&:disabled {
		opacity: 1;
		transform: scale(1);
		transition: all 0.2s linear;
		background-color: ${PALLETE.dark};
	}
`

export const Input = styled.input<{ $font?: string; $primary?: string; $secondary?: string }>`
	width: 100%;
	border: 0.6rem solid ${({ $secondary }) => $secondary};
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2rem;
	padding: 1.2rem 4rem;
	font-size: 2.5rem;
	font-weight: 600;
	font-family: ${({ $font }) => $font};
	outline: none;
	color: ${({ $secondary }) => $secondary};
	text-transform: uppercase;
	transition: all 0.15s ease-in-out;

	&:focus {
		transition: all 0.15s ease-in-out;
		box-shadow: 0 0.5rem rgba(0, 0, 0, 0.2), 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
	}

	&::placeholder {
		font-weight: 600;
		font-family: ${({ $font }) => $font};
		outline: none;
		color: ${({ $secondary }) => $secondary};
		opacity: 0.5;
	}

	&:hover {
		transform: scale(1.02);
	}
`

export const Form = styled.div`
	width: 45rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const SecondaryCopy = styled.p<{
	$font?: string
	$primary?: string
	$secondary?: string
	$textShadow?: boolean
}>`
	font-size: 3rem;
	font-family: ${({ $font }) => $font};
	color: ${({ $secondary }) => $secondary};
	line-height: 1.2;
	text-align: center;
	margin-bottom: 6rem;
	max-width: 80%;
	text-shadow: ${({ $textShadow }) =>
		$textShadow ? '0 0.5rem #ffffff, 1rem 1rem 1rem rgba(0, 0, 0, 0.2)' : 'none'};
	position: relative;
	margin-left: auto;
	margin-right: auto;

	&.mb-1 {
		margin-bottom: 4rem !important;
	}
`

const ImagePartyPopper = styled.img`
	width: 40rem;
	display: inline-block !important;
	margin: 0 0 1rem !important;
`

export default ConfirmationForm
