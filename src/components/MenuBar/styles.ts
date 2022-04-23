import { LogoWrapper } from 'components/Logo/styles';
import styled from 'styled-components';
import { fontSize } from 'utils/styles';

export const MenuBarWrapper = styled.div`
  & > .p-menubar {
    display: flex;
    border: none;
    height: 80px;
    
    .p-menubar-button {
      margin-right: 40px;

      & > i {
        font-size: ${fontSize.mediumTitle};
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
      font-size: ${fontSize.smallTitle};
      margin: 0 auto;
      justify-content: space-between;

      .p-menuitem-link:focus {
        box-shadow: none;
      }
    }
  }
`;

export const EndTamer = styled.div`
  width: 20%;
`;
