import styled from 'styled-components';
import { colors, fontSize } from 'utils/styles';

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
        padding: 0 5px;
      }

      .p-card-content {
        padding: 0;

        & > p {
          margin: 0;

          &:first-child {
            font-size: 18px;
            margin-bottom: 10px;
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

export const Description = styled.p`
  
  .read-more-button {
    font-weight: bolder;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
  
  &:first-child{
    padding-left: 20px;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const Review = styled.p`
  font-size: 24px;
  padding-right: 20px;
`;

export const CommentNumberWrapper = styled.p`
`;