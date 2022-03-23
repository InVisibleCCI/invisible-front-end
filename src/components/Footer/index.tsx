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
import { useTranslation } from 'react-i18next';
import Logo from 'components/Logo';

interface Props {
}

const Footer: React.FunctionComponent<Props> = ({}) => {

  const { t } = useTranslation();

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
            {t('activity.title')}
          </FooterLink>

          <FooterLink>
            {t('activity.category.accommodation.title')}
          </FooterLink>

          <FooterLink>
            {t('activity.category.restaurant.title')}
          </FooterLink>

          <FooterLink>
            {t('activity.category.cruise.title')}
          </FooterLink>

          <FooterLink>
            {t('activity.category.welfare.title')}
          </FooterLink>

          <FooterLink>
            {t('activity.category.art.title')}
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
        <BottomFooterLink>
          Mentions légales
        </BottomFooterLink>

        <BottomFooterLink>
          Conditions générales de ventes
        </BottomFooterLink>

        <BottomFooterLink>
          Politique de confidentialité
        </BottomFooterLink>
      </BottomFooter>
    </FooterInfo>
  </FooterWrapper>
  );
}

export default Footer;