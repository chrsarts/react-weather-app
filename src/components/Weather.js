import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="main">
      <span>
        {data.name}, {data.sys.country}
      </span>
      <h1 className="temp">{data.main.temp}°</h1>
      <div className="misc">
        <div className="weather-desc">
          <span>{data.weather[0].description}</span>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="weatherIcon"
          />
        </div>
        <span>feels like: {data.main.feels_like}°</span>
        <span>humidity: {data.main.humidity}°</span>
        <div className="temp-minmax">
          <p>min: {data.main.temp_min}°</p>
          <p>/</p>
          <p>max: {data.main.temp_max}°</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
