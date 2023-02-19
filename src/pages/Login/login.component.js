import {
	StyledLeftContentImg,
	StyledLoginForm,
	StyledLoginLeftContent,
	StyledLoginLink,
	StyledLoginRightContent,
	StyledLoginText,
	StyledLoginTitle,
	StyledLoginWrapper,
} from './login.styles';
import loginImg from '../../assets/images/login.png';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { addToken } from '../../redux/token/tokenAction';

export const Login = () => {
	const [type, setType] = useState(false);
	const dispatch = useDispatch();
	const mode = useSelector((state) => state.mode.mode);

	const schema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string()
			.min(6, 'Password must not be less than 6 characters')
			.max(9, 'Password must not exceed 9 characters')
			.required('Required'),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	return (
		<StyledLoginWrapper
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<StyledLoginLeftContent>
				<StyledLeftContentImg
					src={loginImg}
					alt='Login'
					width={500}
					height={500}
				/>
			</StyledLoginLeftContent>
			<StyledLoginRightContent>
				<StyledLoginTitle
					style={mode ? { color: '#fff' } : { color: '#000000' }}>
					Sign in
				</StyledLoginTitle>
				<StyledLoginText
					style={mode ? { color: '#fff' } : { color: '#000000' }}>
					Already have an account?{' '}
					<StyledLoginLink to='/register'>Sign up</StyledLoginLink>
				</StyledLoginText>
				<StyledLoginForm
					onSubmit={handleSubmit((data) => {
						axios
							.post('http://localhost:5000/user/login', {
								email: data.email,
								password: data.password,
							})
							.then((res) => {
								toast.loading('Pending!!!');
								if (res.status === 201) {
									toast.success('Promise resolved!!!');
									reset();
									localStorage.setItem('token', res.data.token);
									dispatch(addToken(res.data.token));
								}
							})
							.catch((err) => {
								toast.error('Email or password is incorrect');
								console.log(err);
							});
					})}>
					<Stack width={'330px'} spacing={3}>
						<TextField
							{...register('email')}
							helperText={errors.email?.message}
							error={errors.email ? true : false}
							type='email'
							label='Email'
							InputProps={{
								style: {
									color: mode ? '#fff' : '#000',
								},
							}}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<TextField
							{...register('password')}
							helperText={errors.password?.message}
							error={errors.password ? true : false}
							type={type ? 'text' : 'password'}
							label='Password'
							InputProps={{
								style: {
									color: mode ? '#fff' : '#000',
								},
								endAdornment: (
									<InputAdornment onClick={() => setType(!type)} position='end'>
										{type ? (
											<AiFillEyeInvisible
												style={{ cursor: 'pointer' }}
												size='28px'
												color={mode ? '#fff' : '#172B4D'}
											/>
										) : (
											<AiFillEye
												style={{ cursor: 'pointer' }}
												size='28px'
												color={mode ? '#fff' : '#172B4D'}
											/>
										)}
									</InputAdornment>
								),
							}}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<Button
							type='submit'
							sx={{
								fontFamily: 'Red Hat Display',
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '200%',
								color: mode ? '#000' : '#FFFFFF',
								backgroundColor: mode ? '#fff' : '#152540',
								borderRadius: '99px',
							}}
							variant='contained'
							size='large'>
							Next step
						</Button>
					</Stack>
				</StyledLoginForm>
			</StyledLoginRightContent>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<ToastContainer />
		</StyledLoginWrapper>
	);
};
