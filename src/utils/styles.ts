import { createGlobalStyle } from 'styled-components';

export const colors = {
  pink: '#CF0063',
  pinkTwo: '',
  black: '#FFFFFF'
}

export const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto';
  }
`