import styled from 'styled-components';
import bgRight from '../../assets/images/card-top-right.svg';
import bgLeft from '../../assets/images/card-bottom-left.svg';
import { Link } from 'react-router-dom';

export const StyledCartWrapper = styled.div`
	width: 295px;
	height: 365px;
	background-color: #f5f5f5;
	border-radius: 22px;
	overflow: hidden;
`;

export const StyledCartLink = styled(Link)`
	width: 100%;
	height: 100%;
	text-decoration: none;
`;

export const StyledCartImg = styled.img`
	display: block;
	width: 295px;
	height: 224px;
	border-radius: 22px 22px 0 0;
`;

export const StyledCartContent = styled.div`
	position: relative;
	padding: 12px 90px 60px 16px;

	&::before {
		position: absolute;
		bottom: -25px;
		left: 0;
		width: 124px;
		height: 124px;
		background-image: url(${bgLeft});
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: left, bottom;
		content: '';
	}

	&::after {
		position: absolute;
		top: -20px;
		right: -10px;
		width: 100px;
		height: 180px;
		background-image: url(${bgRight});
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: right, top;
		content: '';
	}
`;

export const StyledCartName = styled.p`
	margin: 0;
	margin-bottom: 6px;
	width: 100%;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	color: #000000;
`;

export const StyledCartDate = styled.span`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(0, 0, 0, 0.6);
`;
