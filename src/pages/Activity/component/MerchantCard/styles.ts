import styled from 'styled-components';
import { colors, device, fontSize, screenSize } from 'utils/styles';

export const MerchantCardWrapper = styled.div`
  cursor: pointer;
  margin-top: 10%;
  color: ${colors.textColor}
`;

export const TitleWrapper = styled.span`
  min-height: 10px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  margin-top: -80px;
  min-height: 60px;
`

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: baseline;

  @media only screen and ${device.mobileL} {
    flex-flow: column;

  }
`;

export const FooterWrapper = styled.div`
  color: ${colors.textColorWhite};
  display: flex;
  justify-content: end;
`;

export const SocialNetworkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: -20px;
  width: 30%;
`;