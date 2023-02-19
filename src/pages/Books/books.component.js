import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/header.component';
import { Hero } from '../../components/Hero/hero.component';
import {
	StyledBookCardWrapper,
	StyledBookCategory,
	StyledBookCategoryList,
	StyledBookCategoryTitle,
} from './books.tyles';
import axios from 'axios';
import { BookCart } from '../../components/BookCart/bookCart.component';
import { Tabs, Tab, Stack, Box, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Books = () => {
	const [dataBook, setDataBook] = useState([]);
	const [value, setValue] = useState(1);
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const handleChange = (evt) => {
		const tabValue = +evt.target.attributes.tabIndex.nodeValue;
		setValue(tabValue);
		axios
			.get('http://localhost:5000/book/genreId/' + tabValue)
			.then((res) => {
				if (res.status === 201) {
					setDataBook(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	const getGenre = () => {
		axios
			.get('http://localhost:5000/book/genreId/1')
			.then((res) => {
				if (res.status === 201) {
					setDataBook(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getGenre();
	}, []);

	return (
		<>
			<Header />
			<Hero setDataBook={setDataBook} />
			<StyledBookCategory
				style={
					mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
				}>
				<StyledBookCategoryTitle>
					{lang('menu.menuTitle')}
				</StyledBookCategoryTitle>
				<StyledBookCategoryList>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						textColor='#c9ac8c'
						centered
						sx={
							mode
								? {
										'& button.Mui-selected': {
											color: '#c9ac8c',
										},
								  }
								: {
										'& button.Mui-selected': {
											color: 'rgba(13, 13, 13, 0.5)',
										},
								  }
						}
						TabIndicatorProps={{
							style: {
								width: '0',
							},
						}}>
						<Tab
							sx={{
								fontFamily: 'Poppins',
								fontWeight: '400',
								fontSize: '18px',
								lineHeight: '27px',
								color: mode ? '#424242' : '#c9ac8c',
								textTransform: 'capitalize',
							}}
							value={1}
							tabIndex={1}
							label={lang('menu.menuLinkOne')}
							id={`simple-tab-${1}`}
						/>
						<Tab
							sx={{
								fontFamily: 'Poppins',
								fontWeight: '400',
								fontSize: '18px',
								lineHeight: '27px',
								color: mode ? '#424242' : '#c9ac8c',
								textTransform: 'capitalize',
							}}
							value={2}
							tabIndex={2}
							label={lang('menu.menuLinktwo')}
							id={`simple-tab-${2}`}
						/>
						<Tab
							sx={{
								fontFamily: 'Poppins',
								fontWeight: '400',
								fontSize: '18px',
								lineHeight: '27px',
								color: mode ? '#424242' : '#c9ac8c',
								textTransform: 'capitalize',
							}}
							value={3}
							tabIndex={3}
							label={lang('menu.menuLinkThree')}
							id={`simple-tab-${3}`}
						/>
						<Tab
							sx={{
								fontFamily: 'Poppins',
								fontWeight: '400',
								fontSize: '18px',
								lineHeight: '27px',
								color: mode ? '#424242' : '#c9ac8c',
								textTransform: 'capitalize',
							}}
							value={4}
							tabIndex={4}
							label={lang('menu.menuLinkFour')}
							id={`simple-tab-${4}`}
						/>
					</Tabs>
				</StyledBookCategoryList>
				{dataBook.length ? (
					<StyledBookCardWrapper>
						{dataBook.map((el) => (
							<BookCart
								key={el.id}
								el={el}
								value={value}
								index={el.id}
								role='tabpanel'
								hidden={value !== el.id}
							/>
						))}
					</StyledBookCardWrapper>
				) : (
					<Stack
						direction={'row'}
						spacing={3}
						sx={{ justifyContent: 'center' }}>
						<Box width={190} height={325} sx={{ borderRadius: '15px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={190}
									height={283}
									sx={{
										borderRadius: '15px',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
							</Box>
							<Box>
								<Skeleton
									variant='rounded'
									width={158}
									height={30}
									sx={{
										margin: '12px 0 6px 0',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
								<Skeleton
									variant='rounded'
									width={124}
									height={20}
									sx={{ backgroundColor: mode ? '#939292' : '' }}
								/>
							</Box>
						</Box>
						<Box width={190} height={325} sx={{ borderRadius: '15px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={190}
									height={283}
									sx={{
										borderRadius: '15px',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
							</Box>
							<Box>
								<Skeleton
									variant='rounded'
									width={158}
									height={30}
									sx={{
										margin: '12px 0 6px 0',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
								<Skeleton
									variant='rounded'
									width={124}
									height={20}
									sx={{ backgroundColor: mode ? '#939292' : '' }}
								/>
							</Box>
						</Box>
						<Box width={190} height={325} sx={{ borderRadius: '15px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={190}
									height={283}
									sx={{
										borderRadius: '15px',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
							</Box>
							<Box>
								<Skeleton
									variant='rounded'
									width={158}
									height={30}
									sx={{
										margin: '12px 0 6px 0',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
								<Skeleton
									variant='rounded'
									width={124}
									height={20}
									sx={{ backgroundColor: mode ? '#939292' : '' }}
								/>
							</Box>
						</Box>
						<Box width={190} height={325} sx={{ borderRadius: '15px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={190}
									height={283}
									sx={{
										borderRadius: '15px',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
							</Box>
							<Box>
								<Skeleton
									variant='rounded'
									width={158}
									height={30}
									sx={{
										margin: '12px 0 6px 0',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
								<Skeleton
									variant='rounded'
									width={124}
									height={20}
									sx={{ backgroundColor: mode ? '#939292' : '' }}
								/>
							</Box>
						</Box>
						<Box width={190} height={325} sx={{ borderRadius: '15px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={190}
									height={283}
									sx={{
										borderRadius: '15px',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
							</Box>
							<Box>
								<Skeleton
									variant='rounded'
									width={158}
									height={30}
									sx={{
										margin: '12px 0 6px 0',
										backgroundColor: mode ? '#939292' : '',
									}}
								/>
								<Skeleton
									variant='rounded'
									width={124}
									height={20}
									sx={{ backgroundColor: mode ? '#939292' : '' }}
								/>
							</Box>
						</Box>
					</Stack>
				)}
			</StyledBookCategory>
		</>
	);
};
