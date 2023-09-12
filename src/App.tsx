import { ThemeProvider } from 'styled-components'
import { myTheme } from './theme'
import GlobalStyle from './theme/styles'
import Home from './app/home'

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	)
}

export default App
