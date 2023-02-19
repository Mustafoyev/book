import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgImg from '../../assets/images/ornament.png';

export const StyledSingleWrapper = styled.div`
	padding: 20px 100px;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: right, center;
`;

export const StyledSingleInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledSingleImg = styled.img`
	display: block;
	width: 505px;
	height: 681px;
	border-radius: 20px;
`;

export const StyeldSingleAuthorInfoWrapper = styled.div`
	width: 671px;
`;

export const StyledSingleAuthorTitle = styled.h2`
	margin: 0;
	margin-bottom: 8px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;
`;

export const StyeldSingleAuthorText = styled.p`
	margin: 0;
	margin-bottom: 44px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(13, 13, 13, 0.8);
`;

export const StyledAuthorDeteWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledAuthorBirth = styled.div`
	margin-right: 16px;
`;

export const StyledAuthorBirthInfo = styled.span`
	display: block;
	margin-bottom: 10px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledAuthorBirthDay = styled.span`
	display: block;
	margin-bottom: 10px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const StyledAuthorBirthCountry = styled.span`
	display: block;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledAuthorMinus = styled.span`
	display: block;
	margin-right: 16px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const StyledAuthorDead = styled.div``;

export const StyledAuthorDeadInfo = styled.span`
	display: block;
	margin-bottom: 10px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledAuthorDeadDay = styled.span`
	display: block;
	margin-bottom: 10px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const StyledAuthorDeadCountry = styled.span`
	display: block;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledAuthorBooks = styled.div`
	margin-top: 100px;
`;

export const StyledAuthorLinkWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
`;

export const StyledAuthorSubtitle = styled.h3`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 31px;
	line-height: 46px;
	color: #d1b89d;
`;

export const StyledAuthorLink = styled(Link)`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-decoration: none;
	color: #0d0d0d;
`;

export const StyledBooksWrapper = styled.div``;
