import styled from 'styled-components';
import { colors } from 'utils/styles';
<<<<<<< HEAD
import { LogoWrapper } from 'components/Logo/styles';
=======
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 474px;
<<<<<<< HEAD
  color: white;

  ${LogoWrapper} {
    margin: -20px 0 0 auto;
    justify-content: center;
  }
=======
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
`;

export const TopFooter = styled.header`
  height: 87px;
<<<<<<< HEAD
  background-color: ${colors.magenta};
=======
  background-color: ${colors.pink};
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
`

export const IconWrapper = styled.div`
  height: 100%;
<<<<<<< HEAD
  width: 35%;
  margin: auto;
  padding-top: 10px;
=======
  width: 30%;
  margin: auto;
  text-align: center;
  color: white;
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 43px;
`;

export const FooterInfo = styled.div`
  height: 387px;
  background-color: black;
`;

export const FooterSection = styled.section`
<<<<<<< HEAD
  margin: auto;
  padding-top: 40px;
  max-width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-around;
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
=======
  border: 2px solid white;
  padding: 20px;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterColumn = styled.article`
  width: 50%;
  display: flex;
`;

export const FooterLink = styled.a`
  color: white;
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
`;

