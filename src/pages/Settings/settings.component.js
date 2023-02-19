import { Button, Switch, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
	StyledSettingsButton,
	StyledSettingsContent,
	StyledSettingsLangThemeWrapper,
	StyledSettingsSelect,
	StyledSettingsSelectBottomText,
	StyledSettingsSelectItem,
	StyledSettingsSelectTopText,
	StyledSettingsSelectWrapper,
	StyledSettingsThemeText,
	StyledSettingsTitle,
	StyledSettingsWrapper,
} from './settings.styles';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../redux/mode/modeAction';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { langAction } from '../../redux/lang/langAction';
import { useTranslation } from 'react-i18next';

export const Settings = () => {
	const navigate = useNavigate();
	const mode = useSelector((state) => state.mode.mode);
	const dispatch = useDispatch();
	const [modeVal, setModeVal] = useState(mode);
	const Language = useSelector((state) => state.lang.lang);
	const [lang, i18n] = useTranslation();

	const handleSetMode = () => {
		setModeVal(!modeVal);
	};

	const handleLang = (evt) => {
		localStorage.setItem('lang', evt.target.value);
	};

	const handleSave = () => {
		dispatch(setMode(modeVal));
		localStorage.setItem('mode', JSON.stringify(modeVal));
		dispatch(langAction(localStorage.getItem('lang')));
		document.location.reload();
		toast('Changes saved');
	};

	return (
		<StyledSettingsWrapper
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<Button
				onClick={() => navigate(-1)}
				sx={{
					position: 'absolute',
					top: '100px',
					left: '60px',
					color: mode ? '#fff' : '#000',
				}}
				startIcon={<BiArrowBack color={mode ? '#fff' : '#000'} />}>
				{lang('myProfile.backBtn')}
			</Button>
			<StyledSettingsContent>
				<StyledSettingsTitle
					style={mode ? { color: '#DEDEDE' } : { color: '#212121' }}>
					{lang('settingsPage.setTitle')}
				</StyledSettingsTitle>
				<StyledSettingsLangThemeWrapper>
					<StyledSettingsSelectWrapper>
						<StyledSettingsSelectTopText
							style={mode ? { color: '#F3F6F9' } : { color: '#464e5f' }}>
							{lang('settingsPage.lang')}
						</StyledSettingsSelectTopText>
						<StyledSettingsSelect onChange={handleLang} defaultValue={Language}>
							<StyledSettingsSelectItem value='English'>
								English
							</StyledSettingsSelectItem>
							<StyledSettingsSelectItem value='Russian'>
								Russian
							</StyledSettingsSelectItem>
							<StyledSettingsSelectItem value='Uzbek'>
								Uzbek
							</StyledSettingsSelectItem>
						</StyledSettingsSelect>
						<StyledSettingsSelectBottomText>
							{lang('settingsPage.langSelect')}
						</StyledSettingsSelectBottomText>
					</StyledSettingsSelectWrapper>
					<StyledSettingsThemeText
						style={mode ? { color: '#DEDEDE' } : { color: '#212121' }}>
						{lang('settingsPage.theme')}
					</StyledSettingsThemeText>
					<Switch
						onClick={handleSetMode}
						checked={modeVal}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
				</StyledSettingsLangThemeWrapper>
				<StyledSettingsButton
					onClick={handleSave}
					style={
						mode
							? { backgroundColor: '#F1F6FF', color: '#0D0D0D' }
							: { backgroundColor: '#152540', color: '#fff' }
					}>
					{lang('myProfile.myButton')}
				</StyledSettingsButton>
			</StyledSettingsContent>
			<ToastContainer autoClose={2000} />
		</StyledSettingsWrapper>
	);
};
