import React from 'react';
import styled from 'styled-components';

const StyledPaletteBlock = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 2px;
  color: ${({ textColor }) => textColor};
  padding: 1rem;
  margin-bottom: 0.25rem;
`;

const PaletteBlock = ({ children, color, textColor }) => {
  return (
  <StyledPaletteBlock color={color} textColor={textColor}>
    {children}
  </StyledPaletteBlock>
  );
}

export default PaletteBlock;
