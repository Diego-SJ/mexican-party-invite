import { Routes, Route } from 'react-router-dom'
import PartyTime from '../pages/party-time'
import Home from '../home'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/party-time" element={<PartyTime />} />
		</Routes>
	)
}

export default Router
