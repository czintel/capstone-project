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
    background-color: #fffff7;
    background-image: url("https://www.transparenttextures.com/patterns/notebook-dark.png")
    }
    `
