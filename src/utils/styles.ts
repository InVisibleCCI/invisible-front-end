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
  middleGrey:"#C2C2C2"
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
    scroll-behavior: smooth;
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
  mobileS: 321,
  mobileM: 376,
  mobileL: 426,
  tablet: 769,
  laptop: 1025,
  laptopL: 1441,
  desktop: 2561
}

export const device = {
  mobileS: `(max-width: ${screenSize.mobileS}px)`,
  mobileM: `(max-width: ${screenSize.mobileM}px)`,
  mobileL: `(max-width: ${screenSize.mobileL}px)`,
  tablet: `(max-width: ${screenSize.tablet}px)`,
  laptop: `(max-width: ${screenSize.laptop}px)`,
  laptopL: `(max-width: ${screenSize.laptopL}px)`,
  desktop: `(max-width: ${screenSize.desktop}px)`,
  desktopL: `(max-width: ${screenSize.desktop}px)`
};