import { LANG } from './langType';

export const langAction = (lang) => {
	return {
		type: LANG,
		payload: lang,
	};
};
