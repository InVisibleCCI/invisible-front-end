import React from 'react';
import { MenuBarWrapper } from './styles';
import { Menubar as PRMenuBar } from 'primereact/menubar';
import { MenuItemProps, menuItemsFromElements } from 'components/MenuItem';
import { useTranslation } from 'react-i18next';

interface Props {
  children: Array<React.ReactElement<MenuItemProps>>,
}

const MenuBar: React.FunctionComponent<Props> = ({children}) => {
  const { t } = useTranslation();
  return (
    <MenuBarWrapper>
      <PRMenuBar
        model={menuItemsFromElements(children)}
      />
    </MenuBarWrapper>
  );
}

export default MenuBar;

