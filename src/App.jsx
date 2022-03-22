import './App.css';

import AppTitle from './Components/AppTitle';
import ResultArea from './Components/ResultArea';
import SearchArea from './Components/SearchArea';

function App() {
	return (
		<div className='main-container'>
			<AppTitle />

			<SearchArea />

			<ResultArea />
		</div>
	);
}

export default App;
