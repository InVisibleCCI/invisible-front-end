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
      <FooterSection>
        <FooterColumn>
          <FooterLink>
            Rechercher une activité
          </FooterLink>

          <FooterLink>
            Centre d'aide
          </FooterLink>

          <FooterLink>
            Mon compte
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>
            {'Activités'}
          </FooterLink>

          <FooterLink>
            {'Hébergements'}
          </FooterLink>

          <FooterLink>
            {'Restaurants'}
          </FooterLink>

          <FooterLink>
            {'Croisières'}
          </FooterLink>

          <FooterLink>
            {'Bien-être'}
          </FooterLink>

          <FooterLink>
            {'Arts et culture'}
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>
            A propos
          </FooterLink>

          <FooterLink>
            Contact
          </FooterLink>

          <FooterLink>
            L' équipe
          </FooterLink>

          <FooterLink>
            Blog
          </FooterLink>

        </FooterColumn>
      </FooterSection>

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