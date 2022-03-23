import './CountriesOpt.css';

const CountriesOpt = () => {
	return (
		<div className='countries-container'>
			<p>Select a country:</p>
			<div className='countries-opt'>
				<input type='radio' id='br' name='countries' value='br' />
				<label htmlFor='br'>
					<img src='src/assets/br.svg' alt='Brazil' title='Brazil' />
				</label>
				<input type='radio' id='us' name='countries' value='us' />
				<label htmlFor='us'>
					<img src='src/assets/us.svg' />
				</label>
				<input type='radio' id='es' name='countries' value='es' />
				<label htmlFor='es'>
					<img src='src/assets/es.svg' />
				</label>
				<input type='radio' id='de' name='countries' value='de' />
				<label htmlFor='de'>
					<img src='src/assets/de.svg' />
				</label>
				<input type='radio' id='fr' name='countries' value='fr' />
				<label htmlFor='fr'>
					<img src='src/assets/fr.svg' />
				</label>
				<input type='radio' id='gr' name='countries' value='gr' />
				<label htmlFor='gr'>
					<img src='src/assets/gr.svg' />
				</label>
				<input type='radio' id='it' name='countries' value='it' />
				<label htmlFor='it'>
					<img src='src/assets/it.svg' />
				</label>
				<input type='radio' id='pt' name='countries' value='pt' />
				<label htmlFor='pt'>
					<img src='src/assets/pt.svg' />
				</label>
			</div>
		</div>
	);
};

export default CountriesOpt;
