import { createGlobalStyle } from 'styled-components';

import variables from './variables.ts';

const { primaryFont } = variables.fonts;

const GlobalStyle = createGlobalStyle`
  // _reset
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar { 
    display: none; 
  }

  button{
    outline: none;
  }

  // _base
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: ${primaryFont};
  }

  .main-container{
    position: relative;
  }

`;

export default GlobalStyle;
