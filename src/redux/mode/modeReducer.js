import { MODE } from './modeType';

const initialState = {
	mode: false,
};

export const modeReducer = (state = initialState, action) => {
	switch (action.type) {
		case MODE:
			return {
				...state,
				mode: action.payload,
			};
		default:
			return state;
	}
};
