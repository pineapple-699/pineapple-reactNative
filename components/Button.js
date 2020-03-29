import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../constants/Colors';

// // Types
// export type Props = {
//   /** Optional string that can be used to set the button value */
//   text?: string

//   /** Make button grow to 100% */
//   fluid?: boolean

//   /** Disable button */
//   disabled?: boolean

//   /** Focus button */
//   focus?: boolean

//   /** Button kind */
//   kind?: "default" | "primary"
// }

// Component
const Button = ({
  text,
  fluid,
  disabled,
  focus,
  children,
  kind
}) => (
  <StyledButton
    className={`
          ${fluid ? 'fluid' : ''} 
          ${disabled ? 'disabled' : ''} 
          ${kind || ''}
          ${focus ? 'focus' : ''}
        `}
  >
    {text || children}
  </StyledButton>
);

// Styles
const StyledButton = styled.button`
  background: ${theme.color.background};
  border-radius: 4px;
  border: none;
  color: ${theme.color.primary};
  // box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: ${theme.color.body};
  font-family: ${theme.font};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.1;
  margin: 0;
  padding: ${theme.space[3]};
  text-align: center;

  &.fluid {
    width: 100%;
  }

  &.disabled {
    color: ${theme.color.bodyLightest};
    opacity: 0.2;
    pointer-events: none;
  }

  &.focus {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
    // color: rgba(255, 255, 255, 0.8);
  }

  /* Primary styles */
  &.default {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    color: ${theme.color.primary};
  }

  &.default.focus {
    // color: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0 0 0 1px ${theme.color.primary} !important;
  }

  /* Primary styles */
  &.primary {
    background: ${theme.color.primary};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    color: #fff;
  }

  &.primary.focus {
    color: rgba(255, 255, 255, 0.8);
    background: ${theme.color.primaryDark} !important;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
  }

  
`;

export default Button;
