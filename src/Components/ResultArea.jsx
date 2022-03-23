import './ResultArea.css';

const ResultArea = ({ data }) => {
	return (
		<div className='result-area'>
			<h2>CEP: {data.cep}</h2>
			<span>{data.logradouro}</span>
			<span>
				{data.localidade} - {data.uf}
			</span>
			<span>DDD - {data.ddd}</span>
		</div>
	);
};

export default ResultArea;
