import styled from 'styled-components';
import { colors } from 'utils/styles';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 474px;
`;

export const TopFooter = styled.header`
  height: 87px;
  background-color: ${colors.pink};
`

export const IconWrapper = styled.div`
  height: 100%;
  width: 30%;
  margin: auto;
  text-align: center;
  color: white;
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
`;

