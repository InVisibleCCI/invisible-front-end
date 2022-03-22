import { createGlobalStyle } from 'styled-components';

export const colors = {
  textColor: '#FFFFFF',
  pink: '#FF7E7E',
  flirt: '#A02074',
  magenta: '#CF0063',
  blue: '#2F789D',
  lightBlue: '#06C7F2',
  darkBlue: '#5B53AE',
  purple: '#7F20A0',
  green: '#20A091',
  orange: '#EF9935',
  black: '#FFFFFF'
}

export const GlobalStyles = createGlobalStyle`
  html, body #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto';
    font-size: 16px;
    color: ${colors.textColor};

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat Alternates';
    }
  }
`