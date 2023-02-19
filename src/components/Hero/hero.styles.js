import styled from 'styled-components';
import BgHero from '../../assets/images/bg-hero.png';

export const StyledHero = styled.div`
	padding: 20px 100px 200px 100px;
`;

export const StyledHeroList = styled.div`
	position: relative;
	margin: 0 auto;
	width: 1262px;
`;

export const StyledHeroItem = styled.div`
	width: 100%;
	height: 347px;
	padding: 40px 86px 40px;
	background-image: url(${BgHero});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	border-radius: 21px;
`;

export const StyledHeroItemText = styled.p`
	width: 337px;
	margin: 0;
	font-family: 'Rotterburg Stylish FREE';
	font-style: normal;
	font-weight: 400;
	font-size: 61px;
	line-height: 67px;
	color: #d1b89d;
`;

export const StyledHeroSearchWrapper = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	bottom: -25%;
	margin: 0 auto;
	padding: 29px 73px;
	width: 1030px;
	background-color: #ffffff;
	box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
`;

export const StyledSearchTitle = styled.p`
	margin: 0;
	margin-bottom: 10px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	color: #d1b89d;
`;

export const StyledSerachForm = styled.form``;

export const StyledSearchInput = styled.input`
	margin-right: 14px;
	width: 710px;
	padding: 12px 27px;
	background-color: #f5f5f5;
	border-radius: 15px;
	border: none;

	&::placeholder {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: rgba(13, 13, 13, 0.3);
	}
`;
