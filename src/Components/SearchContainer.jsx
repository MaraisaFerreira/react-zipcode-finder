import './SearchContainer.css';

import { useState } from 'react';

import ResultArea from './ResultArea';
import SearchArea from './SearchArea';
import CountriesOpt from './CountriesOpt';

const SearchContainer = () => {
	const [input, setInput] = useState('');
	const [zipCode, setZipCode] = useState({});
	const [countryOpt, setCountryOpt] = useState('br');

	const handleChange = (value) => {
		setInput(value);
	};

	const handleFindZip = (data) => {
		setZipCode(data);
	};

	const handleCountryOpt = (value) => {
		setCountryOpt(value);
	};

	return (
		<div className='search-container'>
			<CountriesOpt countryOpt={countryOpt} changeCountry={handleCountryOpt} />
			<SearchArea
				value={input}
				handleChange={handleChange}
				onFindZip={handleFindZip}
				countryOpt={countryOpt}
			/>

			{Object.keys(zipCode).length > 0 && (
				<ResultArea data={zipCode} countryOpt={countryOpt} />
			)}
		</div>
	);
};

export default SearchContainer;
