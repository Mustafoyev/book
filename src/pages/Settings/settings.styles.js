import styled from 'styled-components';
import Arrow from '../../assets/images/arrow-dovn.svg';

export const StyledSettingsWrapper = styled.div`
	padding: 154px 0 143px 0;
`;

export const StyledSettingsContent = styled.div`
	width: 708px;
	margin: 0 auto;
`;

export const StyledSettingsTitle = styled.h2`
	margin: 0;
	margin-bottom: 32px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #212121;
`;

export const StyledSettingsLangThemeWrapper = styled.div`
	padding-bottom: 40px;
	border-bottom: 2px solid #ecf0f3;
`;

export const StyledSettingsSelectWrapper = styled.div``;

export const StyledSettingsSelectTopText = styled.p`
	margin: 0;
	margin-bottom: 7px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 20px;
	color: #464e5f;
`;

export const StyledSettingsSelect = styled.select`
	position: relative;
	width: 100%;
	display: block;
	padding: 12px 20px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-image: url(${Arrow});
	background-repeat: no-repeat;
	background-position-x: 97%;
	background-position-y: 8px;
	background-color: #f3f6f9;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;

export const StyledSettingsSelectItem = styled.option`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #464e5f;
`;

export const StyledSettingsSelectBottomText = styled.p`
	margin: 0;
	margin-top: 3px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #b5b5c3;
	opacity: 0.8;
`;

export const StyledSettingsThemeText = styled.p`
	margin: 10px 0 5px 0;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 20px;
	color: #464e5f;
`;

export const StyledSettingsButton = styled.button`
	display: block;
	width: 142px;
	margin-top: 44px;
	margin-left: auto;
	padding: 12px 20px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	color: #ffffff;
	background-color: #152540;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;
