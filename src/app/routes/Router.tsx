import { Routes, Route } from 'react-router-dom'
import PartyTimeRoot from '../pages/invites/party-time'
import PartyTimeList from '../pages/invites/party-time/invite-list'
import Home from '../home'
import AstroParty from '../pages/invites/astro-party'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/party-time" element={<PartyTimeRoot />} />
			<Route path="/party-time/confirmation-list" element={<PartyTimeList />} />
			<Route path="/astro-party" element={<AstroParty />} />
			<Route path="/astro-party/confirmation-list" element={<span />} />
		</Routes>
	)
}

export default Router
