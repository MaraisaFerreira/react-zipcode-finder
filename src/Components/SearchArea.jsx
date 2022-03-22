import './SearchArea.css';

import { ImSearch } from 'react-icons/im';

const SearchArea = () => {
	return (
		<div className='search-area'>
			<input type='text' placeholder='Enter a ZipCode here...' />
			<button className='btn-search'>
				<ImSearch size={25} color='#fff' />
			</button>
		</div>
	);
};

export default SearchArea;
