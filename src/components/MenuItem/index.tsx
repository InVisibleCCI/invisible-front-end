import React from 'react';

export interface MenuItemProps {
  label?: string,
  icon?: string,
  url?: string,
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
  url: node.props.url,
})

export default MenuItem;


