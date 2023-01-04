import styled from 'styled-components';

export const StyledActionButton = styled.button<{
  color: string;
  height?: string;
  width?: string;
  isActive?: boolean;
}>`
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width ?? '40px'};
  height: ${({ height }) => height ?? '80px'};
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: white;

  cursor: pointer;
  outline: none;

  :active {
    transform: translateY(4px);
  }
  :hover {
    transform: translateY(4px);
  }
`;
