import styled from 'styled-components';
import { colors } from 'utils/styles';

export const GalleriaWrapper = styled.figure`
  
  .p-galleria {
    
    .p-galleria-content .p-galleria-item-wrapper .p-galleria-item-container .p-galleria-item > img {
      height: 400px;
      width: 600px;
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
  border-radius: 24px;
  width: 100%;
  display: block;
`;