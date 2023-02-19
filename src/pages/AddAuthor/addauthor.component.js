import { Stack } from '@mui/system';
import {
	StyledAddAthoreWrapper,
	StyledAddAuthorForm,
	StyledAddAuthorImage,
	StyledAddAuthorImageInput,
	StyledAddAuthorInputes,
	StyledAddAuthorTitle,
	StyledInputText,
	StyledInputWrapper,
} from './addauthor.styles';
import { IoMdAdd } from 'react-icons/io';
import { Button, MenuItem, TextField } from '@mui/material';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const AddAuthor = () => {
	const token = useSelector((state) => state.token.token);
	const navigate = useNavigate();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const dateBirthRef = useRef();
	const dateDeathRef = useRef();
	const countryRef = useRef();
	const genreRef = useRef();
	const bioRef = useRef();
	const [drag, setDrag] = useState(false);
	const [img, setImg] = useState('');
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const dragStartHandler = (evt) => {
		evt.preventDefault();
		setDrag(true);
	};

	const dragLeaveHandler = (evt) => {
		evt.preventDefault();
		setDrag(false);
	};

	const onDropHandler = (evt) => {
		evt.preventDefault();
		let files = evt.dataTransfer.files[0];
		setImg(files);
		setDrag(false);
	};

	async function handleFormSubmit(evt) {
		evt.preventDefault();
		const data = new FormData();

		data.append('first_name', firstNameRef.current.value);
		data.append('last_name', lastNameRef.current.value);
		data.append('date_of_birth', dateBirthRef.current.value);
		data.append('date_of_death', dateDeathRef.current.value);
		data.append('country', countryRef.current.value);
		data.append('genre_id', genreRef.current.value);
		data.append('bio', bioRef.current.value);
		data.append('image', img, img.name);

		return await axios({
			method: 'post',
			url: 'http://localhost:5000/author',
			data: data,
			headers: {
				Authorization: token,
				'Content-Type': 'multipart/form-data',
			},
		})
			.then((res) => {
				if (res.status === 201) {
					firstNameRef.current.value = '';
					lastNameRef.current.value = '';
					dateBirthRef.current.value = '';
					dateDeathRef.current.value = '';
					countryRef.current.value = '';
					bioRef.current.value = '';
					setImg('');
					toast.success('Author added!!!');
				}
			})
			.catch((err) => {
				console.log(err);
				toast.error('Promise error!!!');
			});
	}

	return (
		<StyledAddAthoreWrapper>
			<StyledAddAuthorImage
				style={
					mode
						? { backgroundColor: '#1B1B1B' }
						: { backgroundColor: 'rgba(243, 243, 243, 0.93)' }
				}>
				<Button
					onClick={() => navigate(-1)}
					sx={{
						position: 'absolute',
						left: '60px',
						top: '60px',
						color: mode ? '#fff' : '#000',
					}}
					startIcon={<BiArrowBack color={mode ? '#fff' : '#000'} />}>
					{lang('myProfile.backBtn')}
				</Button>
				<StyledInputWrapper
					htmlFor='download'
					onChange={(evt) => setImg(evt.target.files[0])}
					onDragStart={(evt) => dragStartHandler(evt)}
					onDragLeave={(evt) => dragLeaveHandler(evt)}
					onDragOver={(evt) => dragStartHandler(evt)}
					onDrop={(evt) => onDropHandler(evt)}
					style={
						mode
							? {
									backgroundColor: '#4D4D4D',
									border: '1px dashet rgba(255, 255, 255, 0.3)',
							  }
							: {
									backgroundColor: '#f8f8f8',
									border: '1px dashet rgba(0, 0, 0, 0.3)',
							  }
					}>
					<IoMdAdd
						style={
							mode
								? {
										display: 'block',
										margin: '0 auto',
										color: '#fff',
										opacity: '0.3',
								  }
								: { display: 'block', margin: '0 auto', opacity: '0.3' }
						}
						size={52}
					/>
					<StyledInputText style={mode ? { color: '#fff' } : { color: '#000' }}>
						{lang('addAuthor.imageInp')}
					</StyledInputText>
					<StyledAddAuthorImageInput type='file' id='download' />
				</StyledInputWrapper>
			</StyledAddAuthorImage>
			<StyledAddAuthorInputes
				style={
					mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
				}>
				<StyledAddAuthorTitle
					style={mode ? { color: '#fff' } : { color: '#000' }}>
					{lang('addAuthor.title')}
				</StyledAddAuthorTitle>
				<StyledAddAuthorForm onSubmit={handleFormSubmit}>
					<Stack spacing={2}>
						<TextField
							inputRef={firstNameRef}
							type='text'
							label={lang('addAuthor.nameInp')}
							InputProps={
								mode
									? {
											style: {
												color: '#FFF',
											},
									  }
									: { style: { color: '#000' } }
							}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}
						/>
						<TextField
							inputRef={lastNameRef}
							type='text'
							label={lang('addAuthor.lastInp')}
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
							inputRef={dateBirthRef}
							type='text'
							label={lang('addAuthor.birth')}
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
							inputRef={dateDeathRef}
							type='text'
							label={lang('addAuthor.death')}
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
							inputRef={countryRef}
							type='text'
							label={lang('addAuthor.country')}
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
							inputRef={genreRef}
							select
							label={lang('addAuthor.genre')}
							InputProps={
								mode
									? { style: { color: '#FFF' } }
									: { style: { color: '#000' } }
							}
							InputLabelProps={
								mode
									? { style: { color: '#fff' } }
									: { style: { color: 'primary' } }
							}>
							<MenuItem value='1'>{lang('menu.menuLinkOne')}</MenuItem>
							<MenuItem value='2'>{lang('menu.menuLinktwo')}</MenuItem>
							<MenuItem value='3'>{lang('menu.menuLinkThree')}</MenuItem>
							<MenuItem value='4'>{lang('menu.menuLinkFour')}</MenuItem>
						</TextField>
						<TextField
							inputRef={bioRef}
							multiline
							label={lang('addAuthor.bio')}
							rows={4}
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
						<Button
							sx={{
								padding: '8px',
								backgroundColor: mode ? '#FFFFFF' : '#152540',
								color: mode ? '#000' : '#FFFFFF',
								borderRadius: '99px',
							}}
							type='submit'
							variant='contained'>
							{lang('addAuthor.button')}
						</Button>
					</Stack>
				</StyledAddAuthorForm>
			</StyledAddAuthorInputes>
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
		</StyledAddAthoreWrapper>
	);
};
