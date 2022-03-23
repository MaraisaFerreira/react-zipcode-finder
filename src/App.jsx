import './App.css';

import { useState } from 'react';

import AppTitle from './Components/AppTitle';
import ResultArea from './Components/ResultArea';
import SearchArea from './Components/SearchArea';
import CountriesOpt from './Components/CountriesOpt';

function App() {
	const [input, setInput] = useState('');
	const [zipCode, setZipCode] = useState({});

	const handleChange = (value) => {
		setInput(value);
	};

	const handleFindZip = (data) => {
		setZipCode(data);
	};

	return (
		<div className='main-container'>
			<AppTitle />

			<CountriesOpt />
			<SearchArea
				value={input}
				handleChange={handleChange}
				onFindZip={handleFindZip}
			/>

			<ResultArea data={zipCode} />
		</div>
	);
}

export default App;
