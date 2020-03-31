import * as React from 'react';
import styled from 'styled-components/native';
import { theme } from '../constants/Colors';

// Component
const PineappleButton = ({
  fluid, disabled, focus, primary, blank, onPress, text
}) => (
  <StyledButton
    fluid={fluid}
    disabled={disabled}
    focus={focus}

    primary={primary}
    blank={blank}
    onPress={onPress}
  >
    <ButtonText
      primary={primary}
      blank={blank}
    >
      {text}
    </ButtonText>
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity`
  background: ${theme.color.background};
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  
  margin: 0;
  padding: ${theme.space[3]};

  ${({ fluid }) => fluid && `
    width: 100%;
  `}

  ${({ disabled }) => disabled && `
    color: ${theme.color.bodyLightest};
    opacity: 0.2;
  `}

  ${({ focus }) => focus && `
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1); !important;
  `}

  /* Default styles */

  ${({ blank }) => blank && `
    background: ${theme.color.background};
    color: rgba(255, 255, 255, 1) !important;
  `}

  &.default.focus {
    box-shadow: 0px 0px 1px ${theme.color.primary} !important;
  }

  /* Primary styles */
  ${({ primary }) => primary && `
    background: ${theme.color.primary};
    color: rgba(255, 255, 255, 1) !important;
  `}

  &.primary.focus {
    color: rgba(255, 255, 255, 0.8);
    background: ${theme.color.primaryDark} !important;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1) !important;
  }
`;

const ButtonText = styled.Text`
  color: ${theme.color.primary};
  font-family: ${theme.font};
  font-size: 15px;
  font-weight: 600;
  text-align: center;

  ${({ blank }) => blank && `
    color: rgba(0, 0, 0, 1) !important;
  `}

  ${({ primary }) => primary && `
    color: rgba(255, 255, 255, 1) !important;
  `}

  

`;

export default PineappleButton;
