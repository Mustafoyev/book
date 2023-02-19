import { Stack } from '@mui/system';
import registerImg from '../../assets/images/register.png';
import {
	StyledLeftContentImg,
	StyledRegisterForm,
	StyledRegisterLeftContent,
	StyledRegisterLink,
	StyledRegisterRightContent,
	StyledRegisterText,
	StyledRegisterTitle,
	StyledRegisterWrapper,
} from './register.styles';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../redux/token/tokenAction';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
	const [type, setType] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const mode = useSelector((state) => state.mode.mode);

	const schema = Yup.object({
		first_name: Yup.string().required('Required'),
		last_name: Yup.string().required('Required'),
		phone: Yup.string()
			.max(9, 'Phone number must not exceep 9 characters')
			.required('Required'),
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
			first_name: '',
			last_name: '',
			phone: '',
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	return (
		<StyledRegisterWrapper
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<StyledRegisterLeftContent>
				<StyledLeftContentImg
					src={registerImg}
					alt='Register'
					width={500}
					height={500}
				/>
			</StyledRegisterLeftContent>
			<StyledRegisterRightContent>
				<StyledRegisterTitle
					style={mode ? { color: '#fff' } : { color: '#000' }}>
					Sign up
				</StyledRegisterTitle>
				<StyledRegisterText
					style={mode ? { color: '#fff' } : { color: '#000' }}>
					Already have an account?{' '}
					<StyledRegisterLink to='/'>Sign in</StyledRegisterLink>
				</StyledRegisterText>
				<StyledRegisterForm
					onSubmit={handleSubmit((data) => {
						axios
							.post('http://localhost:5000/user/register', {
								first_name: data.first_name,
								last_name: data.last_name,
								phone: data.phone,
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
									navigate('/');
								}
							})
							.catch((err) => {
								toast.error('Promise error!!!');
								console.log(err);
							});
					})}>
					<Stack width={'330px'} spacing={3}>
						<TextField
							{...register('first_name')}
							helperText={errors.first_name?.message}
							error={errors.first_name ? true : false}
							type='text'
							label='Firs name'
							InputProps={
								mode
									? { style: { color: '#FFF' } }
									: { style: { color: '#000' } }
							}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<TextField
							{...register('last_name')}
							helperText={errors.last_name?.message}
							error={errors.last_name ? true : false}
							type='text'
							label='Last name'
							InputProps={
								mode
									? { style: { color: '#FFF' } }
									: { style: { color: '#000' } }
							}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<TextField
							{...register('phone')}
							helperText={errors.phone?.message}
							error={errors.phone ? true : false}
							type='tel'
							label='Phone'
							InputProps={
								mode
									? { style: { color: '#FFF' } }
									: { style: { color: '#000' } }
							}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<TextField
							{...register('email')}
							helperText={errors.email?.message}
							error={errors.email ? true : false}
							type='email'
							label='Email'
							InputProps={
								mode
									? { style: { color: '#FFF' } }
									: { style: { color: '#000' } }
							}
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
								style: { color: mode ? '#fff' : 'primary' },
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
				</StyledRegisterForm>
			</StyledRegisterRightContent>
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
		</StyledRegisterWrapper>
	);
};
