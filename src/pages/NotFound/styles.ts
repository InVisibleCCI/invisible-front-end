import styled from 'styled-components';
import { colors } from 'utils/styles';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 84.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const NotFoundTitle = styled.h1`
  margin: 0;
  color: ${colors.pink};
  height: 50%;
  font-size: 200px;
  letter-spacing: 1rem;
`;

export const NotFoundTextWrapper = styled.article`
  color: ${colors.pink};

  font-size: 50px;
  text-align: center;
`;

export const NotFoundText = styled.p`
`;
