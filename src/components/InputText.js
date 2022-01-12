import PropTypes from 'prop-types';

const InputText = ({text, what, setVar, onEnter}) => {
	
	const handleKeyDown = (event) => {
	    if (event.key === 'Enter') {
	      onEnter()
	    }
	  }

	const hangleChange = async (e) => {
		setVar(e.target.value)
	}

	return (
		<>
			<input type="text" name={what} id={what} placeholder={text} onInput={hangleChange} onKeyDown={handleKeyDown} />
		</>
	)
}

InputText.propTypes = {
	text: PropTypes.string.isRequired,
	what: PropTypes.string.isRequired,
	setVar: PropTypes.func.isRequired,
	onEnter: PropTypes.func.isRequired,
}

export default InputText