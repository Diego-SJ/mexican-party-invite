import { ThemeProvider } from 'styled-components'
import { myTheme } from './theme'
import GlobalStyle from './theme/styles'
import Router from './app/routes/Router'

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	)
}

export default App
