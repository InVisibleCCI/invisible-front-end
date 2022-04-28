import React from 'react';
import { LogoImg, LogoWrapper } from './styles';
import LogoWhite from './img/logo-blanc.png';
import LogoWhiteWithText from './img/logo-texte-blanc.png';
import LogoBlack from './img/logo-noir.png';
import LogoBlackWithText from './img/logo-texte-noir.png';
import LogoOrange from './img/logo-orange.png';
import LogoBlue from './img/logo-bleu.png';

type LogoColor = 'white' | 'black' | 'blue' | 'orange';

interface Props {
  onClick?: () => void,
  color: LogoColor,
  size?: 'small' | 'large',
  withText?: boolean
}

const imagesFromType: { [I in LogoColor]: { logo: string, logoWithText?: string } } = {
  white: {
    logo: LogoWhite,
    logoWithText: LogoWhiteWithText
  },
  black: {
    logo: LogoBlack,
    logoWithText: LogoBlackWithText
  },
  blue: {
    logo: LogoBlue
  },
  orange: {
    logo: LogoOrange
  }
};

const Logo: React.FunctionComponent<Props> = ({
  onClick,
  color,
  withText,
  size
}) => {
  return (
  <LogoWrapper onClick={onClick} size={size}>
    <LogoImg
      src={withText ? imagesFromType[color].logoWithText : imagesFromType[color].logo}
      alt={`Logo du site InVisible en ${color}`}
      size={size}
      withText
    />
  </LogoWrapper>
  );
}

export default Logo;
