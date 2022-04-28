import React from 'react';
import { CardWrapper } from './styles';
import { Card as PRCard } from 'primereact/card'

interface Props {
  size: 'small' | 'medium',
  color?: string,
  header?: React.ReactElement,
  title?: React.ReactElement,
  children?: React.ReactElement,
  footer?: React.ReactElement,
}

const Card: React.FunctionComponent<Props> = ({
  size,
  color,
  header,
  title,
  children,
  footer,
}) => {

  return (
    <CardWrapper size={size} color={color}>
      <PRCard
        header={header}
        title={title}
        children={children}
        footer={footer}
      />
  </CardWrapper>
  );
}
export default Card;