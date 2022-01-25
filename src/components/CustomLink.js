import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Use destructuring shorthand in the styled component below so it is equivalent to:
// color: ${function(props){
// 	if(props.disabled){
// 		return "var(--color-interactive-disabled)";
// 	}
// 	return "var(--color-interactive-default)";
// }}

const StyledLink = styled(Link)`
	color: ${({ disabled }) => disabled ?
		`var(--color-interactive-disabled)`
		:
		`var(--color-interactive-default)`
	};

	pointer-events: ${({ disabled }) => disabled ?
		`var(--color-interactive-disabled);
		pointer-events: none;`
		:
		`var(--color-interactive-default);
		pointer-events: default;`
	};

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