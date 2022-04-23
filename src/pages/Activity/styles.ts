import styled from 'styled-components';
import { colors } from 'utils/styles';

export const ActivityWrapper = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 100vh;
`;

export const ActivityContentWrapper = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & > figure {
    padding-top: 80px;
    margin-top: 0;
    width: 40%;
  }
  
  .p-scrollpanel.p-component {
    padding-top: 80px;
    width: 40%;
    padding-left: 2.5rem;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const ActivityInfo = styled.article`
`;

export const CommentWrapper = styled.article`
`;


