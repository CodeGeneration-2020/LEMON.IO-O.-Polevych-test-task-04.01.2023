import styled from 'styled-components';

export const StyledNumberButton = styled.button<{
  color: string;
  height?: string;
  isActive?: boolean;
}>`
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: ${({ height }) => height ?? '40px'};
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: white;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: 0.8s;

  :active {
    transform: translateY(4px);
  }
  :hover {
    transform: translateY(4px);
  }
`;
