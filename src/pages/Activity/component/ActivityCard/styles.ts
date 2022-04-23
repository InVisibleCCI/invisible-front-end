import styled from 'styled-components';

export const ActivityCardWrapper = styled.div`
    .p-card {
      .p-card-title {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        flex-direction: row;
        justify-content: end;
        align-items: center;
      }
    }
  }
`;

export const Description = styled.p`
`;

export const ReviewWrapper = styled.p`
  font-size: 24px;
  padding-right: 20px;
`;

export const CommentNumberWrapper = styled.p`
`;