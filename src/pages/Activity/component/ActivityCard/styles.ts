import styled from 'styled-components';
import { fontSize, screenSize } from 'utils/styles';

export const ActivityCardWrapper = styled.div`
    .p-card {
      .p-card-title {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        & > :last-child {
          padding: 15px 30px 0 0;
        }
      }

      .p-card-body {
        padding: 0 2%;
      }

      .p-card-content {
        padding: 0;

        & > p {
          margin: 0;

          &:first-child {
            font-size: ${fontSize.text};
            margin-bottom: 2%;
          }
        }
      }

      .p-card-footer {
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: end;
        align-items: center;
      }
    }
`;

export const Description = styled.div`
  
  .read-more-button {
    font-weight: bolder;
    margin-top: 2%;
    cursor: pointer;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  &:first-child{
    padding-left: 4%;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  ${window.innerWidth <= screenSize.mobileL ? `
    flex-flow: column;
    ` : `    
    flex-flow: row;    
    width: 50%;
  `}
  
`;

export const Review = styled.p`
  margin: 10% auto;
  font-size: ${fontSize.smallTitle};
`;

export const CommentNumberWrapper = styled.p`
  ${window.innerWidth <= screenSize.mobileL && `
    margin-top:0;
    `
  };
`;