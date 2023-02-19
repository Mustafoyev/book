import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Books } from '../pages/Books/books.component';
import { AddAuthor } from '../pages/AddAuthor/addauthor.component';
import { AddBook } from '../pages/AddBook/addbook.component';
import { SingleAuthor } from '../pages/SingleAuthor/singleAuthor.component';
import { SingleBook } from '../pages/SingleBook/singleBook.component';
import { Profile } from '../pages/Profile/profile.component';

export const Private = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books' element={<Books />} />
				<Route path='/author/:id' element={<SingleAuthor />} />
				<Route path='/book/:id/:author_id' element={<SingleBook />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/addauthor' element={<AddAuthor />} />
				<Route path='/addbook' element={<AddBook />} />
			</Routes>
		</>
	);
};
