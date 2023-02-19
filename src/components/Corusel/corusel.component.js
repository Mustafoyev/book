import './corusel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Corusel = ({ children }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		arrows: false,
	};
	return <Slider {...settings}>{children}</Slider>;
};
