import styled from 'styled-components';

interface LogoProps {
  size?: 'small' | 'large';
  withText?: boolean;
}

export const LogoWrapper = styled.figure<LogoProps>`
  display: flex;
`;

export const LogoImg = styled.img<LogoProps>`
  max-width: ${(props) => props.size === 'small' ? 50 : 100}%;
  height: auto;
  display: flex;
`;
