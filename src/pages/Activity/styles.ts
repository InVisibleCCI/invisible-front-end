import styled from 'styled-components';
import { fontSize, screenSize } from 'utils/styles';

export const ActivityWrapper = styled.div`
  ${window.innerWidth <= screenSize.mobileL ? `
  ` : `
    input {
    margin-left: 7%;
  }
  
  margin-left: -5%;
  `}
  
`;

export const ActivityContentWrapper = styled.section`
  ${window.innerWidth <= screenSize.mobileL ? `
    display: flex;
    flex-flow: column;
    width: 80%;
  ` : `
    display: flex;
    flex-flow: row wrap;
  `}
  margin-top: 2%;
  margin-bottom: 4%;
  width: 100%;
  justify-content: center;

  & > figure {
    padding-top: 5.5%;
    margin-top: 0;
    ${window.innerWidth <= screenSize.mobileL ? `
    width: 80%;
  ` : `
    width: 40%;
  `}
  }
  
  .p-scrollpanel.p-component {
    ${window.innerWidth <= screenSize.mobileL ? `
    margin: auto;
    width: 80%;
  ` : `
    padding-top: 5.5%;
    width: 40%;
    padding-left: 3rem;
    
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  `}
  }
`;

export const ActivityInfo = styled.article`
`;

export const CommentWrapper = styled.section`
  margin-top: 15%;
  height: 200px;
  
  h3 {
    font-size: ${fontSize.tinyTitle}
  }
`;


