import styled from 'styled-components';
import { colors } from 'utils/styles';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.magenta};
`;

export const NotFoundTitle = styled.h1`
  margin: 0;
  height: 50%;
  min-font-size: 24px;
  font-size: 200px;
  letter-spacing: 1rem;
`;

export const NotFoundTextWrapper = styled.article`
  font-size: 50px;
  text-align: center;
`;

export const NotFoundText = styled.p`
`;
