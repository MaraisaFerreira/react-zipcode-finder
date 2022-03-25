import './SearchArea.css';

import { ImSearch } from 'react-icons/im';

const SearchArea = ({ value, handleChange, onFindZip, countryOpt }) => {
	const handleClick = async () => {
		if (!value) {
			alert('Digite um cep na área de busca...');
			return;
		}

		try {
			let url = '';
			console.log(countryOpt);

			countryOpt == 'br'
				? (url = `https://viacep.com.br/ws/${value}/json`)
				: (url = `http://api.zippopotam.us/${countryOpt}/${value}`);

			fetch(url)
				.then((resp) => resp.json())
				.then((json) => onFindZip(json));
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
