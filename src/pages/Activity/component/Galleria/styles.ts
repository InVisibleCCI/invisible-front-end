import styled from 'styled-components';
import { colors, screenSize } from 'utils/styles';

export const GalleriaWrapper = styled.figure`
  
  .p-galleria {
    
    .p-galleria-content .p-galleria-item-wrapper .p-galleria-item-container .p-galleria-item > img {
      ${window.innerWidth <= screenSize.mobileL ? `
        height: 200px;
      ` : `
        min-height: 150px;
        min-width: 320px;
        max-height: 400px;
        max-width: 600px;
      `}
    }

    .p-galleria-indicators .p-galleria-indicator {
      & > button {
        background: none;
        border: 2px solid ${colors.black};
      }

      &.p-highlight button {
        background-color: ${colors.black};
      }
    }
  }
  
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  display: block;
`;