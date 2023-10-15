import { Routes, Route } from 'react-router-dom'
import PartyTimeRoot from '../pages/invites/party-time'
import PartyTimeList from '../pages/invites/party-time/invite-list'
import Home from '../home'
import AstroParty from '../pages/invites/astro-party'
import FormalBirthday from '../pages/invites/formal-birthday'
import FormalBirthdayList from '../pages/invites/formal-birthday/invite-list'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/party-time" element={<PartyTimeRoot />} />
			<Route path="/party-time/confirmation-list" element={<PartyTimeList />} />
			<Route path="/astro-party" element={<AstroParty />} />
			<Route path="/astro-party/confirmation-list" element={<span />} />
			<Route path="/birthday/:inviteId" element={<FormalBirthday />} />
			<Route path="/birthday/:inviteId/asistance" element={<FormalBirthdayList />} />
		</Routes>
	)
}

export default Router
