import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBookCartWrapper = styled.div`
	width: 190px;
	max-height: 352px;
`;

export const StyledBookCartLink = styled(Link)`
	display: block;
	width: 100%;
	height: 100%;
	text-decoration: none;
`;

export const StyledBookImg = styled.img`
	display: block;
	width: 190px;
	height: 283px;
	border-radius: 15px;
`;

export const StyledBookTitle = styled.h3`
	margin: 12px 0 6px 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #000000;
`;

export const StyledBookText = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(13, 13, 13, 0.6);
`;
