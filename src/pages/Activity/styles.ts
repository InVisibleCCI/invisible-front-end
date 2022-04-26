import styled from 'styled-components';

export const ActivityWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ActivityContentWrapper = styled.section`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
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
    height: 1000px;
  }
`;

export const ActivityInfo = styled.article`
`;

export const CommentWrapper = styled.section`
  border-radius: 20px;
  margin-top: 50px;
  padding: 5px;
  
  h3 {
    font-size: 20px
  }
`;


