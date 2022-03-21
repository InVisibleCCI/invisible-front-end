import React from 'react';
import { FooterColumn, FooterInfo, FooterLink, FooterSection, FooterWrapper, Icon, IconWrapper, TopFooter } from './styles';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillTwitterSquare } from '@react-icons/all-files/ai/AiFillTwitterSquare';
import { useNavigate } from 'react-router-dom';

interface Props {
}

const Footer: React.FunctionComponent<Props> = ({}) => {

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
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>

          <FooterLink>
            Lorem Ipsum
          </FooterLink>
        </FooterColumn>
      </FooterSection>
    </FooterInfo>
  </FooterWrapper>
  );
}

export default Footer;