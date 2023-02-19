import { Stack } from '@mui/material';
import {
	StyledInputBottomText,
	StyledInputTopText,
	StyledLastNameInput,
	StyledMyProfileForm,
	StyledMyProfileFormWrapper,
	StyledMyProfileImage,
	StyledMyProfileInfoTitle,
	StyledMyProfileInfoWrapper,
	StyledMyProfileSendButton,
	StyledMyProfileWrapper,
	StyledNameInput,
	StyledPhoneInput,
	StyledProfileLastNameInputWrapper,
	StyledProfileNameInputWrapper,
	StyledProfilePhoneInputWrapper,
	StyledUserImageInput,
	StyledUserImageInputWrapper,
	StyledUserImageLabel,
} from './myProfile.styles';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import FormData from 'form-data';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MyProfile = () => {
	const token = useSelector((state) => state.token.token);
	const user = useSelector((state) => state.user.user);
	const [image, setImage] = useState('');
	const firsNameRef = useRef();
	const lastNameRef = useRef();
	const phoneRef = useRef();
	const navigate = useNavigate();
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	async function handleFormSubmit(evt) {
		evt.preventDefault();
		const data = new FormData();

		data.append('first_name', firsNameRef.current.value);
		data.append('last_name', lastNameRef.current.value);
		data.append('phone', phoneRef.current.value);
		data.append('image', image, image.name);

		return await axios({
			method: 'put',
			url: 'http://localhost:5000/user/account',
			data: data,
			headers: {
				Authorization: token,
				'Content-Type': 'multipart/form-data',
			},
		})
			.then((res) => {
				if (res.status === 201) {
					firsNameRef.current.value = '';
					lastNameRef.current.value = '';
					phoneRef.current.value = '';
					setImage('');
					toast.success('Account edited!!!');
				}
			})
			.catch((err) => {
				console.log(err);
				toast.error('Promise error!!!');
			});
	}

	return (
		<StyledMyProfileWrapper
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<Button
				onClick={() => navigate(-1)}
				sx={{
					position: 'absolute',
					top: '100px',
					left: '60px',
					color: mode ? '#fff' : '#000',
				}}
				startIcon={<BiArrowBack color={mode ? '#fff' : '#000'} />}>
				{lang('myProfile.backBtn')}
			</Button>
			<StyledUserImageInputWrapper>
				<StyledUserImageLabel
					onChange={(evt) => setImage(evt.target.files[0])}
					htmlFor='user-image'
					style={
						mode
							? { backgroundColor: '#161616' }
							: { backgroundColor: '#F3F6F9' }
					}>
					<StyledUserImageInput type='file' id='user-image' />
					<MdOutlineAddAPhoto size={33} color='#464E5F' />
				</StyledUserImageLabel>
				<StyledMyProfileImage
					src={'http://localhost:5000/' + user.image}
					alt={user.first_name}
					width={175}
					height={175}
				/>
			</StyledUserImageInputWrapper>
			<StyledMyProfileInfoWrapper>
				<StyledMyProfileInfoTitle
					style={mode ? { color: '#DEDEDE' } : { color: '#212121' }}>
					{lang('myProfile.myTitle')}
				</StyledMyProfileInfoTitle>
				<StyledMyProfileForm onSubmit={handleFormSubmit}>
					<StyledMyProfileFormWrapper>
						<Stack spacing={2}>
							<StyledProfileNameInputWrapper>
								<StyledInputTopText
									style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
									{lang('myProfile.name')}
								</StyledInputTopText>
								<StyledNameInput
									ref={firsNameRef}
									type='text'
									placeholder='First name'
									defaultValue={user.first_name}
								/>
								<StyledInputBottomText>
									{lang('myProfile.nameInp')}
								</StyledInputBottomText>
							</StyledProfileNameInputWrapper>
							<StyledProfileLastNameInputWrapper>
								<StyledInputTopText
									style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
									{lang('myProfile.lastName')}
								</StyledInputTopText>
								<StyledLastNameInput
									ref={lastNameRef}
									type='text'
									placeholder='Last name'
									defaultValue={user.last_name}
								/>
								<StyledInputBottomText>
									{lang('myProfile.lastInp')}
								</StyledInputBottomText>
							</StyledProfileLastNameInputWrapper>
							<StyledProfilePhoneInputWrapper>
								<StyledInputTopText
									style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
									{lang('myProfile.phone')}
								</StyledInputTopText>
								<StyledPhoneInput
									ref={phoneRef}
									type='tel'
									placeholder='Phone'
									defaultValue={user.phone}
								/>
								<StyledInputBottomText>
									{lang('myProfile.phoneInp')}
								</StyledInputBottomText>
							</StyledProfilePhoneInputWrapper>
						</Stack>
					</StyledMyProfileFormWrapper>
					<StyledMyProfileSendButton
						type='submit'
						style={
							mode
								? { backgroundColor: '#F1F6FF', color: '#0D0D0D' }
								: { backgroundColor: '#152540', color: '#fff' }
						}>
						{lang('myProfile.myButton')}
					</StyledMyProfileSendButton>
				</StyledMyProfileForm>
			</StyledMyProfileInfoWrapper>
			<ToastContainer />
		</StyledMyProfileWrapper>
	);
};
