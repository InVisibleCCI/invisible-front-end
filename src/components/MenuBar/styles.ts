import styled from 'styled-components';
import { LogoWrapper } from 'components/Logo/styles';

export const MenuBarWrapper = styled.div`
  & > .p-menubar {
    display: flex;
    border: none;
    height: 111px;
<<<<<<< HEAD
    
    .p-menubar-button {
      position: absolute;
      right: 0;
      margin-right: 40px;

=======
    
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
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300

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
<<<<<<< HEAD
      padding: 0;
      width: 50%;
      font-size: 24px;
      margin: 0 auto;
      justify-content: space-between;

      .p-menuitem-link:focus {
=======
      width: 40%;
      font-size: 24px;
      margin: auto;
      justify-content: space-between;

      .p-menuitem-link {
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
        box-shadow: none;
      }
    }
    
    .p-menubar-end {
<<<<<<< HEAD
      width: 210px;
=======
      flex: 0;
      width: 200px;
>>>>>>> 4a1229bfee8e62bffc255ce9ac36fbbbfdf39300
      border: 2px solid black;
    }
  }
`;

export const EndTamer = styled.div`
  width: 20%;
`;
