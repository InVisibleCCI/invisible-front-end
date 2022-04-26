import styled from 'styled-components';
import { fontSize, screenSize } from 'utils/styles';

export const ActivityPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  margin-top: 20px;
  ${window.innerWidth <= screenSize.mobileL ? `
    width: 400px;
  ` : `
    width: 915px;
  `}
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

export const ActivityWrapper = styled.div`
  
  ${window.innerWidth <= screenSize.mobileL ? `
  ` : `
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
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    padding-top: 3rem;

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


