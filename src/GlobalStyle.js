import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
 
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.4;
    background: #f6f6eb;
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;}
`
