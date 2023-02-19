import styled from 'styled-components';
import bgImg from '../../assets/images/ornament.png';

export const StyledBookCategory = styled.div`
	padding: 0 100px 40px;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: right, center;
`;

export const StyledBookCategoryTitle = styled.h2`
	margin: 0;
	margin-bottom: 22px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	color: #c9ac8c;
`;

export const StyledBookCategoryList = styled.div`
	margin: 40px 0;
`;

export const StyledBookCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 40px;
`;
