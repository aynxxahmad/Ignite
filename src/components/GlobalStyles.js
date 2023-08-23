import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

        //scrollbar 
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.7) transparent;

        ::-webkit-scrollbar{
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb{
            background-color: rgba(0,0,0,0.8);
            border-radius: 15px;
            border: transparent;
        }
    }
    :root{
        font-size:62.5%;
    }
body {
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #151515;
}

`


export default GlobalStyles;