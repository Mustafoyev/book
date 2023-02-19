import { combineReducers } from 'redux';
import { tokenReducer } from './token/tokenReducer';
import { userReducer } from './user/userReducer';
import { modeReducer } from './mode/modeReducer';
import { langReducer } from './lang/langReducer';

export const rootReducer = combineReducers({
	token: tokenReducer,
	user: userReducer,
	mode: modeReducer,
	lang: langReducer,
});
