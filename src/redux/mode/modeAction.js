import { MODE } from './modeType';

export const setMode = (mode) => {
	return {
		type: MODE,
		payload: mode,
	};
};
