import styled from 'styled-components';
import { colors } from 'utils/styles';

interface CardProps {
  size: 'small' | 'medium';
  color?: string
}

const cardColors = [
  colors.green,
  colors.blue,
  colors.orange,
  colors.flirt,
  colors.magenta
]

export const CardWrapper = styled.div<CardProps>`
  width: ${(props) => props.size === 'small' ? '40': '100'}%;
  height: ${(props) => props.size === 'small' ? '40': '100'}%;


  & > .p-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0 20px;
    border-radius: 20px;
    color: ${(props) => props.color ? colors.black : colors.textColorWhite};
    background-color: ${(props) => props.color ?? cardColors[Math.floor(Math.random()* cardColors.length)]};
  }
`;
