type Invite = {
	date: Date | string
	name: string
	age: number
	colors: {
		primary: string
		secondary: string
	}
}

export const PARTY_TIME_DATA: { [key: string]: Invite } = {
	'antonio-juarez': {
		date: '2023-10-22T14:00:00',
		name: 'Antonio Juarez',
		age: 50,
		colors: {
			primary: 'blue',
			secondary: 'gold'
		}
	},
	default: {
		date: '2023-10-22T14:00:00',
		name: '¡Party time!',
		age: 50,
		colors: {
			primary: 'blue',
			secondary: 'gold'
		}
	}
}
