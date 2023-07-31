function Day(props) {
    const {data}=props
    const date = new Date(data.time *1000)
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function min(){
        return Math.round(data.temperature.minimum)
    }
    function max(){
        return Math.round(data.temperature.maximum)
    }
    return (
        <div className="Day">
            <div className="day-degree"><span className="max-degree">{max()}°</span> {""} <span className="min-degree">{min()}°</span></div>
            <img className="small-icon" src={data.condition.icon_url} alt={data.condition.description} title={data.condition.description}/>
            <div className="week-day-name">{dayNames[date.getDay()]}</div>
            <div className="day-description">{data.condition.description}</div>
        </div>)
}
export default Day;