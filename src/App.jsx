import './App.css';

import { FiSearch } from 'react-icons/fi';

function App() {
	return (
		<div className='main-container'>
			<h1 className='title'>ZipCode Finder</h1>

			<div className='search-area'>
				<input type='text' placeholder='Enter a ZipCode here...' />
				<button className='btn-search'>
					<FiSearch size={25} color='#fff' />
				</button>
			</div>
			<div className='result-area'>resultado</div>
		</div>
	);
}

export default App;
