import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/header.component';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
	StyeldSingleAuthorInfoWrapper,
	StyeldSingleAuthorText,
	StyledAuthorBirth,
	StyledAuthorBirthCountry,
	StyledAuthorBirthDay,
	StyledAuthorBirthInfo,
	StyledAuthorBooks,
	StyledAuthorDead,
	StyledAuthorDeadCountry,
	StyledAuthorDeadDay,
	StyledAuthorDeadInfo,
	StyledAuthorDeteWrapper,
	StyledAuthorLink,
	StyledAuthorLinkWrapper,
	StyledAuthorMinus,
	StyledAuthorSubtitle,
	StyledBooksWrapper,
	StyledSingleAuthorTitle,
	StyledSingleImg,
	StyledSingleInfoWrapper,
	StyledSingleWrapper,
} from './singleAuthor.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BookCart } from '../../components/BookCart/bookCart.component';
import { useTranslation } from 'react-i18next';

export const SingleAuthor = () => {
	const { id } = useParams();
	const token = useSelector((state) => state.token.token);
	const [authorData, setAuthorData] = useState([]);
	const [bookData, setBookData] = useState([]);
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
			.get('http://localhost:5000/author/authorId/' + id, {
				headers: {
					Authorization: token,
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setAuthorData(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:5000/author/books/' + id, {
				headers: {
					Authorization: token,
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setBookData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<StyledSingleWrapper
				style={
					mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
				}>
				<StyledSingleInfoWrapper>
					<StyledSingleImg
						src={'http://localhost:5000/' + authorData.image}
						alt={authorData.first_name}
						width={505}
						height={681}
					/>
					<StyeldSingleAuthorInfoWrapper>
						<StyledSingleAuthorTitle>
							{authorData.first_name + ' ' + authorData.last_name}
						</StyledSingleAuthorTitle>
						<StyeldSingleAuthorText
							style={
								mode
									? { color: 'rgba(255, 255, 255, 0.8)' }
									: { color: 'rgba(13, 13, 13, 0.8)' }
							}>
							{authorData.bio}
						</StyeldSingleAuthorText>
						<StyledAuthorDeteWrapper>
							<StyledAuthorBirth>
								<StyledAuthorBirthInfo
									style={
										mode
											? { color: 'rgba(255, 255, 255, 0.6)' }
											: { color: 'rgba(13, 13, 13, 0.6)' }
									}>
									{lang('singleAuthor.birth')}
								</StyledAuthorBirthInfo>
								<StyledAuthorBirthDay>
									{authorData.date_of_birth}
								</StyledAuthorBirthDay>
								<StyledAuthorBirthCountry
									style={
										mode
											? { color: 'rgba(255, 255, 255, 0.6)' }
											: { color: 'rgba(13, 13, 13, 0.6)' }
									}>
									{authorData.country}
								</StyledAuthorBirthCountry>
							</StyledAuthorBirth>
							<StyledAuthorMinus>-</StyledAuthorMinus>
							<StyledAuthorDead>
								<StyledAuthorDeadInfo
									style={
										mode
											? { color: 'rgba(255, 255, 255, 0.6)' }
											: { color: 'rgba(13, 13, 13, 0.6)' }
									}>
									{lang('singleAuthor.death')}
								</StyledAuthorDeadInfo>
								<StyledAuthorDeadDay>
									{authorData.date_of_death}
								</StyledAuthorDeadDay>
								<StyledAuthorDeadCountry
									style={
										mode
											? { color: 'rgba(255, 255, 255, 0.6)' }
											: { color: 'rgba(13, 13, 13, 0.6)' }
									}>
									{authorData.country}
								</StyledAuthorDeadCountry>
							</StyledAuthorDead>
						</StyledAuthorDeteWrapper>
					</StyeldSingleAuthorInfoWrapper>
				</StyledSingleInfoWrapper>
				<StyledAuthorBooks>
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
					<StyledBooksWrapper>
						{bookData.length ? (
							<Slider {...settings}>
								{bookData.map((el) => (
									<BookCart key={el.id} el={el} />
								))}
							</Slider>
						) : (
							''
						)}
					</StyledBooksWrapper>
				</StyledAuthorBooks>
			</StyledSingleWrapper>
		</>
	);
};
