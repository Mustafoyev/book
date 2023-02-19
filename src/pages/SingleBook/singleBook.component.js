import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/header.component';
import { BsArrowDown } from 'react-icons/bs';
import {
	StyledAuthorLink,
	StyledAuthorLinkWrapper,
	StyledAuthorSubtitle,
	StyledSingleBookAllInfo,
	StyledSingleBookAllInfoBio,
	StyledSingleBookAllInfoBorder,
	StyledSingleBookAllInfoLinks,
	StyledSingleBookAllInfoText,
	StyledSingleBookAuthorBooks,
	StyledSingleBookInfo,
	StyledSingleBookInfoDate,
	StyledSingleBookInfoDateText,
	StyledSingleBookInfoDateValue,
	StyledSingleBookInfoImg,
	StyledSingleBookInfoPages,
	StyledSingleBookInfoPagesText,
	StyledSingleBookInfoPagesValue,
	StyledSingleBookInfoPrice,
	StyledSingleBookInfoPriceText,
	StyledSingleBookInfoPriceValue,
	StyledSingleBookInfoTitle,
	StyledSingleBookInfoWrapper,
	StyledSingleBookWrapper,
} from './singleBook.styles';
import axios from 'axios';
import Slider from 'react-slick';
import { BookCart } from '../../components/BookCart/bookCart.component';
import { useTranslation } from 'react-i18next';

export const SingleBook = () => {
	const token = useSelector((state) => state.token.token);
	const { id, author_id } = useParams();
	const [bookData, setBookData] = useState([]);
	const [authorBooks, setAuthorBooks] = useState([]);
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/book/bookId/' + id, {
				headers: {
					Authorization: token,
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				if (res.status === 201) {
					setBookData(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:5000/author/books/' + author_id, {
				headers: {
					Authorization: token,
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setAuthorBooks(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<StyledSingleBookWrapper
				style={
					mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
				}>
				<StyledSingleBookInfoWrapper>
					<StyledSingleBookInfoImg
						src={'http://localhost:5000/' + bookData.image}
						alt={bookData.title}
						width={505}
						height={681}
					/>
					<StyledSingleBookInfo>
						<StyledSingleBookInfoTitle>
							{bookData.title}
						</StyledSingleBookInfoTitle>
						<StyledSingleBookInfoPages>
							<StyledSingleBookInfoPagesText
								style={
									mode
										? { color: 'rgba(255, 255, 255, 0.6)' }
										: { color: 'rgba(13, 13, 13, 0.6)' }
								}>
								{lang('singleBook.pages')}
							</StyledSingleBookInfoPagesText>
							<StyledSingleBookInfoPagesValue
								style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}>
								{bookData.page} {lang('singleBook.page')}
							</StyledSingleBookInfoPagesValue>
						</StyledSingleBookInfoPages>
						<StyledSingleBookInfoDate>
							<StyledSingleBookInfoDateText
								style={
									mode
										? { color: 'rgba(255, 255, 255, 0.6)' }
										: { color: 'rgba(13, 13, 13, 0.6)' }
								}>
								{lang('singleBook.dateOfPublish')}
							</StyledSingleBookInfoDateText>
							<StyledSingleBookInfoDateValue
								style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}>
								{bookData.year} {lang('singleBook.date')}
							</StyledSingleBookInfoDateValue>
						</StyledSingleBookInfoDate>
						<StyledSingleBookInfoPrice>
							<StyledSingleBookInfoPriceText
								style={
									mode
										? { color: 'rgba(255, 255, 255, 0.6)' }
										: { color: 'rgba(13, 13, 13, 0.6)' }
								}>
								{lang('singleBook.price')}
							</StyledSingleBookInfoPriceText>
							<StyledSingleBookInfoPriceValue
								style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}>
								${bookData.price}
							</StyledSingleBookInfoPriceValue>
						</StyledSingleBookInfoPrice>
						<StyledSingleBookAllInfo>
							<StyledSingleBookAllInfoText>
								{lang('singleBook.info')}
							</StyledSingleBookAllInfoText>
							<BsArrowDown color={mode ? '#fff' : '#000'} />
							<StyledSingleBookAllInfoBorder></StyledSingleBookAllInfoBorder>
						</StyledSingleBookAllInfo>
						<StyledSingleBookAllInfoBio
							style={
								mode
									? { color: 'rgba(255, 255, 255, 0.8)' }
									: { color: 'rgba(13, 13, 13, 0.8)' }
							}>
							{bookData.description}
						</StyledSingleBookAllInfoBio>
					</StyledSingleBookInfo>
				</StyledSingleBookInfoWrapper>
				<StyledSingleBookAllInfoLinks>
					<StyledAuthorLinkWrapper>
						<StyledAuthorSubtitle>
							{lang('singleAuthor.authorWork')}
						</StyledAuthorSubtitle>
						<StyledAuthorLink
							style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}
							to='/books'>
							{lang('singleAuthor.all')}
						</StyledAuthorLink>
					</StyledAuthorLinkWrapper>
					<StyledSingleBookAuthorBooks>
						{authorBooks.length ? (
							<Slider {...settings}>
								{authorBooks.map((el) => (
									<BookCart key={el.id} el={el} />
								))}
							</Slider>
						) : (
							''
						)}
					</StyledSingleBookAuthorBooks>
				</StyledSingleBookAllInfoLinks>
			</StyledSingleBookWrapper>
		</>
	);
};
