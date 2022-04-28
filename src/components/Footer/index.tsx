import React from 'react';
import {
  BottomFooter,
  BottomFooterLink,
  FooterColumn,
  FooterInfo,
  FooterLink,
  FooterSection,
  FooterWrapper,
  Icon,
  IconWrapper,
  TopFooter
} from './styles';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillTwitterSquare } from '@react-icons/all-files/ai/AiFillTwitterSquare';
import Logo from 'components/Logo';

const Footer: React.FunctionComponent = () => {

  return (
    <FooterWrapper>
    <TopFooter>
      <IconWrapper>
        <Icon>
          {<AiFillTwitterSquare />}
        </Icon>
        <Icon>
          {<AiFillInstagram />}
        </Icon>
        <Icon>
          {<AiFillFacebook />}
        </Icon>
        <Icon>
          {<AiFillLinkedin />}
        </Icon>
      </IconWrapper>
    </TopFooter>

    <FooterInfo>
  

      <Logo
        color={'white'}
        withText
        size={'small'}
      />

      <BottomFooter>
        <BottomFooterLink url={'/legal-notices'}>
          Mentions légales
        </BottomFooterLink>
        <BottomFooterLink url={'/privacy-policy'}>
          Politique de confidentialité
        </BottomFooterLink>
      </BottomFooter>
    </FooterInfo>
  </FooterWrapper>
  );
}

export default Footer;