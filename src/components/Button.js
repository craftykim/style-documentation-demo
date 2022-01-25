import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: var(--color-background-primary);
  background-color: var(--color-interactive-default);
  font-family: var(--fonts-heading-m-font-family);
  font-weight: var(--fonts-heading-m-font-weight);
  border: none;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 1em;
  cursor: pointer;

  &:hover, &:focus, &:focus-visible {
    background-color: var(--color-interactive-hover-focus);
  }

  &:active {
    background-color: var(--color-interactive-active-pressed);
  }

  &:disabled {
    background-color: var(--color-interactive-disabled);
    cursor: not-allowed;
  }
`;

const Button = ({ children, disabledButton }) => {
  return (
    <StyledButton type="button" disabled={disabledButton ? true : false}>
      {children}
    </StyledButton>
  );
};

export default Button;