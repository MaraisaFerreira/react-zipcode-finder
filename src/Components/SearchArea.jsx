import './SearchArea.css';

import { ImSearch } from 'react-icons/im';

const SearchArea = ({ value, handleChange }) => {
	const urlBase = 'http://api.zippopotam.us/';

	const handleClick = async () => {
		if (!value) {
			alert('Digite um cep na área de busca...');
			return;
		}

		try {
			fetch(urlBase + `BR/05414-000`)
				.then((resp) => resp.json())
				.then((json) => console.log(json));
		} catch (error) {
			console.log('Not found');
		}
	};

	return (
		<div className='search-area'>
			<input
				type='text'
				placeholder='Enter a ZipCode here...'
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<button className='btn-search' onClick={(e) => handleClick()}>
				<ImSearch size={25} color='#fff' />
			</button>
		</div>
	);
};

export default SearchArea;
