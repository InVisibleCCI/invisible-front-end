import styled from 'styled-components';

interface LogoProps {
  size?: 'small' | 'large';
}

export const LogoWrapper = styled.figure<LogoProps>`
  width: ${(props) => props.size === 'small' ? 50 : 100}%;
  height: ${(props) => props.size === 'small' ? 50 : 100}%;
  margin: auto;
`;

export const LogoImg = styled.img<LogoProps>`
  display: flex;
  width: 100%;
`;
