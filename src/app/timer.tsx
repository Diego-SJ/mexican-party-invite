import { useCallback, useEffect, useState } from 'react'
import { TimerText } from './styles'

const Timer = () => {
	const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

	const getTime = useCallback(() => {
		const now = new Date().getTime()
		const futureDate = new Date('15 Sep 2023 20:00:00').getTime()

		const timeleft = futureDate - now

		const days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
		const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

		setTime({ days, hours, minutes, seconds })
	}, [])
	useEffect(() => {
		const interval = setInterval(() => {
			getTime()
		}, 1000)
		return () => clearInterval(interval)
	}, [getTime])

	return (
		<TimerText>
			{time.days}d : {time.hours}hr : {time.minutes}m : {time.seconds}s
		</TimerText>
	)
}

export default Timer
