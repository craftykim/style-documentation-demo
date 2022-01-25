import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	color: ${({ disabled }) => disabled ? `var(--color-interactive-disabled)` : `var(--color-interactive-default)`};

	pointer-events: ${({ disabled }) => disabled ? `
		var(--color-interactive-disabled);
		pointer-events: none;
		` :
		`var(--color-interactive-default);
		pointer-events: default;
	`};

	&:hover, &:focus, &:focus-visible {
		color: var(--color-interactive-hover-focus);
		outline: none;
	}

	&:active{
		color: var(--color-interactive-active-pressed);
	}
`;

const CustomLink = ({ children, disabled }) => {
	return (
		<StyledLink to="/" disabled={disabled}>
    	{children}
  	</StyledLink>
	);
}

export default CustomLink;