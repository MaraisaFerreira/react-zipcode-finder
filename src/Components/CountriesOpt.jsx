import './CountriesOpt.css';

const CountriesOpt = ({ countryOpt, changeCountry }) => {
	return (
		<div className='countries-container'>
			<p>Select a country:</p>
			<div className='countries-opt'>
				<input
					type='radio'
					id='br'
					name='countries'
					value='br'
					checked={countryOpt === 'br'}
					onChange={(e) => changeCountry('br')}
				/>
				<label htmlFor='br'>
					<img src='src/assets/br.svg' alt='Brazil' title='Brazil' />
				</label>
				<input
					type='radio'
					id='us'
					name='countries'
					value='us'
					checked={countryOpt === 'us'}
					onChange={(e) => changeCountry('us')}
				/>
				<label htmlFor='us'>
					<img
						src='src/assets/us.svg'
						alt='United States'
						title='United States'
					/>
				</label>
				<input
					type='radio'
					id='es'
					name='countries'
					value='es'
					checked={countryOpt === 'es'}
					onChange={(e) => changeCountry('es')}
				/>
				<label htmlFor='es'>
					<img src='src/assets/es.svg' alt='Spain' title='Spain' />
				</label>
				<input
					type='radio'
					id='ge'
					name='countries'
					value='ge'
					checked={countryOpt === 'ge'}
					onChange={(e) => changeCountry('ge')}
				/>
				<label htmlFor='ge'>
					<img src='src/assets/ge.svg' alt='Germany' title='Germany' />
				</label>
				<input
					type='radio'
					id='fr'
					name='countries'
					value='fr'
					checked={countryOpt === 'fr'}
					onChange={(e) => changeCountry('fr')}
				/>
				<label htmlFor='fr'>
					<img src='src/assets/fr.svg' alt='France' title='France' />
				</label>
				<input
					type='radio'
					id='it'
					name='countries'
					value='it'
					checked={countryOpt === 'it'}
					onChange={(e) => changeCountry('it')}
				/>
				<label htmlFor='it'>
					<img src='src/assets/it.svg' alt='Italy' title='Italy' />
				</label>
				<input
					type='radio'
					id='pt'
					name='countries'
					value='pt'
					checked={countryOpt === 'pt'}
					onChange={(e) => changeCountry('pt')}
				/>
				<label htmlFor='pt'>
					<img src='src/assets/pt.svg' alt='Portugal' title='Portugal' />
				</label>
			</div>
		</div>
	);
};

export default CountriesOpt;
