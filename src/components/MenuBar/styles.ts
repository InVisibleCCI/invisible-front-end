import { LogoWrapper } from 'components/Logo/styles';
import styled from 'styled-components';

export const MenuBarWrapper = styled.div`
  & > .p-menubar {
    top: 0;
    position: sticky;
    height: 111px;
    border: 2px solid black;
    border-collapse: collapse;
    
    & > .p-menubar-start {
      margin-left: 96px;
      width: 200px;

      ${LogoWrapper} {
        cursor: pointer;
      }
    }
    
    & > .p-menubar-root-list {
      font-size: 24px;
      margin: auto;
      width: 35%;
      justify-content: space-between;
      text-align: center;
    }
    
    .p-menubar-end {
      border: 2px solid black;
    }
  }
`;
