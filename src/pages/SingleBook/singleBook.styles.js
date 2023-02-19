import styled from 'styled-components';
import bgImg from '../../assets/images/ornament.png';
import { Link } from 'react-router-dom';

export const StyledSingleBookWrapper = styled.div`
	padding: 20px 100px;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: right, center;
`;

export const StyledSingleBookInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledSingleBookInfoImg = styled.img`
	display: block;
	width: 505px;
	height: 681px;
	border-radius: 20px;
`;

export const StyledSingleBookInfo = styled.div`
	width: 671px;
`;

export const StyledSingleBookInfoTitle = styled.h2`
	margin: 0;
	margin-bottom: 12px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;
`;

export const StyledSingleBookInfoPages = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
`;

export const StyledSingleBookInfoPagesText = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledSingleBookInfoPagesValue = styled.span`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #0d0d0d;
`;

export const StyledSingleBookInfoDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
`;

export const StyledSingleBookInfoDateText = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledSingleBookInfoDateValue = styled.span`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #0d0d0d;
`;

export const StyledSingleBookInfoPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const StyledSingleBookInfoPriceText = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: rgba(13, 13, 13, 0.6);
`;

export const StyledSingleBookInfoPriceValue = styled.span`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #0d0d0d;
`;

export const StyledSingleBookAllInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const StyledSingleBookAllInfoText = styled.p`
	margin: 0;
	margin-right: 11px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #d1b89d;
`;

export const StyledSingleBookAllInfoBorder = styled.span`
	display: block;
	width: 500px;
	margin-left: 19px;
	border-bottom: 1px solid rgba(209, 184, 157, 0.6);
`;

export const StyledSingleBookAllInfoBio = styled.p`
	margin: 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: rgba(13, 13, 13, 0.8);
`;

export const StyledSingleBookAllInfoLinks = styled.div`
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

export const StyledSingleBookAuthorBooks = styled.div``;
