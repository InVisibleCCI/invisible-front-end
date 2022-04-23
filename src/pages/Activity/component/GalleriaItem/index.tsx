import React from 'react';

export interface GalleriaItemProps {
  src: string,
  alt: string,
}

const GalleriaItem: React.FunctionComponent<GalleriaItemProps> = ({ children  }) =>
  <>
    {children}
  </>;

export const galleriaItemsFromElements = (children: Array<React.ReactElement<GalleriaItemProps>>): Array<GalleriaItemProps> =>
  children.map(galleriaItemToComponent);

const galleriaItemToComponent = (node: {props: GalleriaItemProps}) => ({
  src: node.props.src,
  alt: node.props.alt
});

export default GalleriaItem;