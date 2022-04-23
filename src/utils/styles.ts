import { createGlobalStyle } from 'styled-components';

export const cardColor = {
  pink: '#FF7E7E',
  flirt: '#A02074',
  magenta: '#CF0063',
  blue: '#2F789D',
  lightBlue: '#06C7F2',
  darkBlue: '#5B53AE',
  purple: '#7F20A0',
  green: '#20A091',
  orange: '#EF9935',
}

export const colors = {
  textColor: '#000000',
  lightgray:"#FAFAFA",
  pink: '#FF7E7E',
  flirt: '#A02074',
  magenta: '#BF3879',
  blue: '#2F789D',
  lightBlue: '#06C7F2',
  darkBlue: '#5B53AE',
  purple: '#7F20A0',
  green: '#20A091',
  orange: '#EF9935',
  pinkHover : '#FF8C7E',
  textColorWhite: '#FFFFFF',
  white: '#FFFFFF',
  grey: '#EFEFEF',
  black: '#000000',
}

export const fontSize = {
  longText: '16px',
  text: '18px',
  tinyTitle: '20px',
  smallTitle: '24px',
  mediumTitle: '30px',
  largeTitle: '36px',
}

export const GlobalStyles = createGlobalStyle`
  html, body #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto';
    font-size: ${fontSize.text};
    color: ${colors.textColor};

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat Alternates';
    }
    
    h1 {
      font-size: ${fontSize.largeTitle};
    }
    
    h2 {
      font-size: ${fontSize.mediumTitle};
    }
    
    h3 {
      font-size: ${fontSize.smallTitle};
    }
    
    h4 {
      font-size: ${fontSize.tinyTitle};
    }
    
    h5 {
      font-size: ${fontSize.text};
    }
    
    h6 {
      font-size: ${fontSize.longText};
    }
  }
`

export const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`
};