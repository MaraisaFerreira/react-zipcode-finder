import './SearchContainer.css';

import { useState } from 'react';

import ResultArea from './ResultArea';
import SearchArea from './SearchArea';
import CountriesOpt from './CountriesOpt';

const SearchContainer = () => {
	const [input, setInput] = useState('');
	const [zipCode, setZipCode] = useState({});

	const handleChange = (value) => {
		setInput(value);
	};

	const handleFindZip = (data) => {
		setZipCode(data);
	};

	return (
		<div className='search-container'>
			<CountriesOpt />
			<SearchArea
				value={input}
				handleChange={handleChange}
				onFindZip={handleFindZip}
			/>

			{Object.keys(zipCode).length > 0 && <ResultArea data={zipCode} />}
		</div>
	);
};

export default SearchContainer;
