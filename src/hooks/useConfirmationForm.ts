import { ChangeEvent, useState } from 'react'
import { User, getUsers, saveUser } from '../firebase/app'

const useConfirmationForm = (inviteId = 'general_test') => {
	const [showButton, setShowButton] = useState(true)
	const [showForm, setShowForm] = useState(false)
	const [showConfetti, setShowConfetti] = useState(false)
	const [loading, setLoading] = useState(false)
	const [form, setFormData] = useState({ name: '', phone: '' })
	const [storedUsers, setStoredUsers] = useState<User[]>([])

	const openForm = () => {
		setShowForm(true)
		setShowButton(false)
	}

	const onCompleted = () => {
		setShowConfetti(true)
		setShowForm(false)
		setShowButton(false)
	}

	const submit = async () => {
		// send data
		setLoading(true)
		const result = await getUsers({ refetch: false })
		let userAlreadyExist = result?.find((i) => i?.phone === form?.phone && i?.inviteId === inviteId)

		if (userAlreadyExist) onCompleted()
		else {
			const success = await saveUser({ ...form, inviteId })
			if (success) onCompleted()
		}
		// bottom.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		setLoading(false)
	}

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e?.target?.name === 'phone' && isNaN(Number(e?.target?.value))) return null
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e?.target?.value || ''
		}))
	}

	const fetchUsers = async (props?: { refetch?: boolean }) => {
		let result = await getUsers({ refetch: props?.refetch || false })
		result = result?.filter((i) => i?.inviteId === inviteId)
		setStoredUsers(result)
	}

	return {
		showButton,
		showForm,
		showConfetti,
		loading,
		users: storedUsers,
		form: {
			data: {
				name: {
					type: 'text',
					placeholder: 'Nombre',
					name: 'name',
					value: form?.name || '',
					onChange: onFormChange
				},
				phone: {
					type: 'tel',
					placeholder: 'Telefono',
					name: 'phone',
					maxLength: 10,
					value: form?.phone || '',
					onChange: onFormChange
				}
			},
			disableButton: !Object.values(form)?.every((i) => !!i?.length),
			submit,
			open: openForm
		},
		actions: {
			fetchUsers
		}
	}
}

export default useConfirmationForm
