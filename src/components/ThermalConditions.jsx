import { useState } from "react";
function WeatherTemperature({ celsius }) {
    const [showCelsius, setShowCelsius] = useState(true)
    function handleClick(event) {
        setShowCelsius(!event.target.checked)
    }
    return (
        <div className="temperature">
            <h1 className="degree">{showCelsius ? celsius : Math.round((celsius * 9 / 5) + 32)}<span className="unit">° {showCelsius ? "C" : "F"}</span></h1>
            <div className="converter">
                <form>
                    <input
                        id="switch-button"
                        name="switch-button"
                        type="checkbox"
                        className="input-checkbox"
                        onClick={handleClick}
                        
                    />
                    <label htmlFor="switch-button" className="toggle">
                        toggle
                    </label>
                    <span className="light--text label-text">F</span>
                    <span className="dark--text label-text">C</span>
                </form>
            </div>
        </div>
    )
}

export default WeatherTemperature
