import { Outlet, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login/login.component';
import { Register } from '../pages/Register/register.component';

export const Public = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
};
