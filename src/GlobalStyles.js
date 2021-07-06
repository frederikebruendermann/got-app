import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
}

:root{
  --light-grey: #A09B9B;
  --white: #FFFFFF;
  --black: #393636;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  font-weight: 200;
  background-color: white;
  font-size: 12px;

;
}
input,
button,
textarea, 
p {
  font-size: inherit;
  font-weight: 100;
  font-size: 15px;
  color: var(--black);

}

h1{
  display: grid;
  justify-content: center;
  color: var(--black);
  font-size: 25px;
  line-height: 2.5;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 200;
}

h2{
  display: grid;
  justify-content: start;
  color: var(--black);
  font-size: 15px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 200;
}


`

export default GlobalStyle
