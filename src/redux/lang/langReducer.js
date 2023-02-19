import { LANG } from './langType';

const initialState = {
	lang: '',
};

export const langReducer = (state = initialState, action) => {
	switch (action.type) {
		case LANG:
			return {
				...state,
				lang: action.payload,
			};
		default:
			return state;
	}
};
