import styled from 'styled-components';
import { LogoWrapper } from 'components/Logo/styles';

export const MenuBarWrapper = styled.div`
  & > .p-menubar {
    display: flex;
    border: none;
    height: 111px;
    
    .p-menubar-button {
      position: absolute;
      right: 0;
      margin-right: 40px;


      & > i {
        font-size: 28px;
      }
    }
    
    & > .p-menubar-start {
      width: 200px;

      ${LogoWrapper} {
        cursor: pointer;
      }
    }
    
    & > .p-menubar-root-list {
      width: 40%;
      font-size: 24px;
      margin: auto;
      justify-content: space-between;

      .p-menuitem-link {
        box-shadow: none;
      }
    }
    
    .p-menubar-end {
      flex: 0;
      width: 200px;
      border: 2px solid black;
    }
  }
`;

export const EndTamer = styled.div`
  width: 20%;
`;
