import React from 'react';
<<<<<<< HEAD
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
=======
import { FooterColumn, FooterInfo, FooterLink, FooterSection, FooterWrapper, Icon, IconWrapper, TopFooter } from './styles';
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillTwitterSquare } from '@react-icons/all-files/ai/AiFillTwitterSquare';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
import Logo from 'components/Logo';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300

interface Props {
}

const Footer: React.FunctionComponent<Props> = ({}) => {

<<<<<<< HEAD
  const { t } = useTranslation();

=======
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
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
<<<<<<< HEAD
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
=======
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>
<<<<<<< HEAD
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
=======
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>
        </FooterColumn>
      </FooterSection>
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
    </FooterInfo>
  </FooterWrapper>
  );
}

export default Footer;