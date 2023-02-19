import React from 'react';
import {
	StyledCartContent,
	StyledCartDate,
	StyledCartImg,
	StyledCartLink,
	StyledCartName,
	StyledCartWrapper,
} from './authorCart.styles';
import { useSelector } from 'react-redux';

export const AuthorCart = ({ el }) => {
	const mode = useSelector((state) => state.mode.mode);
	return (
		<StyledCartWrapper
			style={
				mode ? { backgroundColor: '#1f1f1f' } : { backgroundColor: '#f5f5f5' }
			}>
			<StyledCartLink to={`/author/${el.id}`}>
				<StyledCartImg
					src={'http://localhost:5000/' + el.image}
					alt={el.first_name}
					width={295}
					height={224}
				/>
				<StyledCartContent>
					<StyledCartName
						style={mode ? { color: '#C9AC8C' } : { color: '#000000' }}>
						{el.first_name + ' ' + el.last_name}
					</StyledCartName>
					<StyledCartDate
						style={
							mode ? { color: '#A5A5A5' } : { color: 'rgba(0, 0, 0, 0.6)' }
						}>
						{el.date_of_birth + '-' + el.date_of_death}
					</StyledCartDate>
				</StyledCartContent>
			</StyledCartLink>
		</StyledCartWrapper>
	);
};
