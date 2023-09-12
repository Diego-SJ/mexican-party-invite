// import original module declarations
import 'styled-components'
import { myTheme } from './theme'

type theme = typeof myTheme

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends theme {}
}
