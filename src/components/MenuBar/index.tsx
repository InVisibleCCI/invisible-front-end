import React from 'react';
import { MenuBarWrapper } from './styles';
import { Menubar as PRMenuBar } from 'primereact/menubar';
import { MenuItemProps, menuItemsFromElements } from 'components/MenuItem';
import { useTranslation } from 'react-i18next';
import Logo from 'components/Logo';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: Array<React.ReactElement<MenuItemProps>>,
}

const MenuBar: React.FunctionComponent<Props> = ({children}) => {
  const { t } = useTranslation();
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
        end={
          <div>

          </div>
        }
      />
    </MenuBarWrapper>
  );
}

export default MenuBar;

