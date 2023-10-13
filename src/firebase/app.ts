import { initializeApp, FirebaseApp, getApps } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCefJF9vFFj2nAcOdFGtJufz6hvSDVwWlg',
	authDomain: 'test1-d2593.firebaseapp.com',
	projectId: 'test1-d2593',
	storageBucket: 'test1-d2593.appspot.com',
	messagingSenderId: '840308951902',
	appId: '1:840308951902:web:74d525b6341ef14861ddcf'
}

let app: FirebaseApp = {} as FirebaseApp
if (!getApps()?.length) {
	app = initializeApp(firebaseConfig)
}
const db = getFirestore(app)

// get users
export type User = { name?: string; phone?: string; inviteId?: string }
export async function getUsers({ refetch = false }): Promise<User[]> {
	let usersList = []

	if (JSON.parse(localStorage.getItem('users') || '[]')?.length && !refetch) {
		return JSON.parse(localStorage.getItem('users') || '[]')
	}

	const users = collection(db, 'mexican-party')
	const usersSnapshot = await getDocs(users)
	usersList = usersSnapshot.docs.map((doc) => doc.data())

	localStorage.setItem('users', JSON.stringify(usersList))

	return usersList
}

export async function saveUser(user: User): Promise<boolean> {
	try {
		await addDoc(collection(db, 'mexican-party'), user)
		await getUsers({ refetch: true })
		return true
	} catch (error) {
		console.log({ error })
		return false
	}
}

export default {}
