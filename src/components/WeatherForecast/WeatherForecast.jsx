import './WeatherForecast.css';
const WeatherForecasts = ({forecast}) => {
    
    return (
        <div className="weather">
          <h2>Day of the Week: {forecast.day}</h2>
          <img src={forecast.img} alt={forecast.imgAlt} />
          <p><span>conditions: </span>{forecast.conditions}</p>
          <p><span>time: </span>{forecast.time}</p>
        </div>
    );
}

export default WeatherForecasts;