import styled from 'styled-components';

export const Box = styled.div<{
  margin?: string;
  padding?: string;
  justify?: string;
  align?: string;
  changeDirection?: boolean;
  wrap?: string;
  width?: string;
}>`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  justify-content: ${({ justify }) => (justify ? justify : 'normal')};
  align-items: ${({ align }) => (align ? align : 'normal')};
  flex-direction: ${({ changeDirection }) =>
    !changeDirection ? 'row' : 'column'};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'wrap')};
  width: ${({ width }) => (width ? width : 'auto')};
`;
