import styled from 'styled-components';
import { colors } from 'utils/styles';

export const MerchantCardWrapper = styled.div`
  padding-top: 50px;
  color: ${colors.textColor}
`;

export const TitleWrapper = styled.div`
  height: 10px;
  padding: 0;
`;

export const BodyWrapper = styled.div`
  height: 60px;
`

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FooterWrapper = styled.div`
  height: 50px;
  color: ${colors.textColorWhite};
  display: flex;
  justify-content: end;
`;

export const SocialNetworkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const SocialNetwork = styled.a`
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.pink};
  border-radius: 80%;
`;