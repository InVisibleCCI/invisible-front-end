import styled from 'styled-components';
import { LogoWrapper } from 'components/Logo/styles';

export const MenuBarWrapper = styled.div`
  & > .p-menubar {
    display: flex;
    border: none;
    height: 111px;
    
    .p-menubar-button {
      margin-right: 40px;

      & > i {
        font-size: 28px;
      }
    }
    
    & > .p-menubar-start {
      ${LogoWrapper} {
        cursor: pointer;
      }
    }
    
    & > .p-menubar-root-list {
      padding: 0;
      width: 50%;
      font-size: 24px;
      margin: 0 auto;
      justify-content: space-between;

      .p-menuitem-link:focus {
        box-shadow: none;
      }
    }
    
    .p-menubar-end {
      width: 210px;
      border: 2px solid black;
    }
  }
`;

export const EndTamer = styled.div`
  width: 20%;
`;
