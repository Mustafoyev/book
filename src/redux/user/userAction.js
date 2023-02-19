import { USER, USER_REMOVE } from './userType';

export const infoUser = (user) => {
	return {
		type: USER,
		payload: user,
	};
};

export const userRemove = () => {
	return {
		type: USER_REMOVE,
		payload: '',
	};
};
