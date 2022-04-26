import styled from 'styled-components';
import { colors, fontSize, screenSize } from 'utils/styles';

export const MerchantCardWrapper = styled.div`
  margin-top: 10%;
  color: ${colors.textColor}
`;

export const TitleWrapper = styled.span`
  min-height: 10px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const PictureWrapper = styled.figure`
  width: 15%;
`;

export const Img = styled.img`
  position: absolute;
  border-radius: 100%;
  flex-flow: column;

  ${window.innerWidth <= screenSize.mobileL ? `
    margin-top: -15px;
    width: 80px;
    height: 80px;
  ` : `
    margin-top: -10px;
    width: 120px;
    height: 120px;
  `}
`;

export const BodyWrapper = styled.div`
  margin-top: -40px;
  min-height: 60px;
`

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: baseline;

  ${window.innerWidth <= screenSize.mobileL ? `
    flex-flow: column;
  ` : `
  `}
`;

export const FooterWrapper = styled.div`
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
  font-size: ${fontSize.mediumTitle};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.pink};
  border-radius: 80%;
`;