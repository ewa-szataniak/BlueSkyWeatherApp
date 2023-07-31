import { useState } from "react";
import WeatherInfo from "./AtmosphericData"
import Search from "./Search"
import axios from 'axios';
import { Bars } from 'react-loader-spinner'
function Weather({defaultCity}) {
    function search(city){
        const apiKey = "04oabt67c234956913f3d410bfd5b681"
        const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(url).then(handleResponse)
    }
    const [city, setCity] = useState(defaultCity)
    function handleSubmit(event) {
        event.preventDefault()
        search(city)
    }
    function handleChange(event) {
        event.preventDefault()
        setCity(event.target.value)
    }


    const [weatherData, setWeatherData] = useState({
        ready:false,
        country: null,
        coord: null,
        city: null,
        celsius: null,
        iconName: null,
        iconUrl: null,
        humidity: null,
        wind: null,
        date: null
    })
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            country: response.data.country,
            coord: response.data.coordinates,
            city: response.data.city,
            celsius: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            humidity: response.data.temperature.humidity,
            wind: Math.round(response.data.wind.speed),
            date: new Date(response.data.time * 1000)
        })
    }
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <Search handleChange={handleChange} handleSubmit={handleSubmit} />
            <WeatherInfo info={weatherData}/>
        </div>
        )

    } else {
        search(city)
        return (
            <div className="bars">
                <Bars
                    height="80"
                    width="80"
                    color="#FFFFFF"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /></div>
        )
    }
}
export default Weather;