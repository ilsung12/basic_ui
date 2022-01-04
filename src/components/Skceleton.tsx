import React, { useMemo } from 'react';
import styled from '@emotion/styled/macro';
import { keyframes, css } from '@emotion/react';

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const pulseKeyframe = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }

`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`;

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`}
  ${({ rounded }) => rounded && `border-radius: 8px`}
  ${({ circle }) => circle && `border-radius: 50%`}
  ${({ animation }) => animation && pulseAnimation}
  ${({ width, height }) => (width || height) && `display: block`}
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skceleton: React.FC<Props> = ({
  width,
  height,
  circle,
  rounded,
  count,
  unit = 'px',
  animation = true,
  color = '#eee',
  style,
}) => {
  // count 숫자만큼의 길이인 어레이를 생성해주고, 그 어레이를 하이푼으로 다시 조인해주었다.
  const content = useMemo(
    () => [...Array({ length: count })].map(() => '-').join(''),
    [count]
  );

  return (
    <Base
      width={width}
      height={height}
      circle={circle}
      rounded={rounded}
      unit={unit}
      animation={animation}
      color={color}
      style={style}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skceleton;
