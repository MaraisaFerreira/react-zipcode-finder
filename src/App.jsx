import './App.css';

import { useState } from 'react';

import AppTitle from './Components/AppTitle';
import ResultArea from './Components/ResultArea';
import SearchArea from './Components/SearchArea';

function App() {
	const [input, setInput] = useState('');
	const [zipCode, setZipCode] = useState({});

	const handleChange = (value) => {
		setInput(value);
	};

	return (
		<div className='main-container'>
			<AppTitle />

			<SearchArea value={input} handleChange={handleChange} />

			<ResultArea />
		</div>
	);
}

export default App;
