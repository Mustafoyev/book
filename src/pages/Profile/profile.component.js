import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { StyledProfileIcon, StyledProfileTab } from './profile.styles';
import { MyProfile } from '../MyProfile';
import { Security } from '../Security/security.component';
import { Settings } from '../Settings/settings.component';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
	const [value, setValue] = useState(1);
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const handleChange = (evt) => {
		const tabValue = +evt.target.attributes.tabIndex.nodeValue;
		setValue(tabValue);
	};

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				variant='fullWidth'
				aria-label='basic tabs example'
				sx={{
					'& button': {
						justifyContent: 'flex-start',
						backgroundColor: mode ? '#2D2D2D' : '#F3F6F9',
						borderRadius: '4px 4px 0px 0px',
						color: '#90959F',
					},
					'& button:active': {
						backgroundColor: mode ? '#F3F6F9' : '#DDE6F5',
						color: '#152540',
					},
					'& button:focus': {
						backgroundColor: mode ? '#F3F6F9' : '#DDE6F5',
						color: '#152540',
					},
					'& button.Mui-selected': {
						backgroundColor: mode ? '#F3F6F9' : '#DDE6F5',
						color: '#152540',
					},
				}}
				TabIndicatorProps={{
					style: {
						width: '0',
					},
				}}>
				<Tab
					value={1}
					tabIndex={1}
					id={`simple-tab-${1}`}
					label={lang('profile.profile')}
					icon={
						<StyledProfileIcon
							style={
								value === 1
									? {
											backgroundColor: mode ? '#2D2D2D' : '#152540',
											color: '#fff',
									  }
									: {
											backgroundColor: mode ? '#2D2D2D' : '#e5eaee',
											color: mode ? '#90959F' : '#3699ff',
									  }
							}>
							1
						</StyledProfileIcon>
					}
					iconPosition='start'
					sx={{
						fontFamily: 'Poppins',
						fontWeight: '600',
						fontSize: '14px',
						lineHeight: '21px',
						color: '#90959F',
						textTransform: 'capitalize',
					}}
				/>
				<Tab
					value={2}
					tabIndex={2}
					id={`simple-tab-${2}`}
					label={lang('profile.security')}
					icon={
						<StyledProfileIcon
							style={
								value === 2
									? {
											backgroundColor: mode ? '#2D2D2D' : '#152540',
											color: '#fff',
									  }
									: {
											backgroundColor: mode ? '#2D2D2D' : '#e5eaee',
											color: mode ? '#90959F' : '#3699ff',
									  }
							}>
							2
						</StyledProfileIcon>
					}
					iconPosition='start'
					sx={{
						fontFamily: 'Poppins',
						fontWeight: '600',
						fontSize: '14px',
						lineHeight: '21px',
						color: '#464E5F',
						textTransform: 'capitalize',
					}}
				/>
				<Tab
					value={3}
					tabIndex={3}
					id={`simple-tab-${3}`}
					label={lang('profile.settings')}
					icon={
						<StyledProfileIcon
							style={
								value === 3
									? {
											backgroundColor: mode ? '#2D2D2D' : '#152540',
											color: '#fff',
									  }
									: {
											backgroundColor: mode ? '#2D2D2D' : '#e5eaee',
											color: mode ? '#90959F' : '#3699ff',
									  }
							}>
							3
						</StyledProfileIcon>
					}
					iconPosition='start'
					sx={{
						fontFamily: 'Poppins',
						fontWeight: '600',
						fontSize: '14px',
						lineHeight: '21px',
						color: '#464E5F',
						textTransform: 'capitalize',
					}}
				/>
			</Tabs>

			<StyledProfileTab
				value={value}
				index={1}
				role='tabpanel'
				hidden={value !== 1}>
				<MyProfile />
			</StyledProfileTab>
			<StyledProfileTab
				value={value}
				index={2}
				role='tabpanel'
				hidden={value !== 2}>
				<Security />
			</StyledProfileTab>
			<StyledProfileTab
				value={value}
				index={3}
				role='tabpanel'
				hidden={value !== 3}>
				<Settings />
			</StyledProfileTab>
		</>
	);
};
