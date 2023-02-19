import { Button } from '@mui/material';
import { Corusel } from '../Corusel/corusel.component';
import {
	StyledHeroItem,
	StyledHeroItemText,
	StyledHeroList,
	StyledHero,
	StyledHeroSearchWrapper,
	StyledSearchTitle,
	StyledSerachForm,
	StyledSearchInput,
} from './hero.styles';
import { BiSearchAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export const Hero = ({ setData, setDataBook }) => {
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();
	const token = useSelector((state) => state.token.token);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		axios
			.get(
				'http://localhost:5000/author/search?author=' + evt.target[0].value,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));

		axios
			.get('http://localhost:5000/book/search?book=' + evt.target[0].value, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setDataBook(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<StyledHero
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<StyledHeroList>
				<Corusel>
					<StyledHeroItem>
						<StyledHeroItemText>{lang('hero.titleOne')}</StyledHeroItemText>
					</StyledHeroItem>
					<StyledHeroItem>
						<StyledHeroItemText>{lang('hero.titleTwo')}</StyledHeroItemText>
					</StyledHeroItem>
					<StyledHeroItem>
						<StyledHeroItemText>{lang('hero.titleThree')}</StyledHeroItemText>
					</StyledHeroItem>
					<StyledHeroItem>
						<StyledHeroItemText>{lang('hero.titleFour')}</StyledHeroItemText>
					</StyledHeroItem>
				</Corusel>
				<StyledHeroSearchWrapper
					style={
						mode
							? {
									backgroundColor: '#191919',
									boxShadow: '2px 8px 2px rgba(0, 0, 0, 0.25)',
							  }
							: { backgroundColor: '#fff' }
					}>
					<StyledSearchTitle>{lang('hero.searchTitle')}</StyledSearchTitle>
					<StyledSerachForm onSubmit={handleFormSubmit}>
						<StyledSearchInput
							style={
								mode
									? { backgroundColor: '#404040' }
									: { backgroundColor: '#f5f5f5' }
							}
							type='text'
							placeholder={lang('hero.inputText')}
						/>
						<Button
							sx={{
								width: '150px',
								padding: '10px',
								backgroundColor: '#C9AC8C',
								borderRadius: '15px',
								textTransform: 'capitalize',
								fontFamily: 'Poppins',
								fontWeight: '400',
								fontSize: '16px',
								lineHeight: '24px',
								color: '#EFDAC3',
							}}
							type='submit'
							variant='contained'
							startIcon={<BiSearchAlt />}>
							{lang('hero.buttonText')}
						</Button>
					</StyledSerachForm>
				</StyledHeroSearchWrapper>
			</StyledHeroList>
		</StyledHero>
	);
};
