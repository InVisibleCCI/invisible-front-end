import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  order: 1;
  flex-direction: column;
  align-content: flex-start;

  @media (max-width : 500px){
    width: 100%;
}
@media (max-width : 1200px){
    width: 100%;
}

`