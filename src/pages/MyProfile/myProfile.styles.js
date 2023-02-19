import styled from 'styled-components';

export const StyledMyProfileWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 80px 100px 40px;
`;

export const StyledUserImageInputWrapper = styled.div`
	position: relative;
	width: 175px;
	height: 175px;
`;

export const StyledMyProfileImage = styled.img`
	display: block;
	width: 175px;
	height: 175px;
	border-radius: 50%;
`;

export const StyledUserImageLabel = styled.label`
	position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	padding: 12px 8px;
	background-color: #f3f6f9;
	border-radius: 8px;
	cursor: pointer;
`;

export const StyledUserImageInput = styled.input`
	display: none;
`;

export const StyledMyProfileInfoWrapper = styled.div`
	padding: 50px 100px 0;
`;

export const StyledMyProfileInfoTitle = styled.h2`
	margin: 0;
	margin-bottom: 32px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: #212121;
`;

export const StyledMyProfileFormWrapper = styled.div`
	width: 708px;
	padding-bottom: 26px;
	border-bottom: 2px solid #ecf0f3;
`;

export const StyledMyProfileForm = styled.form`
	display: block;
	width: 708px;
`;

export const StyledProfileNameInputWrapper = styled.div``;

export const StyledInputTopText = styled.p`
	margin: 0;
	margin-bottom: 7px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 20px;
	color: #464e5f;
`;

export const StyledNameInput = styled.input`
	width: 100%;
	padding: 12px 20px;
	border: none;
	background-color: #f3f6f9;
	border-radius: 4px;

	&::placeholder {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #464e5f;
	}
`;

export const StyledInputBottomText = styled.p`
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

export const StyledProfileLastNameInputWrapper = styled.div``;

export const StyledLastNameInput = styled.input`
	width: 100%;
	padding: 12px 20px;
	border: none;
	background-color: #f3f6f9;
	border-radius: 4px;

	&::placeholder {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #464e5f;
	}
`;

export const StyledProfilePhoneInputWrapper = styled.div``;

export const StyledPhoneInput = styled.input`
	width: 40%;
	padding: 12px 20px;
	border: none;
	background-color: #f3f6f9;
	border-radius: 4px;

	&::placeholder {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: #464e5f;
	}
`;

export const StyledMyProfileSendButton = styled.button`
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
