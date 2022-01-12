//rafce
import PropTypes from 'prop-types';
import CityInputForm from './CityInputForm'

const CityInput = ({setVar, onClickF}) => {
	return (
		<div className="city-input">
			<h2 className="header">Select a City:</h2>
			<CityInputForm onClickF={onClickF} setVar={setVar}/>
		</div>
	)
}

CityInput.propTypes = {
	setVar: PropTypes.func.isRequired,
	onClickF: PropTypes.func.isRequired,
}

export default CityInput