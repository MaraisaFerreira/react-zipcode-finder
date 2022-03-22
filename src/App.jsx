import './App.css';

import { ImSearch } from 'react-icons/im';

function App() {
	return (
		<div className='main-container'>
			<h1 className='title'>ZipCode Finder</h1>

			<div className='search-area'>
				<input type='text' placeholder='Enter a ZipCode here...' />
				<button className='btn-search'>
					<ImSearch size={25} color='#fff' />
				</button>
			</div>
			<div className='result-area'>
				<h2>75501-3796</h2>
				<span>Loy Shores Street</span>
				<span>District: Canyon Road</span>
				<span>North Clifton - ID</span>
				<span>Country: Berkshire</span>
			</div>
		</div>
	);
}

export default App;
