import React from 'react'
import PropTypes from 'prop-types';
import { TiWeatherCloudy } from 'react-icons/ti';
import { IoThunderstormOutline } from 'react-icons/io5';
import { BsCloudDrizzle } from 'react-icons/bs';
import { BsCloudRain } from 'react-icons/bs';
import { BsCloudSnow } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { RiMistFill } from 'react-icons/ri';



const WeatherPanelIcon = ({main}) => {

	const dict = {
		"Thunderstorm" : IoThunderstormOutline,
		"Drizzle" : BsCloudDrizzle,
		"Rain" : BsCloudRain,
		"Snow" : BsCloudSnow,
		"Atmosphere " : RiMistFill,
		"Clear" : BsSun,
		"Clouds" : TiWeatherCloudy
	}

	const Icon = dict[main];

	return <Icon size={100}/>

}

WeatherPanelIcon.propTypes = {
	main: PropTypes.string.isRequired,
}


export default WeatherPanelIcon