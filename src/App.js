import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("cebu");
  const [unit, setUnit] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`;

  useEffect(() => {
    getWeatherData();
  }, []);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      getWeatherData();
    }
  };

  const getWeatherData = async () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
    setCity("");
  };

  return (
    <div className="App">
      <img src={require("./images/kimsan.png")} alt="MISSING" />
      <div className="title">
        <h3>mag</h3>
        <h1>weather weather</h1>
        <h3>app</h3>
      </div>
      <div className="content">
        <div className="top">
          <input
            type="text"
            placeholder="enter city"
            value={city}
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="main-container">
          {data ? (
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
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
