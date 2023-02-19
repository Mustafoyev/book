import styled from 'styled-components';
import bgImg from '../../assets/images/Rectangle1.png';
import { Link } from 'react-router-dom';

export const StyledLoginWrapper = styled.div`
	display: flex;
	height: 100vh;
`;

export const StyledLoginLeftContent = styled.div`
	width: 50%;
	padding: 100px 40px;
	background-image: url(${bgImg});
`;

export const StyledLeftContentImg = styled.img`
	display: block;
	margin: 0 auto;
`;

export const StyledLoginRightContent = styled.div`
	flex-grow: 1;
	margin: auto 0;
	padding: 10px 136px;
`;

export const StyledLoginTitle = styled.h2`
	margin: 0;
	margin-bottom: 10px;
	font-family: 'Arial Black';
	font-style: normal;
	font-weight: 900;
	font-size: 36px;
	line-height: 51px;
	color: #000000;
`;

export const StyledLoginText = styled.p`
	margin: 0;
	margin-bottom: 21px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: #000000;
`;

export const StyledLoginLink = styled(Link)`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: #549ff9;
	text-decoration: none;
`;

export const StyledLoginForm = styled.form``;
