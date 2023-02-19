import { Hero } from '../../components/Hero/hero.component';
import { Header } from '../../components/Header/header.component';
import {
	StyledHomeCardWrapper,
	StyledHomeCategory,
	StyledHomeCategoryList,
	StyledHomeCategoryTitle,
} from './home.styles';
import axios from 'axios';
import { AuthorCart } from '../../components/AuthorCart/authorCart.component';
import { useEffect, useState } from 'react';
import { Tabs, Tab, Stack, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Skeleton from '@mui/material/Skeleton';

export const Home = () => {
	const [data, setData] = useState([]);
	const [value, setValue] = useState(1);
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const handleChange = (evt) => {
		const tabValue = +evt.target.attributes.tabIndex.nodeValue;
		setValue(tabValue);
		axios
			.get('http://localhost:5000/author/genreId/' + tabValue)
			.then((res) => {
				if (res.status === 201) {
					setData(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	const getGenre = () => {
		axios
			.get('http://localhost:5000/author/genreId/1')
			.then((res) => {
				if (res.status === 201) {
					setData(res.data);
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
			<Hero setData={setData} />
			<StyledHomeCategory
				style={
					mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
				}>
				<StyledHomeCategoryTitle>
					{lang('menu.menuTitle')}
				</StyledHomeCategoryTitle>
				<StyledHomeCategoryList>
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
				</StyledHomeCategoryList>

				{data.length ? (
					<StyledHomeCardWrapper>
						{data.map((el) => (
							<AuthorCart
								key={el.id}
								el={el}
								value={value}
								index={el.id}
								role='tabpanel'
								hidden={value !== el.id}
							/>
						))}
					</StyledHomeCardWrapper>
				) : (
					<Stack
						direction={'row'}
						spacing={3}
						sx={{ justifyContent: 'center' }}>
						<Box width={295} height={365} sx={{ borderRadius: '22px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={295}
									height={224}
									sx={{
										borderRadius: '22px 22px 0 0',
										backgroundColor: mode ? '#DCDCDC' : '',
									}}
								/>
							</Box>
							<Box
								sx={{
									padding: '12px 90px 63px 16px',
									backgroundColor: '#F5F5F5',
									borderRadius: '0 0 22px 22px',
								}}>
								<Skeleton
									variant='rectangular'
									width={189}
									height={30}
									sx={{ marginBottom: '6px' }}
								/>
								<Skeleton variant='rounded' width={78} height={20} />
							</Box>
						</Box>
						<Box width={295} height={365} sx={{ borderRadius: '22px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={295}
									height={224}
									sx={{
										borderRadius: '22px 22px 0 0',
										backgroundColor: mode ? '#DCDCDC' : '',
									}}
								/>
							</Box>
							<Box
								sx={{
									padding: '12px 90px 63px 16px',
									backgroundColor: '#F5F5F5',
									borderRadius: '0 0 22px 22px',
								}}>
								<Skeleton
									variant='rectangular'
									width={189}
									height={30}
									sx={{ marginBottom: '6px' }}
								/>
								<Skeleton variant='rounded' width={78} height={20} />
							</Box>
						</Box>
						<Box width={295} height={365} sx={{ borderRadius: '22px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={295}
									height={224}
									sx={{
										borderRadius: '22px 22px 0 0',
										backgroundColor: mode ? '#DCDCDC' : '',
									}}
								/>
							</Box>
							<Box
								sx={{
									padding: '12px 90px 63px 16px',
									backgroundColor: '#F5F5F5',
									borderRadius: '0 0 22px 22px',
								}}>
								<Skeleton
									variant='rectangular'
									width={189}
									height={30}
									sx={{ marginBottom: '6px' }}
								/>
								<Skeleton variant='rounded' width={78} height={20} />
							</Box>
						</Box>
						<Box width={295} height={365} sx={{ borderRadius: '22px' }}>
							<Box>
								<Skeleton
									variant='image'
									width={295}
									height={224}
									sx={{
										borderRadius: '22px 22px 0 0',
										backgroundColor: mode ? '#DCDCDC' : '',
									}}
								/>
							</Box>
							<Box
								sx={{
									padding: '12px 90px 63px 16px',
									backgroundColor: '#F5F5F5',
									borderRadius: '0 0 22px 22px',
								}}>
								<Skeleton
									variant='rectangular'
									width={189}
									height={30}
									sx={{ marginBottom: '6px' }}
								/>
								<Skeleton variant='rounded' width={78} height={20} />
							</Box>
						</Box>
					</Stack>
				)}
			</StyledHomeCategory>
		</>
	);
};
