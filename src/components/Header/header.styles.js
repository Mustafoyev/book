import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 100px;
`;

export const StyledHeaderLogo = styled(NavLink)`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 25px;
	line-height: 38px;
	color: #d1b89d;
	text-decoration: none;
`;

export const StyledHeaderNav = styled.nav`
	display: flex;
	align-items: center;
`;

export const StyledHeaderNavList = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const StyledHeaderListItem = styled.li`
	& + & {
		margin-left: 42px;
	}
`;

export const StyledHeaderLink = styled(NavLink)`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 144.4%;
	color: #0d0d0d;
	text-decoration: none;
	opacity: 0.5;

	&.active {
		opacity: 1;
	}
`;

export const StyledHeaderDropLink = styled(Link)`
	display: block;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-decoration: none;
	color: #000000;
`;
