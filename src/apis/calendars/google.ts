import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

// Configura las credenciales y el token
const credentials = require('./credentials.json')
const token = require('./token.json') // Crea un archivo token.json vacío para almacenar el token

const SCOPES = ['https://www.googleapis.com/auth/calendar']

const oAuth2Client = new OAuth2Client(
	credentials.installed.client_id,
	credentials.installed.client_secret,
	credentials.installed.redirect_uris[0]
)

oAuth2Client.setCredentials(token)

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Define los detalles del evento
const event = {
	summary: 'Título del evento',
	location: 'Ubicación del evento',
	description: 'Descripción del evento',
	start: {
		dateTime: '2023-10-15T10:00:00',
		timeZone: 'America/Los_Angeles'
	},
	end: {
		dateTime: '2023-10-15T12:00:00',
		timeZone: 'America/Los_Angeles'
	}
}

// Crea el evento en el calendario
calendar.events.insert(
	{
		calendarId: 'primary', // Puedes cambiarlo si deseas usar otro calendario
		resources: event
	},
	(err, res) => {
		if (err) {
			console.error('Error al crear el evento:', err)
			return
		}
		console.log('Evento creado:', res.data.htmlLink)
	}
)
