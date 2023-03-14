import './App.css';
import SearchPage from './search/SearchPage';
import RecipePage from './recipe/RecipePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
			<h1>TBD Recipe App</h1>
			<Routes>
				<Route path="/" element={<SearchPage/>} />
				<Route path="/recipe/:id" element={<RecipePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
     </div>
  );
}

function NotFound() {
	return (
		<>
			<h1>Page not found</h1>
			<p>That page doesn't exist yet.</p>
		</>
	);
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 4d558ca (adjusting back to original code for app.js)
