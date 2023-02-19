import { useDispatch, useSelector } from 'react-redux';
import { addToken } from './redux/token/tokenAction';
import { Private } from './apps/Private';
import { Public } from './apps/Public';
import { useEffect } from 'react';
import axios from 'axios';
import { infoUser } from './redux/user/userAction';
import { setMode } from './redux/mode/modeAction';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { language } from './components/Language/Language';
import { langAction } from './redux/lang/langAction';

function App() {
	const dispatch = useDispatch();
	dispatch(addToken(localStorage.getItem('token')));
	dispatch(setMode(JSON.parse(localStorage.getItem('mode'))));
	dispatch(langAction(localStorage.getItem('lang')));
	const token = useSelector((state) => state.token.token);
	const lang = useSelector((state) => state.lang.lang);

	useEffect(() => {
		axios
			.get('http://localhost:5000/user/me', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 201) {
					localStorage.setItem('user', JSON.stringify(res.data));
				}
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		dispatch(infoUser(JSON.parse(localStorage.getItem('user'))));
	}, []);

	i18n.use(initReactI18next).init({
		fallbackLng: lang,
		interpolation: {
			escapeValue: false,
		},
		resources: {
			English: { translation: language.English },
			Russian: { translation: language.Russian },
			Uzbek: { translation: language.Uzbek },
		},
	});

	if (token) {
		return <Private />;
	}

	return <Public />;
}

export default App;
