import * as React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components/native';
import { theme } from '../constants/Colors';
import styled from 'styled-components';

const CustomButton = (props) => (
	<ButtonContainer>
		<ButtonText textColor={"fff"}>{props.text}</ButtonText>
	</ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: ${theme.color.primary};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: #fff;
	text-align: center;
`;


// color: ${props => props.textColor};