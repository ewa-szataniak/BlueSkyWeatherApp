import DateFormat from "./StructureDate"
import WeatherTemperature from "./ThermalConditions"
import Days from "./Days"
function WeatherInfo(props) {
    return (
        <div className="Weather">
            <div className="location"><i class="fa-solid fa-location-dot"></i> {props.info.country} ,{props.info.city}</div>
            <img className="big-icon" title={props.info.description} alt={props.info.description} src={props.info.iconUrl} />
            <div className="description">{props.info.description}</div>
            <WeatherTemperature celsius={props.info.celsius}/>
            <DateFormat date={props.info.date} />
            <ul>
                <li><i className="fa-sharp fa-solid fa-wind"></i> Wind {props.info.wind} km/h</li>
                <li><i className="fa-solid fa-droplet"></i> Hum {props.info.humidity} %</li>
                {/* <li><i class="fa-solid fa-cloud-rain"></i> Rain 0.2 %</li> */}
            </ul>
            <Days coord={props.info.coord}/>
        </div>
    )
}

export default WeatherInfo;
