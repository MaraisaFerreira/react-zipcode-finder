import './ResultArea.css';

const ResultArea = ({ data, countryOpt }) => {
	let result;
	countryOpt == 'br'
		? (result = (
				<div className='result-area'>
					<h2>CEP: {data.cep}</h2>
					<span>{data.logradouro}</span>
					<span>
						{data.localidade} - {data.uf}
					</span>
					<span>DDD - {data.ddd}</span>
				</div>
		  ))
		: (result = (
				<div className='result-area'>
					<h2>ZipCode: {data['post code']}</h2>
					<span>Local: {data.places[0]['place name']}</span>
					<span>State - {data.places[0].state}</span>
					<span>Country - {data.country}</span>
				</div>
		  ));
	return result;
};

export default ResultArea;
