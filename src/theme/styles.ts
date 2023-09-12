import { createGlobalStyle } from 'styled-components'
import MexicanTequila from '../assets/fonts/MexicanTequila.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'MexicanTequila';
        src: url(${MexicanTequila});
    }

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  width: 100%;
  font-size: 62.5%;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  box-sizing: border-box;
  background: red;
font-size: 62.5% !important;
min-width: 100vw;
	max-width: 100vw;
  background: rgb(24, 86, 98);
	background: radial-gradient(circle, rgba(24, 86, 98, 1) 12%, rgba(19, 25, 46, 1) 100%);
}

body * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 700px) {
  :root {
    font-size: 50%;
  }
}

.img-shadow {
  -webkit-filter: drop-shadow(5px 5px 5px #222222);
	filter: drop-shadow(5px 5px 5px #222222);
}

p,h1 {
z-index: 1;
}

.mt-4 {
  margin-top: 4rem;
}
`

export default GlobalStyle
