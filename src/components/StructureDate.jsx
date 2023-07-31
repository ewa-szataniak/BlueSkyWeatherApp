function Date(props) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const hour = props.date.getHours()
    const minutes = props.date.getSeconds()
    return (<div>
        <div className="date">{props.date.getDate()}th {month[props.date.getMonth()]} {props.date.getFullYear()}</div>
        <ul>
            <li>{dayNames[props.date.getDay()]}</li>
            <li> {hour < 10 ? `0${hour}` : hour} : {minutes < 10 ? `0${minutes}` : minutes}</li>
        </ul>
    </div>)
}
export default Date;