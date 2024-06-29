import FlagBr from '../assets/imgs/br.svg';
import FlagEs from '../assets/imgs/es.svg';
import FlagFr from '../assets/imgs/fr.svg';
import FlagGe from '../assets/imgs/ge.svg';
import FlagUs from '../assets/imgs/us.svg';
//import FlagGr from '../assets/imgs/gr.svg';
import FlagIt from '../assets/imgs/it.svg';
import FlagPt from '../assets/imgs/pt.svg';
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
					<img src={FlagBr} alt='Brazil' title='Brazil' />
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
					<img src={FlagUs} alt='United States' title='United States' />
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
					<img src={FlagEs} alt='Spain' title='Spain' />
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
					<img src={FlagGe} alt='Germany' title='Germany' />
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
					<img src={FlagFr} alt='France' title='France' />
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
					<img src={FlagIt} alt='Italy' title='Italy' />
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
					<img src={FlagPt} alt='Portugal' title='Portugal' />
				</label>
			</div>
		</div>
	);
};

export default CountriesOpt;
