import Day from "./Sunlight"
import { useState,useEffect } from "react"
import axios from 'axios';
function Days(props) {
    function load(){
        const longitude = props.coord.longitude
        const latitude = props.coord.latitude
        const apiKey = "04oabt67c234956913f3d410bfd5b681"
        const url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
        axios.get(url).then(handleResponse)
    }
    useEffect(()=>{
        setLoaded(false)
    }, [props.coord])
    const [loaded, setLoaded]=useState(false)
    const [forecast, setForecast]=useState(null)
    function handleResponse(response){
        setLoaded(true)
        setForecast(response.data.daily)
    }
    if (loaded){
        const days = forecast.map((day, index )=>{
            if(index>0){
                return <Day data={day} key={index}/>
            }else{
                return null
            }
        })
        return (
            <div className="Days">
                {days}
            </div>
        )
    }else{
        load()
        return null
    }
}

export default Days
