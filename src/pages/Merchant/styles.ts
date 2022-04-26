import styled from 'styled-components';

interface Zbel { }

interface MerchantLogoWrapperProps { }

export const MerchantLogoWrapper = styled.div<MerchantLogoWrapperProps>`
width: 112px;
  height: 112px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const MerchantLogo = styled.img<MerchantLogoWrapperProps>`
display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

export const MerchantCardWrapper = styled.div<Zbel>`
  display:flex;
  flex-grow:2;
`;

export const MerchantCardBottomWrapper = styled.div<Zbel>`
display:flex;
`;

