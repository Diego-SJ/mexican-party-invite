import { useEffect, useState } from 'react'

type TimerData = {
	days: number
	hours: number
	minutes: number
	seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimerData => {
	const now = new Date().getTime()
	const targetTime = targetDate.getTime()
	const timeRemaining = targetTime - now

	if (timeRemaining <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	const seconds = Math.floor((timeRemaining / 1000) % 60)
	const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
	const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))

	return {
		days,
		hours,
		minutes,
		seconds
	}
}

const useTimer = (targetDateTime: string | Date): TimerData => {
	const targetDate = new Date(targetDateTime)
	const [timeLeft, setTimeLeft] = useState<TimerData>(calculateTimeLeft(targetDate))

	useEffect(() => {
		const timerInterval = setInterval(() => {
			const newTimeLeft = calculateTimeLeft(targetDate)
			setTimeLeft(newTimeLeft)
		}, 1000)

		return () => clearInterval(timerInterval)
	}, [targetDate])

	return timeLeft
}

export default useTimer
