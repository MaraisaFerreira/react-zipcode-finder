import './SearchArea.css';

import { ImSearch } from 'react-icons/im';

const SearchArea = ({
	value,
	handleChange,
	onFindZip,
	countryOpt,
	notFound,
}) => {
	const handleClick = async () => {
		if (!value) {
			alert('Digite um cep na área de busca...');
			return;
		}

		try {
			let url = '';

			countryOpt == 'br'
				? (url = `https://viacep.com.br/ws/${value}/json`)
				: (url = `http://api.zippopotam.us/${countryOpt}/${value}`);

			fetch(url)
				.then((resp) => {
					resp.status == 404 ? notFound(true) : notFound(false);
					return resp.json();
				})
				.then((json) => onFindZip(json));
		} catch (error) {}
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
