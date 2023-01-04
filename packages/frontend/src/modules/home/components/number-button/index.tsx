import React from 'react';

import { StyledNumberButton } from './index.styled';

interface IProps {
  color: string;
  value: number | string;
  height?: string;
  onClickHandler: () => void;
  isActive: boolean;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

const NumberButton = ({
  color,
  value,
  height,
  onClickHandler,
  isActive,
  onMouseLeave,
  onMouseEnter,
}: IProps) => (
  <StyledNumberButton
    isActive={isActive}
    color={color}
    height={height}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClickHandler}>
    {value}
  </StyledNumberButton>
);
export default NumberButton;
