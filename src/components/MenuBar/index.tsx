import Logo from 'components/Logo';
import { MenuItemProps, menuItemsFromElements } from 'components/MenuItem';
import { Menubar as PRMenuBar } from 'primereact/menubar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuBarWrapper } from './styles';
import UserManagement from './UserManagement';

interface Props {
  children: Array<React.ReactElement<MenuItemProps>>,
}

const MenuBar: React.FunctionComponent<Props> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <MenuBarWrapper>
      <PRMenuBar
        model={menuItemsFromElements(children)}
        start={
          <Logo
            color={'blue'}
            size={'small'}
            onClick={() => navigate('/')}
          />
        }
        end={<UserManagement />}
      />
    </MenuBarWrapper>
  );
}

export default MenuBar;

