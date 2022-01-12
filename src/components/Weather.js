import React from 'react'
import WeatherPanel from './WeatherPanel'
import PropTypes from 'prop-types';
import { MdOutlineArrowBack } from 'react-icons/md';

const Weather = ({setBool, setVar, data}) => {

	const handleBack = () =>{
		setBool(false)
		setVar('')
	}

	return (
		<div className='weather'>
			<h2 className="header"><MdOutlineArrowBack onClick={handleBack} size={20}/> {data.name}, {data.sys.country}</h2>
			<WeatherPanel data={data}/>

		</div>
	)
}

Weather.propTypes = {
	data: PropTypes.object.isRequired,
	setVar: PropTypes.func.isRequired,
	setBool: PropTypes.func.isRequired,
}


export default Weather