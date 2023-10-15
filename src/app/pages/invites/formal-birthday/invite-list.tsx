import {
	AstroPartyContent,
	AstroPartyRoot,
	BodyText,
	HeaderImage,
	TitleText,
	UserList,
	UserCard,
	Avatar,
	UserCardContent,
	FORMAL_THEME
} from './styles'
import Space from '../../../components/space'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { User } from '../../../../firebase/app'
import useConfirmationForm from '../../../../hooks/useConfirmationForm'
import { Button } from '../../../components/confirmation-form'

const validInvites = ['antonio-juarez']

const FormalBirthdayList = () => {
	const { inviteId, refetch = 'false' } = useParams()
	const { actions, users = [] } = useConfirmationForm(inviteId)
	const navigation = useNavigate()
	const rendered = useRef<boolean>(false)
	const [buttonText, setButtonText] = useState('Copiar link de la invitación')

	useEffect(() => {
		if (!inviteId || !validInvites.includes(inviteId)) navigation('/')
	}, [inviteId])

	useEffect(() => {
		if (!rendered.current) {
			;(async () => {
				rendered.current = true
				actions.fetchUsers({ refetch: refetch === 'true' })
			})()
		}
	}, [refetch])

	const onClick = (path: string) => {
		window.open(path, '_blank')
	}

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href?.replace('/asistance', ''))
		setButtonText('¡Copiado!')
		setTimeout(() => {
			setButtonText('Copiar link de la invitación')
		}, 1500)
	}

	return (
		<AstroPartyRoot className="invite-layout">
			<HeaderImage className="v3" />

			<AstroPartyContent className="invite-content">
				<Space height="15rem" />
				<TitleText>Antonio Juárez</TitleText>
				<Space height="3rem" />
				<BodyText>
					{!!users?.length
						? 'Aquí tienes tu lista de invitados confirmados'
						: 'Aquí podrás ver la lista de invitados que han confirmado'}
				</BodyText>
				<Space height="3rem" />
				{users?.length ? (
					<BodyText className="sm">
						* Puedes comunicarte con tus invitados dando click en las tarjetas
					</BodyText>
				) : null}
				<Space height="2rem" />
				<Button
					onClick={copyLink}
					$secondary={FORMAL_THEME.secondary}
					$primary={FORMAL_THEME.primary}
					$font="Raleway"
				>
					{buttonText}
				</Button>
				<Space height="5rem" />

				<UserList>
					{!!users?.length
						? users
								?.filter((i) => !!i?.phone)
								?.map((user: User) => (
									<UserCard
										key={user?.phone}
										onClick={() => onClick(`https://api.whatsapp.com/send/?phone=52${user?.phone}`)}
									>
										<Avatar
											src={`https://source.boringavatars.com/beam/120/${
												user?.name || 'No name'
											}?colors=dca71a,dca71a,ffffff`}
											alt={user?.name}
										/>
										<UserCardContent>
											<h5 className="avatar-name">{user?.name || 'No name'}</h5>
											<p className="avatar-phone">{user?.phone}</p>
										</UserCardContent>
									</UserCard>
								))
						: null}
				</UserList>
			</AstroPartyContent>
		</AstroPartyRoot>
	)
}

export default FormalBirthdayList
