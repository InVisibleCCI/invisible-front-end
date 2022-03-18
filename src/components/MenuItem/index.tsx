import React from 'react';
import { PrimeIcons } from 'primereact/api';

export interface MenuItemProps {
  label?: string,
  icon?: string,
  url?: string,
  active?: boolean,
  onClick?: () => void,
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({children}) =>
  <>
    {children}
  </>;

export const menuItemsFromElements = (children: Array<React.ReactElement<MenuItemProps>>): Array<MenuItemProps> =>
  children.map(menuItemToComponent)


const menuItemToComponent = (node: {props: MenuItemProps}) => ({
  label: node.props.label,
  icon: node.props.icon,
  command: node.props.onClick,
  url: node.props.url,
})

export default MenuItem;


