import CityInput from './components/CityInput'
import Weather from './components/Weather'
import { useState } from 'react';

function App() {

  const [city, setCity] = useState('')
  const [citySetted, setCitySetted] = useState(false)
  const [weather, setWeather] = useState('')

  const onClickCity = async () => {
    const weatherFromServer = await fetchWeather()
    if(weatherFromServer.cod === 200){
      setWeather(weatherFromServer)
      setCitySetted(true)
    }
    else{
      alert("No city found!")
    }
  }


const fetchWeather = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=d1694e8c4784d560a1be93ad1566f17a&units=metric`)
      const data = await res.json()

      return data
    }



  return (
    <div className="container">
      {citySetted ? <Weather data={weather} setBool={setCitySetted} setVar={setCity}/> : 
      <CityInput onClickF={onClickCity} setVar={setCity} />}
    </div>
  );
}

export default App;
