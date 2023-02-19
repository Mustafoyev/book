import { useEffect, useState } from 'react';
import {
	StyledBookCartLink,
	StyledBookCartWrapper,
	StyledBookImg,
	StyledBookText,
	StyledBookTitle,
} from './bookCart.styles';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const BookCart = ({ el }) => {
	const token = useSelector((state) => state.token.token);
	const [data, setData] = useState([]);
	const mode = useSelector((state) => state.mode.mode);

	useEffect(() => {
		axios
			.get('http://localhost:5000/author/authorId/' + el.author_id, {
				headers: {
					Authorization: token,
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<StyledBookCartWrapper>
			<StyledBookCartLink to={`/book/${el.id}/${el.author_id}`}>
				<StyledBookImg
					src={'http://localhost:5000/' + el.image}
					alt={el.title}
					width={190}
					height={283}
				/>
				<StyledBookTitle
					style={mode ? { color: '#C9AC8C' } : { color: '#000000' }}>
					{el.title}
				</StyledBookTitle>
				<StyledBookText
					style={
						mode ? { color: '#A3A3A3' } : { color: 'rgba(13, 13, 13, 0.6)' }
					}>
					{data?.first_name + ' ' + data?.last_name}
				</StyledBookText>
			</StyledBookCartLink>
		</StyledBookCartWrapper>
	);
};
