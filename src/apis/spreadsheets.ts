import axios from 'axios'
import { User } from '../firebase/app'
const SPREADSHEET_ID = '1Qe5v5e8Qi4cOw1cRPh4XB0Nc5Ts5YlhMAwAofFCdeeQ'
const API_KEY = 'AIzaSyD4mclp1HlVRM-DlYnVBXYFG21zLi3-7LY'

const gSheets = {
	getUsers: async () => {
		const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/invites?key=${API_KEY}&alt=json`
		let result = await axios.get(apiURL)
		let usersInvited: User[] = []
		result?.data?.values?.forEach((i: any, idx: number) => {
			if (idx !== 0) {
				usersInvited.push({ name: i[0], phone: i[1], inviteId: i[2] })
			}
		})

		console.log('RESULT', usersInvited)
	}
}

export default gSheets
