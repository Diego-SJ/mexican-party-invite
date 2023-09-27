import { Routes, Route } from 'react-router-dom'
import PartyTimeRoot from '../pages/party-time'
import PartyTimeList from '../pages/party-time/invite-list'
import Home from '../home'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/party-time" element={<PartyTimeRoot />} />
			<Route path="/party-time/confirmation-list" element={<PartyTimeList />} />
		</Routes>
	)
}

export default Router
