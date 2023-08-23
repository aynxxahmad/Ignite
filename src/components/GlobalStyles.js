import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    :root{
        font-size:62.5%;
    }
    /* Background styles */
/* Background styles */
body {
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #151515;
}

`


export default GlobalStyles;