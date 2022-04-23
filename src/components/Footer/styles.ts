import styled from 'styled-components';
import { colors } from 'utils/styles';
import { LogoWrapper } from 'components/Logo/styles';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 474px;
  color: ${colors.white};

  ${LogoWrapper} {
    margin: -20px 0 0 auto;
    justify-content: center;
  }
`;

export const TopFooter = styled.div`
  height: 87px;
  background-color: ${colors.magenta};
`

export const IconWrapper = styled.div`
  height: 100%;
  width: 20%;
  margin: auto;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 43px;
`;

export const FooterInfo = styled.div`
  height:430px;
  background-color: black;
`;

export const FooterSection = styled.section`
  margin: auto;
  padding-top: 40px;
  max-width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  margin-bottom:40px;
`;

export const FooterColumn = styled.article`
  display: flex;
  flex-flow: column;
`;

export const FooterLink = styled.a`
  padding-top: 5px;
`;


export const BottomFooter = styled.footer`
  margin: 35px auto 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-around;
`;

export const BottomFooterLink = styled.a`
`;

