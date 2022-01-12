import React from 'react'
import WeatherPanelIcon from './WeatherPanelIcon'
import PropTypes from 'prop-types';
import { WiHumidity } from 'react-icons/wi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { FaTemperatureLow } from 'react-icons/fa';


const WeatherPanel = ({data}) => {
	return (
		<>
			<div className="weather-head">
				<WeatherPanelIcon main={data.weather[0].main}/>
				<div className="weather-right">
					<h2 className="temp-big">{data.main.temp}&#176;</h2>
					<p className="temp-text">{data.weather[0].description}</p>
				</div>
			</div>

			<div className="weather-down"> 
				<p className="humidity"> <WiHumidity /> {data.main.humidity}% </p>
				<p className="temp-small"> <FaTemperatureLow /> {data.main.temp_min}&#176; </p>
				<p className="temp-small"> <FaTemperatureHigh /> {data.main.temp_max}&#176; </p>
			</div>
		</>
	)
}

WeatherPanel.propTypes = {
	data: PropTypes.object.isRequired,
}

export default WeatherPanel