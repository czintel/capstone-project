import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
  }
 
  body {
    height: 100%;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.4;
    background: #f1ece5;
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;}
`
