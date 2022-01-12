import InputText from './InputText'
import PropTypes from 'prop-types';

const CityInputForm = ({setVar, onClickF}) => {



	return (
		<div className="city-input-form">
			<InputText onEnter={onClickF} setVar={setVar} text="City Name" what="city"/>
			<button onClick={onClickF}> Check Weather! </button>
		</div>
	)
}

CityInputForm.propTypes = {
	setVar: PropTypes.func.isRequired,
	onClickF: PropTypes.func.isRequired,
}

export default CityInputForm