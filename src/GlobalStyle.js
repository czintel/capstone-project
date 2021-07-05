import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

:root {
  --yellow: #F2C849;
  --purple: #A484E9;
  --red: #F4889A;
  --kummer: #31BFF3;
  --green: #79D45E;
  --gray-light: #cccccc;
  --gray: #a9a9a9;
  --gray-dark: #636363;
  --background-yellowish: #fffff7;
  --background-white: #fffcfd;
  --text-1: #897869;
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Dosis', sans-serif;
  }
 
  body {
    height: 100%;   
    line-height: 1.4;
    background-color: var(--background-yellowish);
    background-image: url("https://www.transparenttextures.com/patterns/notebook-dark.png");
    background-attachment: fixed;
    }
    `
