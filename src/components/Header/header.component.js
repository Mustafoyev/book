import {
	StyledHeaderDropLink,
	StyledHeaderLink,
	StyledHeaderListItem,
	StyledHeaderLogo,
	StyledHeaderNav,
	StyledHeaderNavList,
	StyledHeaderWrapper,
} from './header.styles';
import { Avatar, Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../../redux/token/tokenAction';
import { useNavigate } from 'react-router-dom';
import { userRemove } from '../../redux/user/userAction';
import { useTranslation } from 'react-i18next';

export const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.user);
	const mode = useSelector((state) => state.mode.mode);
	const [lang, i18n] = useTranslation();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		localStorage.removeItem('token');
		dispatch(removeToken(''));
		localStorage.removeItem('user');
		dispatch(userRemove({}));
		navigate('/');
	};

	return (
		<StyledHeaderWrapper
			style={
				mode ? { backgroundColor: '#191919' } : { backgroundColor: '#fff' }
			}>
			<StyledHeaderLogo to='/'>{lang('header.logo')}</StyledHeaderLogo>
			<StyledHeaderNav>
				<StyledHeaderNavList>
					<StyledHeaderListItem>
						<StyledHeaderLink
							style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}
							to='/'>
							{lang('header.mainPage')}
						</StyledHeaderLink>
					</StyledHeaderListItem>
					<StyledHeaderListItem>
						<StyledHeaderLink
							style={mode ? { color: '#fff' } : { color: '#0d0d0d' }}
							to='/books'>
							{lang('header.bookPage')}
						</StyledHeaderLink>
					</StyledHeaderListItem>
				</StyledHeaderNavList>
				<Box sx={{ marginLeft: '20px' }}>
					<Button
						id='fade-button'
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						endIcon={
							open ? (
								<BsChevronUp color={mode ? '#fff' : '#000'} />
							) : (
								<BsChevronDown color={mode ? '#fff' : '#000'} />
							)
						}>
						<Avatar
							alt={user.first_name}
							src={'http://localhost:5000/' + user.image}
						/>
					</Button>
					<Menu
						id='fade-menu'
						MenuListProps={{
							'aria-labelledby': 'fade-button',
							style: mode
								? { backgroundColor: '#222222' }
								: { backgroundColor: '#fff' },
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}>
						<MenuItem>
							<StyledHeaderDropLink
								style={mode ? { color: '#C9AC8C' } : { color: '#000' }}
								to='/profile'
								onClick={handleClose}>
								{lang('header.profile')}
							</StyledHeaderDropLink>
						</MenuItem>
						<MenuItem>
							<StyledHeaderDropLink
								style={mode ? { color: '#C9AC8C' } : { color: '#000' }}
								to='/addauthor'
								onClick={handleClose}>
								{lang('header.addAuthor')}
							</StyledHeaderDropLink>
						</MenuItem>
						<MenuItem>
							<StyledHeaderDropLink
								style={mode ? { color: '#C9AC8C' } : { color: '#000' }}
								to='/addbook'
								onClick={handleClose}>
								{lang('header.addBook')}
							</StyledHeaderDropLink>
						</MenuItem>
						<MenuItem>
							<StyledHeaderDropLink
								style={mode ? { color: '#C9AC8C' } : { color: '#000' }}
								onClick={handleLogOut}
								to='/'>
								{lang('header.logOut')}
							</StyledHeaderDropLink>
						</MenuItem>
					</Menu>
				</Box>
			</StyledHeaderNav>
		</StyledHeaderWrapper>
	);
};
