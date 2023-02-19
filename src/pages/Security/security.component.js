import { Button } from '@mui/material';
import {
	StyledSecurityContent,
	StyledSecurutyForm,
	StyledSecurutyFormInpWrapper,
	StyledSecurutyFormSubmitter,
	StyledSecurutyInput,
	StyledSecurutyInputBottomText,
	StyledSecurutyInputTopText,
	StyledSecurutyTitle,
	StyledSecurutyWrapper,
} from './security.styles';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export const Security = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.user);
	const token = useSelector((state) => state.token.token);
	const emailRef = useRef();
	const currentPasswordRef = useRef();
	const newPasswordRef = useRef();
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		axios
			.put('http://localhost:5000/user/secutiry', {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				data: {
					email: emailRef.current.value,
					currentPassword: currentPasswordRef.current.value,
					newPassword: newPasswordRef.current.value,
				},
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<StyledSecurutyWrapper
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
			<StyledSecurityContent>
				<StyledSecurutyTitle
					style={mode ? { color: '#fff' } : { color: '#212121' }}>
					{lang('securityPage.secTitle')}
				</StyledSecurutyTitle>
				<StyledSecurutyForm onSubmit={handleFormSubmit}>
					<StyledSecurutyFormInpWrapper>
						<StyledSecurutyInputTopText
							style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
							{lang('securityPage.email')}
						</StyledSecurutyInputTopText>
						<StyledSecurutyInput
							ref={emailRef}
							type='email'
							placeholder='Email'
							defaultValue={user.email}
						/>
						<StyledSecurutyInputBottomText>
							{lang('securityPage.emailInp')}
						</StyledSecurutyInputBottomText>
					</StyledSecurutyFormInpWrapper>
					<StyledSecurutyFormInpWrapper>
						<StyledSecurutyInputTopText
							style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
							{lang('securityPage.password')}
						</StyledSecurutyInputTopText>
						<StyledSecurutyInput
							ref={currentPasswordRef}
							type='password'
							placeholder={lang('securityPage.password')}
						/>
						<StyledSecurutyInputBottomText>
							{lang('securityPage.passwordInp')}
						</StyledSecurutyInputBottomText>
					</StyledSecurutyFormInpWrapper>
					<StyledSecurutyFormInpWrapper>
						<StyledSecurutyInputTopText
							style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
							{lang('securityPage.newPassword')}
						</StyledSecurutyInputTopText>
						<StyledSecurutyInput
							ref={newPasswordRef}
							type='password'
							placeholder={lang('securityPage.newPassword')}
						/>
						<StyledSecurutyInputBottomText>
							{lang('securityPage.newPasswordInp')}
						</StyledSecurutyInputBottomText>
					</StyledSecurutyFormInpWrapper>
					<StyledSecurutyFormSubmitter
						type='submit'
						style={
							mode
								? { backgroundColor: '#F1F6FF', color: '#0D0D0D' }
								: { backgroundColor: '#152540', color: '#fff' }
						}>
						{lang('myProfile.myButton')}
					</StyledSecurutyFormSubmitter>
				</StyledSecurutyForm>
			</StyledSecurityContent>
		</StyledSecurutyWrapper>
	);
};
