import styled from 'styled-components';
import { device, fontSize } from 'utils/styles';

export const ActivityPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;

  @media only screen and ${device.mobileL} {
    width: 80%;
    position: sticky;
    top: 10px;
    z-index: 2;
    
    input {
      width: 100%;
    }
  }
`;

export const ActivityWrapper = styled.div`
  margin-left: -5%;
  
  @media only screen and ${device.mobileL} {
    margin-left: 0;
  }
`;

export const ActivityContentWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-top: 2%;
  margin-bottom: 4%;
  width: 100%;
  justify-content: center;

  @media only screen and ${device.mobileL} {
    flex-flow: column;
    width: 100%;
  }

  & > figure {
    padding-top: 5.5%;
    margin-top: 0;
    width: 40%;
    
    @media only screen and ${device.mobileL} {
    width: 80%;
    }
  }
  
  .p-scrollpanel.p-component {
    height: 1000px;
    padding-top: 5.5%;
    width: 40%;
    padding-left: 3rem;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    
    @media only screen and ${device.mobileL} {
      margin: auto;
      width: 80%;
      border-left: 0;
      padding-left: 0;
      border-top: 2px solid rgba(0, 0, 0, 0.2);
      padding-top: 3rem;
    }
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


